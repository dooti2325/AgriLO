import json
import os
import tempfile
from typing import Any

import h5py
import tensorflow as tf


def _sanitize_keras_config(node: Any) -> None:
    if isinstance(node, dict):
        if node.get("class_name") == "InputLayer" and isinstance(node.get("config"), dict):
            config = node["config"]
            batch_shape = config.pop("batch_shape", None)
            if batch_shape is not None and "batch_input_shape" not in config:
                config["batch_input_shape"] = batch_shape
            config.pop("optional", None)

        for value in node.values():
            _sanitize_keras_config(value)
    elif isinstance(node, list):
        for item in node:
            _sanitize_keras_config(item)


def _write_sanitized_h5_copy(model_path: str) -> str:
    fd, temp_path = tempfile.mkstemp(suffix=".h5")
    os.close(fd)

    with h5py.File(model_path, "r") as source, h5py.File(temp_path, "w") as target:
        for key, value in source.attrs.items():
            target.attrs[key] = value

        model_config = source.attrs.get("model_config")
        if model_config is None:
            raise ValueError("Missing model_config in H5 model file")

        if isinstance(model_config, bytes):
            model_config = model_config.decode("utf-8")

        config_data = json.loads(model_config)
        _sanitize_keras_config(config_data)
        target.attrs["model_config"] = json.dumps(config_data).encode("utf-8")

        source.copy("model_weights", target)

        if "optimizer_weights" in source:
            source.copy("optimizer_weights", target)

    return temp_path


def load_model_with_compat(model_path: str):
    try:
        return tf.keras.models.load_model(model_path, compile=False)
    except Exception as original_error:
        temp_path = _write_sanitized_h5_copy(model_path)
        try:
            return tf.keras.models.load_model(temp_path, compile=False)
        except Exception:
            raise original_error
        finally:
            try:
                os.remove(temp_path)
            except OSError:
                pass

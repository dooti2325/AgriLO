from slowapi import Limiter
from slowapi.util import get_remote_address

def exempt_options(request):
    return request.method == "OPTIONS"

limiter = Limiter(
    key_func=get_remote_address,
    exempt_when=exempt_options
)

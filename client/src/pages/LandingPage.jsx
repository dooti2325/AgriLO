import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const LIVE_SITE_URL = 'https://agri-lo-six.vercel.app';

const proofStats = [
    { label: 'Farmers supported', value: '50K+' },
    { label: 'Disease scans served', value: '1.2M' },
    { label: 'Crop journeys tracked', value: '50+' },
    { label: 'Model confidence', value: '98%' },
];

const capabilities = [
    {
        icon: 'neurology',
        title: 'AI diagnosis in seconds',
        description: 'Upload a crop image and get fast disease insights with treatment guidance that is easy to act on.',
    },
    {
        icon: 'sensors',
        title: 'Sensor-driven soil intelligence',
        description: 'Blend NPK, pH, moisture, and temperature readings into one live decision layer for the field.',
    },
    {
        icon: 'chat',
        title: 'Multilingual farming support',
        description: 'Ask Agri-Lo questions in natural language and get practical help tuned for real farm workflows.',
    },
];

const workflow = [
    {
        step: '01',
        title: 'Capture field reality',
        description: 'Collect soil readings or upload plant images directly from the farm.',
    },
    {
        step: '02',
        title: 'Analyze with AI and IoT',
        description: 'Agri-Lo combines model predictions, hardware telemetry, and historical trends.',
    },
    {
        step: '03',
        title: 'Act with confidence',
        description: 'Move from guesswork to clear next steps for yield, health, and timing.',
    },
];

const resourceLinks = [
    { label: 'Live website', href: LIVE_SITE_URL, icon: 'public' },
    { label: 'Launch dashboard', href: `${LIVE_SITE_URL}/auth`, icon: 'dashboard' },
    { label: 'Try crop scanner', href: `${LIVE_SITE_URL}/auth`, icon: 'qr_code_scanner' },
];

const LandingPage = () => {
    const { language, changeLanguage } = useLanguage();

    return (
        <div className="min-h-screen bg-[#f4efe4] text-slate-950">
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(22,163,74,0.22),_transparent_30%),radial-gradient(circle_at_top_right,_rgba(245,158,11,0.18),_transparent_25%),linear-gradient(180deg,_#f4efe4_0%,_#f7f5ef_45%,_#ffffff_100%)]" />
                <div className="absolute inset-x-0 top-0 h-28 bg-[linear-gradient(180deg,_rgba(15,23,42,0.12),_transparent)]" />

                <header className="relative z-10 border-b border-black/5">
                    <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-5 md:px-8">
                        <Link to="/" className="flex items-center gap-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-lime-300 shadow-[0_16px_40px_rgba(15,23,42,0.16)]">
                                <span className="material-symbols-outlined text-[28px]">spa</span>
                            </div>
                            <div>
                                <p className="text-xs font-bold uppercase tracking-[0.35em] text-emerald-700">Agri-Lo</p>
                                <p className="text-sm text-slate-600">AI farming command center</p>
                            </div>
                        </Link>

                        <div className="hidden items-center gap-3 md:flex">
                            <a
                                href={LIVE_SITE_URL}
                                target="_blank"
                                rel="noreferrer"
                                className="rounded-full border border-emerald-900/10 bg-white/80 px-4 py-2 text-sm font-semibold text-slate-700 backdrop-blur transition hover:-translate-y-0.5 hover:border-emerald-500 hover:text-emerald-700"
                            >
                                Visit Live Site
                            </a>
                            <select
                                aria-label="Language Selector"
                                value={language}
                                onChange={(event) => changeLanguage(event.target.value)}
                                className="rounded-full border border-emerald-900/10 bg-white/80 px-4 py-2 text-sm font-semibold text-slate-700 outline-none backdrop-blur transition hover:border-emerald-500"
                            >
                                <option value="en">English</option>
                                <option value="hi">Hindi</option>
                                <option value="mr">Marathi</option>
                            </select>
                            <Link
                                to="/auth"
                                className="rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_18px_35px_rgba(15,23,42,0.18)] transition hover:-translate-y-0.5 hover:bg-emerald-700"
                            >
                                Sign In
                            </Link>
                        </div>
                    </div>
                </header>

                <main className="relative z-10">
                    <section className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-20">
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-900/10 bg-white/70 px-4 py-2 text-sm font-semibold text-emerald-800 backdrop-blur">
                                <span className="material-symbols-outlined text-[18px]">public</span>
                                <a href={LIVE_SITE_URL} target="_blank" rel="noreferrer" className="hover:text-emerald-600">
                                    Live now at agri-lo-six.vercel.app
                                </a>
                            </div>

                            <div className="space-y-5">
                                <p className="max-w-md text-sm font-bold uppercase tracking-[0.32em] text-amber-700">
                                    Precision agriculture, designed to feel human
                                </p>
                                <h1 className="max-w-3xl text-5xl font-black leading-[0.95] tracking-[-0.05em] text-slate-950 md:text-6xl xl:text-7xl">
                                    Smarter crops start with a calmer, clearer farming workflow.
                                </h1>
                                <p className="max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
                                    Agri-Lo turns image diagnosis, soil telemetry, multilingual guidance, and analytics into one experience farmers can trust from field to harvest.
                                </p>
                            </div>

                            <div className="flex flex-col gap-3 sm:flex-row">
                                <Link
                                    to="/auth"
                                    className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 py-4 text-base font-bold text-white shadow-[0_22px_40px_rgba(5,150,105,0.30)] transition hover:-translate-y-0.5 hover:bg-emerald-700"
                                >
                                    Open Agri-Lo
                                    <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                                </Link>
                                <a
                                    href={LIVE_SITE_URL}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-950/10 bg-white px-6 py-4 text-base font-bold text-slate-800 shadow-[0_18px_35px_rgba(15,23,42,0.08)] transition hover:-translate-y-0.5 hover:border-amber-500 hover:text-amber-700"
                                >
                                    Visit live deployment
                                    <span className="material-symbols-outlined text-[20px]">open_in_new</span>
                                </a>
                            </div>

                            <div className="grid gap-3 sm:grid-cols-3">
                                {resourceLinks.map((link) => (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="rounded-3xl border border-white/70 bg-white/75 p-4 shadow-[0_18px_40px_rgba(15,23,42,0.07)] backdrop-blur transition hover:-translate-y-1 hover:shadow-[0_24px_45px_rgba(15,23,42,0.12)]"
                                    >
                                        <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-lime-100 text-emerald-800">
                                            <span className="material-symbols-outlined text-[22px]">{link.icon}</span>
                                        </div>
                                        <p className="text-base font-bold text-slate-900">{link.label}</p>
                                        <p className="mt-1 text-sm text-slate-500">{LIVE_SITE_URL.replace('https://', '')}</p>
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute -left-6 top-8 hidden h-40 w-40 rounded-full bg-amber-300/40 blur-3xl lg:block" />
                            <div className="absolute -right-8 bottom-8 hidden h-48 w-48 rounded-full bg-emerald-300/30 blur-3xl lg:block" />

                            <div className="relative overflow-hidden rounded-[2rem] border border-slate-950/10 bg-slate-950 p-5 text-white shadow-[0_30px_80px_rgba(15,23,42,0.30)]">
                                <div className="absolute inset-0 bg-[linear-gradient(145deg,_rgba(16,185,129,0.18),_transparent_35%,_rgba(245,158,11,0.16)_100%)]" />
                                <div className="relative space-y-5">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-xs font-bold uppercase tracking-[0.3em] text-lime-300">Live crop intelligence</p>
                                            <h2 className="mt-2 text-2xl font-bold">Field snapshot</h2>
                                        </div>
                                        <div className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-lime-200">
                                            Online
                                        </div>
                                    </div>

                                    <div className="grid gap-4 rounded-[1.6rem] bg-white/8 p-4 md:grid-cols-[1.1fr_0.9fr]">
                                        <div className="rounded-[1.4rem] border border-white/10 bg-[url('https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center min-h-[320px]">
                                            <div className="flex h-full flex-col justify-between bg-[linear-gradient(180deg,_rgba(15,23,42,0.08),_rgba(15,23,42,0.72))] p-5">
                                                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.28em] text-white/75">
                                                    <span>Plot 07</span>
                                                    <span>Tomato crop</span>
                                                </div>
                                                <div className="rounded-[1.4rem] bg-white/12 p-4 backdrop-blur">
                                                    <p className="text-xs uppercase tracking-[0.28em] text-lime-200">Diagnosis</p>
                                                    <p className="mt-2 text-2xl font-bold">Healthy growth pattern detected</p>
                                                    <p className="mt-2 text-sm leading-6 text-white/75">
                                                        Disease scan, soil profile, and advisory history are all aligned for a stable growth cycle.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <div className="rounded-[1.4rem] bg-white px-5 py-4 text-slate-950">
                                                <p className="text-xs font-bold uppercase tracking-[0.28em] text-emerald-700">Sensor pulse</p>
                                                <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                                                    <div className="rounded-2xl bg-emerald-50 p-3">
                                                        <p className="text-slate-500">Moisture</p>
                                                        <p className="mt-1 text-2xl font-black">68%</p>
                                                    </div>
                                                    <div className="rounded-2xl bg-amber-50 p-3">
                                                        <p className="text-slate-500">pH</p>
                                                        <p className="mt-1 text-2xl font-black">6.7</p>
                                                    </div>
                                                    <div className="rounded-2xl bg-lime-50 p-3">
                                                        <p className="text-slate-500">Nitrogen</p>
                                                        <p className="mt-1 text-2xl font-black">112</p>
                                                    </div>
                                                    <div className="rounded-2xl bg-sky-50 p-3">
                                                        <p className="text-slate-500">Temp</p>
                                                        <p className="mt-1 text-2xl font-black">27C</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="rounded-[1.4rem] border border-white/10 bg-white/8 p-5">
                                                <div className="flex items-center gap-3">
                                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-lime-300 text-slate-950">
                                                        <span className="material-symbols-outlined">support_agent</span>
                                                    </div>
                                                    <div>
                                                        <p className="text-xs font-bold uppercase tracking-[0.28em] text-white/60">Agri assistant</p>
                                                        <p className="text-lg font-bold">Next best action</p>
                                                    </div>
                                                </div>
                                                <p className="mt-4 text-sm leading-7 text-white/75">
                                                    Maintain irrigation rhythm, continue weekly image checks, and schedule a soil report before the next fertilizer cycle.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="mx-auto max-w-7xl px-4 pb-8 md:px-8">
                        <div className="grid gap-4 rounded-[2rem] border border-slate-950/5 bg-white/85 p-6 shadow-[0_20px_50px_rgba(15,23,42,0.08)] md:grid-cols-4">
                            {proofStats.map((stat) => (
                                <div key={stat.label} className="rounded-[1.4rem] bg-[#f8f5ed] p-5">
                                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">{stat.label}</p>
                                    <p className="mt-3 text-4xl font-black tracking-[-0.04em] text-slate-950">{stat.value}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
                        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
                            <div className="space-y-5">
                                <p className="text-sm font-bold uppercase tracking-[0.32em] text-emerald-700">Why teams remember this product</p>
                                <h2 className="max-w-xl text-4xl font-black tracking-[-0.04em] text-slate-950 md:text-5xl">
                                    The platform feels premium because it solves real agricultural friction.
                                </h2>
                                <p className="max-w-xl text-lg leading-8 text-slate-600">
                                    Agri-Lo is not just another dashboard. It brings together AI diagnosis, soil sensing, analytics, and multilingual help in a workflow that feels coherent from the first click.
                                </p>
                            </div>

                            <div className="grid gap-5 md:grid-cols-3">
                                {capabilities.map((item) => (
                                    <div
                                        key={item.title}
                                        className="rounded-[1.8rem] border border-slate-950/8 bg-white p-6 shadow-[0_20px_45px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(15,23,42,0.12)]"
                                    >
                                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-lime-300">
                                            <span className="material-symbols-outlined text-[26px]">{item.icon}</span>
                                        </div>
                                        <h3 className="mt-5 text-xl font-bold text-slate-950">{item.title}</h3>
                                        <p className="mt-3 text-base leading-7 text-slate-600">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section className="mx-auto max-w-7xl px-4 py-6 md:px-8">
                        <div className="rounded-[2.2rem] bg-slate-950 px-6 py-10 text-white shadow-[0_28px_70px_rgba(15,23,42,0.24)] md:px-10">
                            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
                                <div className="space-y-4">
                                    <p className="text-sm font-bold uppercase tracking-[0.32em] text-lime-300">Simple operating rhythm</p>
                                    <h2 className="text-4xl font-black tracking-[-0.04em]">From field data to action in three moves.</h2>
                                    <p className="text-base leading-8 text-white/72">
                                        The experience is designed to reduce hesitation. Every step nudges the user toward a practical next decision.
                                    </p>
                                </div>
                                <div className="grid gap-4 md:grid-cols-3">
                                    {workflow.map((item) => (
                                        <div key={item.step} className="rounded-[1.6rem] border border-white/10 bg-white/8 p-5 backdrop-blur">
                                            <p className="text-sm font-black tracking-[0.26em] text-amber-300">{item.step}</p>
                                            <h3 className="mt-4 text-xl font-bold">{item.title}</h3>
                                            <p className="mt-3 text-sm leading-7 text-white/72">{item.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
                        <div className="overflow-hidden rounded-[2.4rem] border border-slate-950/8 bg-[linear-gradient(135deg,_#14532d_0%,_#1f2937_52%,_#111827_100%)] px-6 py-12 text-white shadow-[0_28px_70px_rgba(15,23,42,0.22)] md:px-10">
                            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                                <div className="space-y-4">
                                    <p className="text-sm font-bold uppercase tracking-[0.32em] text-lime-300">Ready to share the project</p>
                                    <h2 className="max-w-3xl text-4xl font-black tracking-[-0.04em] md:text-5xl">
                                        Explore the live product, then bring people back here with a repo that looks the part.
                                    </h2>
                                    <p className="max-w-2xl text-lg leading-8 text-white/72">
                                        The landing page, README, and deployment story now all point to the same place so your project feels cohesive in demos, GitHub, and production.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                                    <a
                                        href={LIVE_SITE_URL}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center justify-center gap-2 rounded-full bg-lime-300 px-6 py-4 text-base font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-lime-200"
                                    >
                                        Open live site
                                        <span className="material-symbols-outlined text-[20px]">north_east</span>
                                    </a>
                                    <Link
                                        to="/auth"
                                        className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/8 px-6 py-4 text-base font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/14"
                                    >
                                        Enter app
                                        <span className="material-symbols-outlined text-[20px]">login</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>

                <footer className="border-t border-slate-950/8 bg-white/80 backdrop-blur">
                    <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-8 text-sm text-slate-600 md:flex-row md:items-center md:justify-between md:px-8">
                        <div>
                            <p className="font-bold uppercase tracking-[0.28em] text-slate-900">Agri-Lo</p>
                            <p className="mt-1">AI + IoT farming assistant built for better field decisions.</p>
                        </div>
                        <div className="flex flex-wrap items-center gap-4">
                            <a href={LIVE_SITE_URL} target="_blank" rel="noreferrer" className="font-semibold text-emerald-700 hover:text-emerald-600">
                                agri-lo-six.vercel.app
                            </a>
                            <a href={`${LIVE_SITE_URL}/auth`} target="_blank" rel="noreferrer" className="font-semibold text-slate-700 hover:text-slate-950">
                                App access
                            </a>
                            <a href={`${LIVE_SITE_URL}/#top`} target="_blank" rel="noreferrer" className="font-semibold text-slate-700 hover:text-slate-950">
                                Share link
                            </a>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default LandingPage;

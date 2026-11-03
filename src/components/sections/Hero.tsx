import {useEffect, useState} from 'react'
import { site } from '../../data/site'

export default function Hero() {
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem('theme') === 'dark'
    })

    useEffect(() => {
        document.documentElement.classList.toggle('dark', darkMode)

        localStorage.setItem('theme', darkMode ? 'dark': 'light')
    }),[darkMode]

    return (
        <section
            id="top"
            className="relative grid min-h-[calc(100svh-4rem)] overflow-hidden bg-white md:grid-cols-2 dark:bg-slate-950"
        >
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-0 flex flex-col justify-center overflow-hidden opacity-[0.08]"
            >
                {Array.from({ length: 9 }).map((_, index) => (
                    <div
                        key={index}
                        className={`whitespace-nowrap text-[clamp(4rem,10vw,9rem)] font-black uppercase leading-none tracking-tight ${
                            index % 2 === 0
                                ? 'animate-marquee-left'
                                : 'animate-marquee-right'
                        }`}
                    >
                        <span className="text-slate-900 dark:text-slate-200">
                            RONALD{' '}
                        </span>

                        <span className="text-transparent [-webkit-text-stroke:2px_#2563eb] dark:[-webkit-text-stroke:2px_#60a5fa]">
                            POGADO
                        </span>

                        <span className="ml-8 text-slate-900 dark:text-slate-200">
                            RONALD{' '}
                        </span>

                        <span className="text-transparent [-webkit-text-stroke:2px_#2563eb] dark:[-webkit-text-stroke:2px_#60a5fa]">
                            POGADO
                        </span>
                    </div>
                ))}
            </div>

            <div className="relative z-10 h-[50svh] md:h-auto">
                <img
                    src="/photo.png"
                    alt={`Portrait of ${site.name}`}
                    className="h-full w-full object-cover object-top"
                    fetchPriority="high"
                />
            </div>

            <div className="relative z-10 flex items-center px-6 py-16 sm:px-10 lg:px-16 xl:px-24">
                <div className="max-w-2xl">
                    <div className="mb-6 flex items-center gap-3">
                        <span className="h-px w-10 bg-blue-600 dark:bg-slate-100" />
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-slate-100">
                            {site.availability}
                        </p>
                    </div>

                    <h1 className="text-6xl font-black tracking-[-0.04em] text-slate-950 sm:text-7xl lg:text-8xl dark:text-slate-100">
                        {site.name}
                    </h1>

                    <div className="mt-5">
                        <p className="text-2xl font-medium tracking-tight text-slate-600 sm:text-3xl dark:text-slate-300">
                            {site.role}
                        </p>
                    </div>

                    <p className="mt-8 max-w-xl text-base leading-8 text-slate-600 sm:text-lg dark:text-slate-400">
                        {site.intro}
                    </p>

                    <div className="mt-10 flex flex-wrap items-center gap-4">
                        <a
                            href="/resume.pdf"
                            download
                            className="group inline-flex items-center gap-3 rounded-full bg-blue-600 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
                        >
                            View my Resume

                            <span className="transition-transform duration-200 group-hover:translate-x-1">
                                →
                            </span>
                        </a>

                        <a
                            href="#projects"
                            className="inline-flex items-center rounded-full border border-slate-300 bg-white/70 px-6 py-3.5 font-semibold text-slate-800 backdrop-blur-sm transition hover:border-blue-600 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200 dark:hover:border-blue-400 dark:hover:text-blue-400"
                        >
                            View Projects
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
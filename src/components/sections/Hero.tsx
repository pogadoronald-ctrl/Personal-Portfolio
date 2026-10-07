import { site } from '../../data/site'

export default function Hero() {
    return (
        <section
            id="top"
            className="relative grid min-h-[calc(100svh-4rem)] overflow-hidden bg-white md:grid-cols-2"
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
                        <span className="text-slate-900">
                            RONALD{' '}
                        </span>

                        <span className="text-transparent [-webkit-text-stroke:2px_#2563eb]">
                            POGADO
                        </span>

                        <span className="ml-8 text-slate-900">
                            RONALD{' '}
                        </span>

                        <span className="text-transparent [-webkit-text-stroke:2px_#2563eb]">
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
                        <span className="h-px w-10 bg-blue-600" />
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                            {site.availability}
                        </p>
                    </div>

                    <h1 className="text-6xl font-black tracking-[-0.04em] text-slate-950 sm:text-7xl lg:text-8xl">
                        {site.name}
                    </h1>

                    <div className="mt-5">
                        <p className="text-2xl font-medium tracking-tight text-slate-600 sm:text-3xl">
                            {site.role}
                        </p>
                    </div>

                    <p className="mt-8 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
                        {site.intro}
                    </p>

                    <div className="mt-10 flex flex-wrap items-center gap-4">
                        <a
                            href="/resume.pdf"
                            download
                            className="group inline-flex items-center gap-3 rounded-full bg-blue-600 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-700"
                        >
                            Look at my Resume

                            <span className="transition-transform duration-200 group-hover:translate-x-1">
                                →
                            </span>
                        </a>

                        <a
                            href="#projects"
                            className="inline-flex items-center rounded-full border border-slate-300 bg-white/70 px-6 py-3.5 font-semibold text-slate-800 backdrop-blur-sm transition hover:border-blue-600 hover:text-blue-600"
                        >
                            View Projects
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
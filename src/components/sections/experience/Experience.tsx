import { experience } from "./experienceData"
import ExperienceCard from "./ExperienceCard"
import useTimelineProgress from "./useTimelineProgress"

export default function Experience(){
    const {
        timelineRef,
        timelineProgress,
        markerRefs,
        activeMarkers
    } = useTimelineProgress()
    return(
        <section
            id='experience'
            className="scroll-mt-16 overflow-hidden px-6 py-20 md:px-12 lg:px-20 transition-colors duration-300 dark:bg-slate-950"
        >
            <div className="flex mx-auto max-w-7xl justify-center">
                <div className="flex flex-col mb-12 text-center">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-slate-100">
                        Career Path
                    </p>

                    <h2 className="text-4xl font-bold text-slate-900 md:text-4xl lg:text-5xl dark:text-white">
                        Work Experience
                    </h2>

                    <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-400">
                        Where I gained hands-on industry experience, sharpened my technical skills, and turned ideas into meaningful contributions.
                    </p>
                </div>
            </div>

            <div ref={timelineRef} className="relative mx-auto max-w-6xl">

                <div className="absolute left-4 top-2 bottom-0 w-0.5 -translate-x-1/2 bg-slate-200 dark:bg-slate-800 md:left-1/2" />

                <div
                    className="absolute left-4 top-2 w-0.5 -translate-x-1/2 bg-blue-600 transition-[height] duration-150 ease-out md:left-1/2"
                    style={{
                        height: `${timelineProgress * 100}%`
                    }}
                />

                {experience.map((item, index) => (
                    <div
                        key={item.id}
                        className="relative mb-12 grid grid-cols-[32px_1fr] gap-4 last:mb-0 md:grid-cols-[1fr_40px_1fr] md:gap-6"
                    >
                        <div className="hidden md:block md:col-start-1">
                            {index % 2 === 0 && (
                                <ExperienceCard experience={item} />
                            )}
                        </div>

                        <div className="relative col-start-1 row-start-1 flex items-center justify-center md:col-start-2">
                            <div
                                ref={(element) => {
                                    markerRefs.current[index] = element
                                }}
                                className={`z-10 size-4 shrink-0 rounded-full border-4 ring-4 transition-colors duration-500 md:size-5 ${
                                    activeMarkers[index]
                                        ? "border-blue-600 bg-blue-600 ring-blue-100 dark:border-blue-500 dark:bg-blue-500 dark:ring-blue-950"
                                        : "border-slate-300 bg-white ring-slate-100 dark:border-slate-700 dark:bg-slate-950 dark:ring-slate-900"
                                }`}
                            />                 
                        </div>

                        <div className="col-start-2 row-start-1 md:col-start-3">
                            {index % 2 !== 0 ? (
                                <ExperienceCard experience={item} />
                            ) : (
                                <div className="md:hidden">
                                    <ExperienceCard experience={item} />
                                </div>
                            )}
                        </div>

                    </div>
                ))}

            </div>
        </section>
    )
}
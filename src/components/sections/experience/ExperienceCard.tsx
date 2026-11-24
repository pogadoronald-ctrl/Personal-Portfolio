import type { ExperienceData } from './experienceData'
import { MapPin } from 'lucide-react'

interface ExperienceCardProps {
    experience: ExperienceData
}

export default function ExperienceCard({ experience }: ExperienceCardProps){
    return(
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 md:p-8">

            <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                    <span className="mb-2 inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600 dark:bg-blue-950 dark:text-blue-400">
                        {experience.employmentType}
                    </span>

                    <h3 className="text-xl font-bold text-slate-900 dark:text-white md:text-2xl">
                        {experience.role}
                    </h3>

                    <p className="mt-1 font-medium text-blue-600 dark:text-blue-400">
                        {experience.company}
                    </p>
                </div>

                <span className="w-fit rounded-lg bg-slate-100 px-3 py-2 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                    {experience.duration}
                </span>
            </div>

            <div className="mb-5 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                <MapPin size={16} />
                {experience.location}
            </div>

            <p className="mb-5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {experience.description}
            </p>

            <div className="mb-6">
                <h4 className="mb-3 text-sm font-semibold text-slate-900 dark:text-white">
                    Key Responsibilities
                </h4>

                <ul className="space-y-3">
                    {experience.responsibilities.map((item, index) => (
                        <li
                            key={index}
                            className="flex gap-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400"
                        >
                            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-blue-600" />
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h4 className="mb-3 text-sm font-semibold text-slate-900 dark:text-white">
                    Technologies & Tools
                </h4>

                <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((technology) => (
                        <span
                            key={technology}
                            className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
                        >
                            {technology}
                        </span>
                    ))}
                </div>
            </div>

        </div>
    )
}
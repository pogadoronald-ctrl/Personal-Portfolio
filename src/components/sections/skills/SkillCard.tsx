
import type { Skill } from './skillsData'

interface SkillCardProps {
    title: string
    skills: Skill[]
}

export default function SkillCard({ title, skills }: SkillCardProps) {
    return (
        <div className="rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/5 dark:border-slate-700 dark:bg-slate-900 dark:hover:border-blue-300">
            <h3 className="mb-5 text-lg font-semibold text-slate-900 dark:text-slate-100">
                {title}
            </h3>

            <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                    <div
                        key={skill.name}
                        className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700 transition-colors hover:border-blue-200 hover:bg-blue-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-blue-500/40 dark:hover:bg-blue-500/10"
                    >
                        <i
                            className={`${skill.icon} text-xl ${
                                ['Cypress', 'Prisma'].includes(skill.name)
                                    ? 'dark:text-white'
                                    : ''
                            }`}
                            aria-hidden="true"
                        />

                        <span className="font-medium">
                            {skill.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}

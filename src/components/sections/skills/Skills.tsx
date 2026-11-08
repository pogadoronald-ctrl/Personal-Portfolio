
import SkillCard from './SkillCard'
import { skillCategories } from './skillsData'

export default function Skills() {
    return (
        <section
            id="skills"
            className="px-6 py-20 md:px-12 lg:px-20 dark:bg-slate-950"
        >
            <div className="mx-auto max-w-7xl">
                <div className="mb-12">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-slate-100">
                        What I Work With
                    </p>

                    <h2 className="text-4xl font-bold text-slate-900 dark:text-white md:text-4xl lg:text-5xl">
                        Technical Skills
                    </h2>

                    <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-400">
                        Technologies and tools I use to build, develop,
                        and test applications.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    {skillCategories.map((category) => (
                        <SkillCard
                            key={category.title}
                            title={category.title}
                            skills={category.skills}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

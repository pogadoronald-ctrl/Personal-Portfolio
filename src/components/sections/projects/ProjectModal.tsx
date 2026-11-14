import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { Project } from './projectsData'
import { categoryColors } from './projectsData'
import { X, ExternalLink, CheckCircle2 } from 'lucide-react'

interface ProjectModalProps {
    project: Project | null
    onClose: () => void
}

export default function ProjectModal({
    project,
    onClose,
}: ProjectModalProps) {
    const [activeImage, setActiveImage] = useState(0)

    useEffect(() => {
        setActiveImage(0)
    }, [project?.id])

    useEffect(() => {
        if (!project) return

    }, [project, onClose])

    if (!project) return null

    const nextImage = () => {
        setActiveImage((current) =>
            (current + 1) % project.images.length
        )
    }

    const previousImage = () => {
        setActiveImage((current) =>
            (current - 1 + project.images.length) % project.images.length
        )
    }
    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="project-modal-title"
                onClick={(event) => event.stopPropagation()}
                className="relative flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl dark:bg-slate-900"
            >

                <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4 dark:border-slate-800">
                    <span className="text-sm font-semibold dark:text-white">
                        Project Details
                    </span>

                    <button
                        onClick={onClose}
                        aria-label="Close project details"
                        className="rounded-lg p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
                    >
                        <X size={20} />
                    </button>
                </div>

                <div className="overflow-y-auto">

                    <div className="relative overflow-hidden bg-slate-100 dark:bg-slate-800">
                        <img
                            src={project.images[activeImage]}
                            alt={`${project.title} screenshot ${activeImage + 1}`}
                            className="max-h-[70vh] w-full object-contain"
                        />

                        {project.images.length > 1 && (
                            <>
                                <button
                                    onClick={previousImage}
                                    aria-label="Previous image"
                                    className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-slate-800 shadow transition hover:bg-white dark:bg-slate-900/90 dark:text-white"
                                >
                                    <ChevronLeft size={20} />
                                </button>

                                <button
                                    onClick={nextImage}
                                    aria-label="Next image"
                                    className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-slate-800 shadow transition hover:bg-white dark:bg-slate-900/90 dark:text-white"
                                >
                                    <ChevronRight size={20} />
                                </button>

                                <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
                                    {project.images.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setActiveImage(index)}
                                            aria-label={`Go to image ${index + 1}`}
                                            className={`h-2 rounded-full border-slate-300 transition-all ${
                                                activeImage === index
                                                    ? 'w-6 bg-blue-600'
                                                    : 'w-2 border-slate-300 bg-slate-300 hover:border-blue-400 hover:bg-blue-400 dark:border-slate-600 dark:bg-slate-600 dark:hover:border-blue-400 dark:hover:bg-blue-400'
                                            }`}
                                        />
                                    ))}
                                </div>
                            </>
                        )}
                    </div>

                    <div className="space-y-8 p-6 md:p-8">

                        <section>
                            <div className="mb-3 flex flex-wrap items-center gap-3">
                                <h2
                                    id="project-modal-title"
                                    className="text-2xl font-bold text-slate-900 dark:text-white md:text-3xl"
                                >
                                    {project.title}
                                </h2>

                            </div>

                            <p className="mb-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                                {project.overview}
                            </p>
                        </section>

                        <section>
                            <h3 className="mb-4 text-lg font-bold text-slate-900 dark:text-white">
                                Technologies Used
                            </h3>

                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech) => (
                                    <span
                                        key={tech.name}
                                        className={`rounded-lg px-3 py-1.5 text-xs font-medium ${
                                            categoryColors[tech.category] ??
                                            categoryColors.Tools
                                        }`}
                                    >
                                        {tech.name}
                                    </span>
                                ))}
                            </div>
                        </section>

                        <section>
                            <h3 className="mb-4 text-lg font-bold text-slate-900 dark:text-white">
                                Key Features
                            </h3>

                            <ul className="space-y-3">
                                {project.features.map((feature, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400"
                                    >
                                        <CheckCircle2
                                            size={18}
                                            className="mt-0.5 shrink-0 text-blue-600 dark:text-blue-400"
                                        />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <section>
                            <h3 className="mb-4 text-lg font-bold text-slate-900 dark:text-white">
                                Challenges & Solutions
                            </h3>

                            <ul className="list-inside list-disc space-y-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                                {project.challenges.map((challenge, index) => (
                                    <li key={index}>
                                        {challenge}
                                    </li>
                                ))}
                            </ul>
                        </section>

                    </div>
                </div>

                <div className="flex items-center justify-end border-t border-slate-200 px-6 py-4 dark:border-slate-800">
                    <div className="flex items-center justify-center gap-3">
                        {project.githubUrl && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 rounded-lg bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
                            >
                                <i className="devicon-github-original"></i>
                                GitHub
                            </a>
                        )}

                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
                            >
                                <ExternalLink size={17} />
                                Live Demo
                            </a>
                        )}
                    </div>
                </div>

            </div>
        </div>
    )
}
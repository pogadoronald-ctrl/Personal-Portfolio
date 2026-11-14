import type {Project} from './projectsData'
import { categoryColors } from './projectsData'
import 'devicon/devicon.min.css'
import { ExternalLink } from 'lucide-react'


interface ProjectCardProps {
    project: Project
    onViewProject: () => void
}

export default function ProjectCard({
    project,
    onViewProject,
}: ProjectCardProps){
    return(
        <div className='group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900'>
            <div className='relative overflow-hidden bg-slate-100 dark:bg-slate-800'>
                <img 
                    src={project.images[0]}
                    alt={'${project.title} preview'}
                    className='aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105'>
                </img>
            </div>

            <div className='flex flex-1 flex-col p-6'>
                    <h3 className='text-xl mb-3 font-bold text-slate-900 dark:text-white'>
                        {project.title}
                    </h3>
                <div className='mb-5 flex flex-wrap gap-2'> 
                    {project.technologies.map((tech) => (
                        <span
                            key={tech.name}
                            className={`rounded-2xl px-3 py-1.5 text-xs font-medium ${
                                categoryColors[tech.category] ?? categoryColors.Tools
                                }`}
                        >
                            {tech.name}
                        </span>
                    ))}
                </div>
                
                <p className='mb-6 text-sm leading-relaxed text-slate-600 dark:text-slate-400'> 
                    {project.description}
                </p>
            </div>

            <div className="mx-auto mt-auto mb-3 flex w-[90%] items-center justify-between border-t border-slate-200 pt-4 dark:border-slate-800">
                <button 
                    onClick={onViewProject}
                    className="text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700 rounded-lg p-2 hover:bg-blue-100 dark:text-blue-400 dark:hover:text-blue-300 dark:hover:bg-blue-900">
                    View Project
                    <span aria-hidden="true"> →</span>
                </button>

                <div className="flex items-center justify-center">
                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View ${project.title} on GitHub`}
                            className="flex justify-center rounded-lg p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
                        >
                            <i className="devicon-github-original text-lg"></i>
                        </a>
                    )}

                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View ${project.title} live`}
                            className="rounded-lg p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
                        >
                            <ExternalLink size={18} />
                        </a>
                    )}
                </div>
            </div> 
        </div>
    )
}
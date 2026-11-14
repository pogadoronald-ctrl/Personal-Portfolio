export interface Project{
    id: string
    title: string
    description: string
    images: string[]
    technologies: {
        name: string,
        category: string
    }[]
    overview: string
    features: string[]
    challenges: string[]
    githubUrl?: string
    liveUrl?: string
}

export const categoryColors: Record<string, string> = {
    Frontend: 'bg-sky-300 text-slate-700 dark:bg-blue-500 dark:text-white',
    Backend: 'bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-300',
    Database: 'bg-purple-100 text-purple-700 dark:bg-purple-500/10 dark:text-purple-300',
    Testing: 'bg-orange-100 text-orange-700 dark:bg-orange-500/10 dark:text-orange-300',
    Tools: 'bg-yellow-300 text-slate-700 dark:bg-yellow-500 dark:text-white',
}

export const projects: Project[] = [
    {
        id: 'joblyst',
        title: 'Joblyst',
        description: 
            'A job application tracker designed to help users organize applications, monitor their progress, and manage their job search.',
        images: [
            '/projects/joblyst/dashboard.png',
            '/projects/joblyst/applications.png',
            '/projects/joblyst/applicationForm.png',
            '/projects/joblyst/applicationForm2.png',
            '/projects/joblyst/mobile-dashboard.jpg',
            '/projects/joblyst/mobile-applications.jpg',
            '/projects/joblyst/mobile-applicationForm.jpg',
        ],
        technologies: [
            {name: 'React', category: 'Frontend'},
            {name: 'TypeScript', category: 'Frontend'},
            {name: 'Tailwind CSS',category: 'Frontend'},
            {name: 'Vite',category: 'Tools'}
        ],
        overview: 'Joblyst is a job application tracking application that helps users manage their job search in one place. It allows users to organize applications, monitor their progress, and view application statistics.',
        features: [
        'Add, edit, and delete job applications',
        'Track application statuses',
        'Search, filter, and paginate applications',
        'Dashboard with application statistics',
        'Form validation using React Hook Form and Zod',
        'Local storage persistence',
        ],
        challenges: [
        'Managing application data consistently across different components using React Context.',
        'Implementing form validation and maintaining type safety with TypeScript.',
        'Creating reusable components and responsive layouts.',
        ],
        githubUrl: 'https://github.com/pogadoronald-ctrl/Job-Application-Tracker.git',
        liveUrl: 'https://joblyst-xi.vercel.app/'
    }
]


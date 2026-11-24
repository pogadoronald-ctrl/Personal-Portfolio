export interface ExperienceData {
    id: number
    role: string
    company: string
    employmentType: string
    duration: string
    location: string
    description: string
    responsibilities: string[]
    technologies: string[]
}

export const experience: ExperienceData[] = [
    {
        id: 1,
        role: 'Intern - Front End Developer & QA Engineer',
        company: 'Fligno Software Philippines, Inc.',
        employmentType: 'Internship',
        duration: 'August 2025 - November 2025',
        location: 'Cagayan de Oro, Philippines',
        description:
            'Worked with the frontend development and QA teams to build user-facing features, test application functionality, and support development workflows.',
        responsibilities: [
            'Developed frontend features using React, Vite, and Tailwind CSS.',
            'Created end-to-end tests using Cypress and Cucumber (BDD).',
            'Collaborated with the development team through GitLab issues and version control.',
            'Worked with Hono.js and Prisma for backend API and data-related tasks.',
        ],
        technologies: [
            'React',
            'TypeScript',
            'Vite',
            'Tailwind CSS',
            'Cypress',
            'Cucumber',
            'Hono.js',
            'Prisma',
        ],
    }
]
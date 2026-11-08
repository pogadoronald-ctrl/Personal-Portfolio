import 'devicon/devicon.min.css'

export interface Skill {
    name: string
    icon: string
}

export interface SkillCategory {
    title: string
    skills: Skill[]
}

export const skillCategories: SkillCategory[] = [
    {
        title: 'Languages',
        skills: [
            { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
            { name: 'TypeScript', icon: 'devicon-typescript-plain colored ' },
            { name: 'HTML', icon: 'devicon-html5-plain colored' },
            { name: 'CSS', icon: 'devicon-css3-plain colored' },
            { name: 'Python', icon: 'devicon-python-plain colored' },
            { name: 'Java', icon: 'devicon-java-plain colored' },
        ],
    },
    {
        title: 'Frontend',
        skills: [
            { name: 'React', icon: 'devicon-react-original colored' },
            { name: 'Vite', icon: 'devicon-vitejs-plain colored' },
            { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-original colored' },
            { name: 'Bootstrap', icon: 'devicon-bootstrap-plain colored' },
            { name: 'EJS', icon: 'devicon-ejs-original' },
            { name: 'React Hook Form', icon: 'devicon-react-original colored' },
            { name: 'Zod', icon: 'devicon-typescript-plain colored' },
        ],
    },
    {
        title: 'Backend & Database',
        skills: [
            { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
            { name: 'Express.js', icon: 'devicon-express-original' },
            { name: 'Hono.js', icon: 'devicon-javascript-plain colored' },
            { name: 'Prisma', icon: 'devicon-prisma-original' },
            { name: 'Better Auth', icon: 'devicon-nodejs-plain colored' },
            { name: 'MongoDB', icon: 'devicon-mongodb-plain colored' },
        ],
    },
    {
        title: 'Testing / QA',
        skills: [
            { name: 'Cypress', icon: 'devicon-cypressio-plain ' },
            { name: 'Cucumber (BDD)', icon: 'devicon-cucumber-plain colored' },
            { name: 'End-to-end Testing', icon: 'devicon-testing-library-plain colored' },
        ],
    },
    {
        title: 'Tools & Deployment',
        skills: [
            { name: 'Git', icon: 'devicon-git-plain colored' },
            { name: 'GitHub', icon: 'devicon-github-original' },
            { name: 'GitLab', icon: 'devicon-gitlab-plain colored' },
            { name: 'Vercel', icon: 'devicon-vercel-original' },
            { name: 'Render', icon: 'devicon-render-plain' },
        ],
    },
]

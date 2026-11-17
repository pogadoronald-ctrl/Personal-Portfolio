
import { GraduationCap, Award, Sparkles } from 'lucide-react'

export const tabs = [
    {
        id: 'education',
        label: 'Education',
        icon: GraduationCap,
    },
    {
        id: 'certificates',
        label: 'Certificates',
        icon: Award,
    },
    {
        id: 'outside',
        label: 'Beyond the Screen',
        icon: Sparkles,
    },
] as const

export const aboutData = {
    education: {
        eyebrow: 'MY ACADEMIC JOURNEY',
        title: 'Where It All Began.',
        description:
            'My journey into technology started at Xavier University – Ateneo de Cagayan, where I pursued a Bachelor of Science in Computer Science. It was where I developed my foundation in programming, problem-solving, and software development.',
        images: [
            '/about/Grad Pic.jpg',
            '/about/Business Attire.jpg',
        ],
        details: [
            {
                label: 'Institution',
                value: 'Xavier University – Ateneo de Cagayan',
            },
            {
                label: 'Degree',
                value: 'BS Computer Science',
            },
            {
                label: 'Graduation',
                value: 'June 2026',
            },
        ],
    },

    certificates: {
        eyebrow: 'CONTINUOUS LEARNING',
        title: 'Always Learning, Always Growing.',
        description:
            'I believe learning never stops. Beyond formal education, I explore new technologies and strengthen my skills through online courses and certifications.',
        images: [
            '/about/AI Fundamentals.png',
        ],
        details: [
            {
                label: 'Certification',
                value: 'Google AI Fundamentals',
            }
        ],
    },

    outside: {
        eyebrow: 'LIFE BEYOND DEVELOPMENT',
        title: 'More Than Just Code.',
        description:
            'Outside the IDE, I enjoy discovering new things, exploring different interests, and finding inspiration beyond technology. I believe these experiences help me grow not just as a developer, but as a person.',
        images: [
            '/about/Grad Pic.jpg',
            '/about/Business Attire.jpg',
        ],
        details: [
            {
                label: 'Interests',
                value: 'Frisbee',
            },
            {
                label: 'Currently Exploring (Placeholder)',
                value: 'New ideas and experiences (Placeholder)',
            },
            {
                label: 'Personal Motto (Placeholder)',
                value: 'Stay curious. Keep growing (Placeholder).',
            },
        ],
    },
} as const

export type TabId = keyof typeof aboutData

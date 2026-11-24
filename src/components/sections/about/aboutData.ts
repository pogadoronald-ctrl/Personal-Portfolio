
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

export interface EducationData {
    eyebrow: string
    title: string
    description: string
    images: string[]
    details: {
        label: string
        value: string
    }[]
}

export const educationData: EducationData = {
    eyebrow: 'MY ACADEMIC JOURNEY',
    title: 'Where It All Began.',
    description: `I graduated in June 2026 with a Bachelor of Science in Computer Science from Xavier University – Ateneo de Cagayan, where I was named to the Dean’s List in both semesters of my first and fourth years.

    I complemented my coursework with an on-the-job training placement at Fligno Software Philippines as a Frontend Developer and QA Engineer.

    On the frontend side, I built user interfaces with React and TypeScript, turning designs and requirements into working components.
    On the QA side, I tested the features and interfaces, checking that they behaved as intended and reporting the problems I found.`,
    images: [
        '/about/Grad Pic.webp',
        '/about/grad_shoot.webp',
        '/about/formal_front.webp',
    ],
    details: [
        {
            label: 'Academic Achievement',
            value: "Dean's List - 1st and 4th Year",
        },
        {
            label: 'Technical Focus',
            value: 'Modern Web Development and QA',
        },
        {
            label: 'Professional Goal',
            value: 'Growing as a Full Stack Developer',
        },
    ],
}

export interface CertificateData {
    image: string
    name: string
    issuer: string
    date: string
    description: string
    link?: string
}

export const certificateData: CertificateData[] = [
    {
        image: '/about/AI Fundamentals.png',
        name: 'Google AI Fundamentals',
        issuer: 'Google',
        date: 'August 25, 2026',
        description: 
            'An introduction to generative AI, prompt engineering, and responsible AI use in the workplace.',
        link: 'https://coursera.org/share/82b65661db70564473dd179a801ce49a'
    }
]

export interface OutsideData {
    images: string[]
    eyebrow: string
    title: string
    description: string
}

export const outsideData: OutsideData = {
    images: [
        '/about/creative1.webp',
        '/about/Frisbee Pic.webp',
        '/about/creative (2).webp',
    ],
    eyebrow: 'LIFE BEYOND DEVELOPMENT',
    title: 'More Than Just Code.',
    description: `Away from the keyboard, I stay active. Running is my go-to way to clear my head, and I play frisbee whenever I can, which I enjoy because it’s as social as it is physical. I also like trying other physical activities, since I’d rather spend my breaks moving than staring at another screen.
    I read books too, and I like having something to read that has nothing to do with code. Time spent running and reading is time I’m not debugging, and I come back to my work with a clearer head for it.`,
}

export type TabId = (typeof tabs)[number]['id']
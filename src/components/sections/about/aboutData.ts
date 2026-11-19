
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
            `I graduated in June 2026 with a Bachelor of Science in Computer Science from Xavier University – Ateneo de Cagayan, where I was named to the Dean’s List in both semesters of my first and fourth years. 
            I complemented my coursework with an on-the-job training placement at Fligno Software Philippines as a Frontend Developer and QA Engineer.
            
            On the frontend side, I built user interfaces with React and TypeScript, turning designs and requirements into working components. 
            On the QA side, I tested the features and interfaces, checking that they behaved as intended and reporting the problems I found.`,
        images: [
            '/about/Grad Pic.jpg',
            '/about/formal_front.jpg',
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
            'I have a Google AI Fundamentals certificate, which gave me a grounding in how AI tools work and how to use them in my day-to-day work. I’ll add further certificates here as I earn them.',
        images: [
            '/about/AI Fundamentals.png',
        ],
        details: [
            {
                label: 'Certificates',
                value: 'Google AI Fundamentals',
            }
        ],
    },

    outside: {
        eyebrow: 'LIFE BEYOND DEVELOPMENT',
        title: 'More Than Just Code.',
        description:
            `Away from the keyboard, I stay active. Running is my go-to way to clear my head, and I play frisbee whenever I can, which I enjoy because it’s as social as it is physical. I also like trying other physical activities, since I’d rather spend my breaks moving than staring at another screen.
            I read books too, and I like having something to read that has nothing to do with code. Time spent running and reading is time I’m not debugging, and I come back to my work with a clearer head for it.`,
        images: [
            '/about/creative1.JPG',
            '/about/creative (2).jpg',
            '/about/creative (3).JPG',
        ],
        details: [
            {
                label: 'Interests',
                value: 'Frisbee, Running, Reading',
            }
        ],
    },
} as const

export type TabId = keyof typeof aboutData

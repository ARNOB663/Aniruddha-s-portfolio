// lib/data.ts
import { AllProjectsData } from './types';

export const allProjectsData: AllProjectsData = {
    'ai-ml': {
        title: 'AI/ML Projects',
        items: [
            {
                label: 'AI & NLP',
                title: 'Semantic Book Recommender',
                subtitle: 'An AI-powered book recommendation system that understands natural language queries and emotional preferences.',
                tags: ['Python', 'Gradio', 'LangChain', 'ChromaDB', 'HuggingFace', 'NLP'],
                stats: [
                    { label: 'Dataset', value: '5K+ Books' },
                    { label: 'Vector Store', value: 'ChromaDB' }
                ],
                link: 'https://github.com/ARNOB663/Semantic-Book-Recommender'
            }
        ]
    },
    'development': {
        title: 'Development Projects',
        items: [
            {
                label: 'FULL-STACK',
                title: 'Evently',
                subtitle: 'A comprehensive event management platform built with Next.js, designed to connect organizers with attendees. Features authentication, payments, and an admin dashboard.',
                tags: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Vitest', 'Full-Stack'],
                stats: [
                    { label: 'Frontend', value: 'Next.js 14' },
                    { label: 'Testing', value: 'Vitest' }
                ],
                link: 'https://evently-nextjs-virid.vercel.app/'
            }
        ]
    },
    'programming': {
        title: 'Programming Projects',
        items: [
            {
                label: 'NETWORKING',
                title: 'httPy',
                subtitle: 'Custom Python HTTP server demonstrating understanding of web protocols and backend fundamentals. Lightweight, educational project showing low-level web technology knowledge.',
                tags: ['Python', 'HTTP', 'Networking', 'Backend'],
                stats: [
                    { label: 'Language', value: 'Python' },
                    { label: 'Type', value: 'Server' }
                ],
                link: 'https://github.com/your-username/httPY'
            }
        ]
    },
    'certifications': {
        title: 'Certifications & Training',
        items: []
    }
};
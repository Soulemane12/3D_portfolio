import { ars, elite, asr, codenation } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    java,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    python,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    hive,
    research,
    culina,
    truesight,
    airesearch,
    meetingsummarizer
} from "../assets/icons";

export const skills = [
    {
        imageUrl: python,
        name: "Python",
        type: "Programming",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Programming",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Programming",
    },
    {
        imageUrl: react,
        name: "React.js",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "TailwindCSS",
        type: "Frontend",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Programming",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    }
];

export const experiences = [
    {
        title: "Software Engineer",
        company_name: "A Represented Smile",
        icon: ars,
        iconBg: "#accbe1",
        date: "Dec 2024 - Present",
        points: [
            "Crafting Engaging User Experiences: Designed and developed responsive, intuitive UIs using HTML, CSS, JavaScript, and React.js, enhancing user interaction and accessibility with 100 daily visitors.",
            "Optimization: Optimized performance by 30%, improving site responsiveness and reducing load times by 30%.",
            "Seamless Cross-Team Collaboration: Worked closely with backend developers and designers to integrate dynamic features, ensuring scalability and maintainability for long-term success.",
        ],
    },
    {
        title: "Student",
        company_name: "Emerging Leaders in Technology and Engineering (ELiTE)",
        icon: elite,
        iconBg: "#fbc3bc",
        date: "Nov 2022 - Present",
        points: [
            "Learned core programming concepts by developing scripts to solve real life problems",
            "Implemented logic to create a multiplayer Space Invaders inspired game using the Pygame library",
        ],
    },
    {
        title: "Student",
        company_name: "Advance Science Research",
        icon: asr,
        iconBg: "#b7e4c7",
        date: "Sep 2023 - Jan 2025",
        points: [
            "Project Implementation",
        ],
    },
    {
        title: "Student",
        company_name: "Code Nation",
        icon: codenation,
        iconBg: "#a2d2ff",
        date: "Oct 2023 - Jun 2024",
        points: [
            "Joined a program that equips students in under-resourced high schools with the skills, experiences, and connections that together create access to careers in technology",
            "Continuing to learn HTML, CSS, and JS",
            "Continuing to use Github to save code",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Soulemane12',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/soulemanesow/',
    }
];

export const projects = [
    {
        iconUrl: hive,
        theme: 'btn-back-red',
        name: 'Hive – AI-Powered Construction Reporting',
        description: 'Won 1st Place in a 12-hour Hackathon against 50+ people. Developed automation for construction reporting with 80% faster reporting and an intuitive drag-and-drop editor. Integrated Hivemind AI, automating report generation and insights extraction reducing human errors by 60%.',
        link: 'https://github.com/Soulemane12/hive',
    },
    {
        iconUrl: research,
        theme: 'btn-back-green',
        name: 'Research Paper Analysis Tool',
        description: 'Top 3 Winner in a 5-hour hackathon competing against 50+ people. Built a web application that extracts insights, claim-evidence, and cross-referencing with 70% faster research insights. Integrated D3.js for discourse visualization and Julep API for analysis.',
        link: 'https://github.com/Soulemane12/research-paper-analysis',
    },
    {
        iconUrl: culina,
        theme: 'btn-back-blue',
        name: 'Culina AI',
        description: 'Top Performer in Hackathon. Created an AI app that automates recipe creation based on ingredient recognition with 95% accurate ingredient recognition. Implemented AI-driven sustainability personalization handling dietary restrictions, allergies, and reducing food waste by 40%.',
        link: 'https://github.com/Soulemane12/culina-ai',
    },
    {
        iconUrl: truesight,
        theme: 'btn-back-pink',
        name: 'TrueSight – AI-Powered Custom-Fit Glasses Platform',
        description: 'Winner, Best High School Hack at HackNYU 2025. Developed a computer vision-driven platform creating affordable, customized, 3D-printable eyewear. Leveraged OpenCV for precise facial measurements and integrated Onshape API for customizable 3D models.',
        link: 'https://github.com/Soulemane12/truesight',
    },
    {
        iconUrl: airesearch,
        theme: 'btn-back-black',
        name: 'AI Research Assistant',
        description: 'An AI-powered research assistant that simplifies academic and professional research workflows using RAG technology. Integrates Cortex Search, Mistral LLM, and Streamlit for analyzing, summarizing, and managing research documents.',
        link: 'https://github.com/Soulemane12/ai-research-assistant',
    },
    {
        iconUrl: meetingsummarizer,
        theme: 'btn-back-yellow',
        name: 'AI Meeting Summarizer',
        description: 'Effortlessly transcribe, summarize, and organize meetings with AI Meeting Summarizer. Integrates with Confluence and Jira for centralized meeting insights and streamlined task management.',
        link: 'https://github.com/Soulemane12/AI-Meeting-Summarizer-with-Confluence-and-Jira-integration',
    }
];
export interface TeamMember {
    slug: string;
    name: string;
    role: string;
    bio: string;
    stack: string[];
    narrative: string;
    socials: {
        github?: string;
        twitter?: string;
        linkedin?: string;
        instagram?: string;
        email?: string;
    };
}

export const TEAM_MEMBERS: Record<string, TeamMember> = {
    "deyan-todorov": {
        slug: "deyan-todorov",
        name: "Deyan Todorov",
        role: "Founder & Operator",
        bio: "Founding Eptesicus Labs to solve the reliability crisis in local AI.",
        stack: ["Systems Architecture", "Rust", "LLM Eval", "Governance Structures"],
        narrative: "I built Eptesicus because I stopped trusting the black boxes. Reliability isn't a feature; it's the baseline requirement for intelligence that matters.",
        socials: {
            twitter: "https://x.com/dttdrv",
            github: "https://github.com/dttdrv",
            instagram: "https://www.instagram.com/dttdrv",
            email: "mailto:deyan.todorov21@gmail.com"
        }
    },
    "iliyan-bozhanov": {
        slug: "iliyan-bozhanov",
        name: "Iliyan Bozhanov",
        role: "Co-Founder & CTO",
        bio: "Architecting the distributed validation layer for Lumis-1.",
        stack: ["Distributed Systems", "Cryptography", "Model Optimization", "Python"],
        narrative: "Building the engine that proves small models can punch above their weight class through rigorous mathematical verification.",
        socials: {
            instagram: "https://www.instagram.com/iliyan_bozhanov",
            email: "mailto:libojanov@gmail.com"
        }
    }
};

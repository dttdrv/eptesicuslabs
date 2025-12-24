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
        bio: "Building towards a future where capable AI runs on customer hardware. Focused on small language models and the architectural innovations that make them practical for real deployment.",
        stack: ["Systems Architecture", "Rust", "LLM Eval", "Governance Structures"],
        narrative: "The path forward isn't bigger models—it's smarter architectures. Small language models, paired with the right reliability infrastructure, can deliver enterprise-grade intelligence without the cloud dependency.",
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

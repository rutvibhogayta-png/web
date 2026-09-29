import { useState } from "react";
import {
  Atom,
  Braces,
  Server,
  Palette,
  BrainCircuit,
  Cloud,
  ShieldCheck,
  Smartphone,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";
import { Link } from "react-router-dom";

interface TechItem {
  id: string;
  name: string;
  domain: string;
  category: "frontend" | "ai" | "backend" | "systems" | "design" | "cloud";
  icon: LucideIcon;
  color: string;
  badgeBg: string;
  description: string;
  clubUsage: string;
  level: "Beginner Friendly" | "Intermediate" | "Advanced";
  featuredProjects: string[];
}

const techCatalog: TechItem[] = [
  {
    id: "react",
    name: "React & Next.js",
    domain: "Frontend Ecosystem",
    category: "frontend",
    icon: Atom,
    color: "text-[#61DAFB]",
    badgeBg: "bg-[#61DAFB]/10 border-[#61DAFB]/30",
    description: "Component-driven architecture for rapid, high-performance web applications.",
    clubUsage: "Used to build the NeoFolks portal, event registration dashboards, and showcase sites.",
    level: "Beginner Friendly",
    featuredProjects: ["Campus Event Hub", "Admin Portal", "Club Portfolio"],
  },
  {
    id: "typescript",
    name: "TypeScript",
    domain: "Frontend & Backend",
    category: "frontend",
    icon: Braces,
    color: "text-[#3178C6]",
    badgeBg: "bg-[#3178C6]/10 border-[#3178C6]/30",
    description: "Strictly typed JavaScript ensuring maintainable, crash-resistant campus codebases.",
    clubUsage: "Standard language across all official NeoFolks web and cloud projects.",
    level: "Beginner Friendly",
    featuredProjects: ["Type-safe APIs", "State Management", "Shared SDKs"],
  },
  {
    id: "python-ai",
    name: "Python & PyTorch",
    domain: "AI & Machine Learning",
    category: "ai",
    icon: BrainCircuit,
    color: "text-[#FF6F00]",
    badgeBg: "bg-[#FF6F00]/10 border-[#FF6F00]/30",
    description: "Foundational data science, transformer models, LLM fine-tuning, and computer vision.",
    clubUsage: "Powering AI workshop labs, Kaggle competition teams, and automated campus bots.",
    level: "Intermediate",
    featuredProjects: ["Smart Attendance AI", "Document Summarizer", "NUV Chatbot"],
  },
  {
    id: "nodejs",
    name: "Node.js & Express",
    domain: "Server Architecture",
    category: "backend",
    icon: Server,
    color: "text-[#5FA04E]",
    badgeBg: "bg-[#5FA04E]/10 border-[#5FA04E]/30",
    description: "High-throughput asynchronous backend runtimes and REST/GraphQL microservices.",
    clubUsage: "Powering user authentication, database caching, and event ticketing webhooks.",
    level: "Intermediate",
    featuredProjects: ["Ticket Dispatcher", "Auth Service", "Certificate Generator"],
  },
  {
    id: "cloud-docker",
    name: "Docker & Cloud",
    domain: "DevOps & Deployment",
    category: "cloud",
    icon: Cloud,
    color: "text-[#2496ED]",
    badgeBg: "bg-[#2496ED]/10 border-[#2496ED]/30",
    description: "Containerization, automated CI/CD GitHub workflows, and scalable serverless compute.",
    clubUsage: "Deploying multi-tier student applications reliably to Vercel, AWS, and GCP.",
    level: "Intermediate",
    featuredProjects: ["CI/CD Pipelines", "Dockerized Staging", "Cloudflare CDN"],
  },
  {
    id: "uiux-figma",
    name: "Figma & Design Systems",
    domain: "UI/UX & Creative",
    category: "design",
    icon: Palette,
    color: "text-[#F24E1E]",
    badgeBg: "bg-[#F24E1E]/10 border-[#F24E1E]/30",
    description: "Wireframing, high-fidelity prototypes, user research, and accessible typography.",
    clubUsage: "Designing event posters, website mockups, and mobile app wireframes for hackathons.",
    level: "Beginner Friendly",
    featuredProjects: ["NeoFolks Design Tokens", "HackNUV Brand", "Figma Components"],
  },
  {
    id: "cybersecurity",
    name: "Security & Threat Analysis",
    domain: "Systems & Security",
    category: "systems",
    icon: ShieldCheck,
    color: "text-mint-signal",
    badgeBg: "bg-mint-signal/10 border-mint-signal/30",
    description: "OWASP vulnerability scanning, cryptographic hashing, and secure API practices.",
    clubUsage: "Hosting campus Capture-The-Flag (CTF) challenges and security auditing workshops.",
    level: "Advanced",
    featuredProjects: ["Campus CTF", "Vulnerability Scanner", "Auth Hardening"],
  },
  {
    id: "mobile-apps",
    name: "React Native & Flutter",
    domain: "Mobile Ecosystem",
    category: "systems",
    icon: Smartphone,
    color: "text-[#38BDF8]",
    badgeBg: "bg-[#38BDF8]/10 border-[#38BDF8]/30",
    description: "Cross-platform mobile apps for iOS and Android with native performance.",
    clubUsage: "Building the upcoming NUV student companion app and campus navigation tools.",
    level: "Intermediate",
    featuredProjects: ["Campus Navigator", "Student ID Pass", "NeoEvents App"],
  },
];

const categories = [
  { id: "all", label: "All Technologies" },
  { id: "frontend", label: "Frontend & Web" },
  { id: "ai", label: "AI & Data Science" },
  { id: "backend", label: "Backend & Cloud" },
  { id: "design", label: "UI/UX & Creative" },
  { id: "systems", label: "Mobile & Security" },
];

export function ModernTechExplorer() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedTech, setSelectedTech] = useState<TechItem>(techCatalog[0]);

  const filteredTech =
    selectedCategory === "all"
      ? techCatalog
      : techCatalog.filter((item) => {
          if (selectedCategory === "backend") return item.category === "backend" || item.category === "cloud";
          if (selectedCategory === "systems") return item.category === "systems";
          return item.category === selectedCategory;
        });

  return (
    <div className="flex flex-col gap-32">
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-8 border-b border-graphite/40 pb-20">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`rounded-badge border px-16 py-8 text-caption font-medium transition-all duration-200 ${
                isActive
                  ? "border-ghost-white bg-ghost-white text-void-black shadow-sm"
                  : "border-graphite/60 bg-carbon-card text-ash-gray hover:border-steel-gray hover:text-ghost-white"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* 2-Column Explorer Grid */}
      <div className="grid grid-cols-1 gap-24 lg:grid-cols-12 lg:items-start">
        {/* Left Tech Tiles Grid (7 cols) */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:col-span-7">
          {filteredTech.map((tech) => {
            const Icon = tech.icon;
            const isSelected = selectedTech.id === tech.id;

            return (
              <div
                key={tech.id}
                onClick={() => setSelectedTech(tech)}
                className={`group cursor-pointer rounded-card border p-20 transition-all duration-200 ${
                  isSelected
                    ? "border-lavender-pulse bg-carbon-card/95 shadow-[0_4px_24px_rgba(153,132,216,0.18)]"
                    : "border-graphite/50 bg-carbon-card/70 hover:border-steel-gray hover:bg-carbon-card"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-12">
                    <div className={`flex h-32 w-32 items-center justify-center rounded-button border ${tech.badgeBg}`}>
                      <Icon className={`h-16 w-16 ${tech.color}`} strokeWidth={1.75} />
                    </div>
                    <div>
                      <h4 className="text-body font-semibold text-ghost-white">{tech.name}</h4>
                      <p className="text-[12px] text-steel-gray">{tech.domain}</p>
                    </div>
                  </div>
                </div>

                <p className="mt-12 text-[13px] text-ash-gray line-clamp-2 leading-relaxed">
                  {tech.description}
                </p>

                <div className="mt-14 flex items-center justify-between border-t border-graphite/30 pt-10 text-[11px]">
                  <span className="text-steel-gray">{tech.level}</span>
                  <span className={`font-medium ${isSelected ? "text-lavender-pulse" : "text-ash-gray group-hover:text-ghost-white"}`}>
                    {isSelected ? "✦ Active Details" : "View Details →"}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Active Tech Deep-Dive Pane (5 cols) */}
        <div className="lg:col-span-5">
          <div className="sticky top-[100px] overflow-hidden rounded-card border border-graphite/70 bg-carbon-card/90 p-28 shadow-2xl backdrop-blur-xl">
            {/* Ambient Background Glow */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 0%, rgba(153,132,216,0.18), rgba(63,203,127,0.06) 45%, transparent 75%)",
              }}
              aria-hidden="true"
            />

            <div className="relative flex flex-col gap-20">
              <div className="flex items-center justify-between">
                <span className={`rounded-badge border px-12 py-4 text-caption font-medium ${selectedTech.badgeBg} ${selectedTech.color}`}>
                  {selectedTech.domain}
                </span>
                <span className="text-caption text-steel-gray font-mono">{selectedTech.level}</span>
              </div>

              <div>
                <div className="flex items-center gap-12">
                  <div className={`flex h-38 w-38 items-center justify-center rounded-button border ${selectedTech.badgeBg}`}>
                    <selectedTech.icon className={`h-18 w-18 ${selectedTech.color}`} strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="text-[22px] font-semibold text-ghost-white">{selectedTech.name}</h3>
                    <p className="text-body-sm text-ash-gray">{selectedTech.description}</p>
                  </div>
                </div>
              </div>

              <div className="rounded-input border border-graphite/40 bg-void-black/70 p-16">
                <p className="flex items-center gap-6 text-[12px] font-semibold text-lavender-pulse uppercase tracking-wider">
                  <Sparkles className="h-10 w-10" />
                  How We Build With It
                </p>
                <p className="mt-8 text-[13px] text-ghost-white leading-relaxed">
                  {selectedTech.clubUsage}
                </p>
              </div>

              <div>
                <p className="text-[12px] font-semibold text-steel-gray uppercase tracking-wider">
                  Featured Club Projects & Modules
                </p>
                <div className="mt-10 flex flex-col gap-8">
                  {selectedTech.featuredProjects.map((proj) => (
                    <div
                      key={proj}
                      className="flex items-center gap-8 rounded-input border border-graphite/30 bg-white/[0.02] px-12 py-8 text-[13px] text-ash-gray"
                    >
                      <CheckCircle2 className="h-12 w-12 text-mint-signal shrink-0" />
                      <span className="text-ghost-white font-medium">{proj}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-graphite/40 pt-16">
                <Link
                  to="/events"
                  className="flex items-center justify-between rounded-button bg-ghost-white px-16 py-10 text-body-sm font-medium text-void-black transition-all hover:bg-bone-white"
                >
                  <span>Join Next Workshop</span>
                  <ArrowRight className="h-14 w-14" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

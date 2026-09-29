import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Sparkles, Layers, Trophy, Check, ArrowRight, Code2 } from "lucide-react";
import { Link } from "react-router-dom";

export function HeroShowcase() {
  const [activeTab, setActiveTab] = useState<"quickstart" | "domains" | "highlights">("quickstart");
  const [copied, setCopied] = useState(false);

  const command = "npm create neofolks-project@latest";

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative mx-auto mt-40 w-full max-w-[880px] rounded-card border border-graphite/70 bg-carbon-card/90 p-4 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-lavender-pulse/40">
      {/* Top subtle glow bar */}
      <div
        className="pointer-events-none absolute -top-px left-1/2 h-[2px] w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-lavender-pulse to-transparent opacity-80"
        aria-hidden="true"
      />

      {/* Terminal Window Frame Header */}
      <div className="flex flex-wrap items-center justify-between gap-12 border-b border-graphite/50 px-16 py-12">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-6">
            <span className="h-10 w-10 rounded-full bg-red-500/80" />
            <span className="h-10 w-10 rounded-full bg-yellow-500/80" />
            <span className="h-10 w-10 rounded-full bg-mint-signal/80" />
          </div>
          <span className="ml-8 font-mono text-[13px] text-steel-gray">
            neofolks@nuv:~
          </span>
        </div>

        {/* Tab switchers */}
        <div className="flex items-center gap-4 rounded-button bg-void-black/80 p-4 border border-graphite/40 text-[13px]">
          <button
            type="button"
            onClick={() => setActiveTab("quickstart")}
            className={`flex items-center gap-6 rounded-input px-12 py-4 transition-all duration-200 ${
              activeTab === "quickstart"
                ? "bg-white/10 text-ghost-white font-medium shadow-sm"
                : "text-ash-gray hover:text-ghost-white"
            }`}
          >
            <Terminal className="h-12 w-12 text-lavender-pulse" />
            <span>Terminal</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("domains")}
            className={`flex items-center gap-6 rounded-input px-12 py-4 transition-all duration-200 ${
              activeTab === "domains"
                ? "bg-white/10 text-ghost-white font-medium shadow-sm"
                : "text-ash-gray hover:text-ghost-white"
            }`}
          >
            <Layers className="h-12 w-12 text-mint-signal" />
            <span>Domains</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("highlights")}
            className={`flex items-center gap-6 rounded-input px-12 py-4 transition-all duration-200 ${
              activeTab === "highlights"
                ? "bg-white/10 text-ghost-white font-medium shadow-sm"
                : "text-ash-gray hover:text-ghost-white"
            }`}
          >
            <Trophy className="h-12 w-12 text-yellow-400" />
            <span>Milestones</span>
          </button>
        </div>
      </div>

      {/* Tab Content Window */}
      <div className="p-20 sm:p-28">
        <AnimatePresence mode="wait">
          {activeTab === "quickstart" && (
            <motion.div
              key="quickstart"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col gap-16 font-mono text-[14px]"
            >
              <div className="flex items-center justify-between rounded-input border border-graphite/60 bg-void-black/80 px-16 py-12">
                <div className="flex items-center gap-8 overflow-x-auto text-ash-gray">
                  <span className="text-mint-signal font-semibold">$</span>
                  <span className="text-ghost-white">{command}</span>
                </div>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="flex shrink-0 items-center gap-6 rounded-input border border-graphite bg-white/5 px-10 py-6 text-[12px] text-ash-gray transition-colors hover:border-ghost-white hover:text-ghost-white"
                >
                  {copied ? (
                    <>
                      <Check className="h-12 w-12 text-mint-signal" />
                      <span className="text-mint-signal">Copied</span>
                    </>
                  ) : (
                    <span>Copy</span>
                  )}
                </button>
              </div>

              <div className="grid grid-cols-1 gap-12 sm:grid-cols-3 text-[13px]">
                <div className="flex flex-col gap-4 rounded-input border border-graphite/30 bg-white/[0.02] p-12">
                  <div className="flex items-center gap-6 text-mint-signal">
                    <Sparkles className="h-12 w-12" />
                    <span className="font-semibold">01. Open Entry</span>
                  </div>
                  <p className="font-sans text-[13px] text-ash-gray">
                    Open to every NUV student across all departments and skill levels.
                  </p>
                </div>
                <div className="flex flex-col gap-4 rounded-input border border-graphite/30 bg-white/[0.02] p-12">
                  <div className="flex items-center gap-6 text-lavender-pulse">
                    <Code2 className="h-12 w-12" />
                    <span className="font-semibold">02. Ship Real Code</span>
                  </div>
                  <p className="font-sans text-[13px] text-ash-gray">
                    Build production apps, contribute to open source & host hackathons.
                  </p>
                </div>
                <div className="flex flex-col gap-4 rounded-input border border-graphite/30 bg-white/[0.02] p-12">
                  <div className="flex items-center gap-6 text-ghost-white">
                    <Trophy className="h-12 w-12 text-yellow-400" />
                    <span className="font-semibold">03. Grow Together</span>
                  </div>
                  <p className="font-sans text-[13px] text-ash-gray">
                    Peer mentorship, resume reviews, technical talks, and hackathon squads.
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "domains" && (
            <motion.div
              key="domains"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-2 gap-12 sm:grid-cols-4 text-[13px]"
            >
              {[
                { name: "Web & Fullstack", stack: "React, Next.js, Node", color: "text-[#61DAFB]" },
                { name: "AI & Machine Learning", stack: "Python, PyTorch, LLMs", color: "text-[#FF6F00]" },
                { name: "Cloud & DevOps", stack: "Docker, Kubernetes, AWS", color: "text-[#2496ED]" },
                { name: "UI/UX & Design", stack: "Figma, Design Systems", color: "text-[#F24E1E]" },
                { name: "Mobile Development", stack: "React Native, Flutter", color: "text-[#38BDF8]" },
                { name: "Cybersecurity", stack: "CTFs, Threat Modeling", color: "text-mint-signal" },
                { name: "Open Source", stack: "Git, GitHub, Global PRs", color: "text-ghost-white" },
                { name: "Product & Leadership", stack: "Sprint Planning, Mentorship", color: "text-lavender-pulse" },
              ].map((domain) => (
                <div
                  key={domain.name}
                  className="flex flex-col justify-between rounded-input border border-graphite/40 bg-white/[0.02] p-12 transition-colors hover:border-graphite hover:bg-white/[0.04]"
                >
                  <p className="font-medium text-ghost-white">{domain.name}</p>
                  <p className={`mt-4 text-[11px] ${domain.color}`}>{domain.stack}</p>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === "highlights" && (
            <motion.div
              key="highlights"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col gap-12 text-[13px]"
            >
              <div className="grid grid-cols-1 gap-12 sm:grid-cols-3">
                <div className="rounded-input border border-graphite/40 bg-white/[0.02] p-16">
                  <span className="text-[22px] font-semibold text-ghost-white">500+</span>
                  <p className="text-body-sm font-medium text-ghost-white mt-4">Active Club Members</p>
                  <p className="mt-4 text-[12px] text-ash-gray">
                    Students from CS, IT, Engineering & Design collaborating on campus.
                  </p>
                </div>
                <div className="rounded-input border border-graphite/40 bg-white/[0.02] p-16">
                  <span className="text-[22px] font-semibold text-mint-signal">30+</span>
                  <p className="text-body-sm font-medium text-ghost-white mt-4">Events & Bootcamps</p>
                  <p className="mt-4 text-[12px] text-ash-gray">
                    Hands-on sessions covering modern web, AI models, and cloud systems.
                  </p>
                </div>
                <div className="rounded-input border border-graphite/40 bg-white/[0.02] p-16">
                  <span className="text-[22px] font-semibold text-lavender-pulse">15+</span>
                  <p className="text-body-sm font-medium text-ghost-white mt-4">Production Projects</p>
                  <p className="mt-4 text-[12px] text-ash-gray">
                    Student-built apps deployed for university events and community utilities.
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between rounded-input border border-graphite/40 bg-void-black/50 px-16 py-10">
                <span className="text-[13px] text-ash-gray">Want to see all upcoming workshops & past recaps?</span>
                <Link
                  to="/events"
                  className="flex items-center gap-4 text-[13px] font-medium text-lavender-pulse transition-colors hover:text-ghost-white"
                >
                  <span>Explore Schedule</span>
                  <ArrowRight className="h-12 w-12" />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

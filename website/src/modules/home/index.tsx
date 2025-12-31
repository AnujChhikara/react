import { Button } from "@/components/ui/button";
import { HeroVisualization } from "@/components/hero-visualization";
import {
  ArrowRight,
  Github,
  Library,
  ShieldCheck,
  Zap,
  Linkedin,
  Twitter,
  Mail,
  ExternalLink,
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Link } from "@tanstack/react-router";

export function HomeModule() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/10 transition-colors duration-300">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <span className="text-sm font-bold tracking-tight">
              GREAT REACT HOOKS
            </span>
            <div className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
              <Link
                to="/hooks"
                className="hover:text-foreground transition-colors"
              >
                Hooks
              </Link>
              <a href="#" className="hover:text-foreground transition-colors">
                Docs
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Playground
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                About
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <a
              href="https://github.com/AnujChhikara/react"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub Repository"
            >
              <Github className="w-5 h-5" />
            </a>
            <Button size="sm" className="rounded-full px-5">
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-muted/30 text-[10px] font-bold tracking-widest text-muted-foreground uppercase mb-6">
                <Zap className="w-3 h-3 fill-current" />
                Production-Ready Hooks
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6 font-mono italic">
                Build Faster with <br />
                <span className="animate-shimmer">Production-Ready</span> <br />
                React Hooks
              </h1>

              <p className="text-base text-muted-foreground max-w-[540px] leading-relaxed mb-10">
                A curated collection of React hooks and utilities I built to
                solve real problems in production — shared openly so you don’t
                have to reinvent them.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <Button size="lg" className="rounded-full px-8 group">
                  Explore Hooks
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 bg-transparent"
                >
                  Read the Docs
                </Button>
              </div>

              {/* Trust/Signal Row */}
              <div className="flex items-center gap-8 pt-8 border-t border-border/50">
                <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                  <ShieldCheck className="w-4 h-4" />
                  MIT Licensed
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                  <Zap className="w-4 h-4" />
                  TypeScript First
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                  <Library className="w-4 h-4" />
                  100% Tested
                </div>
              </div>
            </div>

            {/* Right Visualization */}
            <div className="relative">
              <HeroVisualization />
            </div>
          </div>
        </section>

        {/* SECTION 1: Why This Exists */}
        <section className="py-24 border-t border-border/50">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">
                Built from Real Problems
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Every hook here started as a workaround in a real codebase.
                  When I found myself solving the same problems
                  repeatedly—viewport logic, event listeners, performance
                  issues—I turned them into reusable utilities.
                </p>
                <p>
                  I refined them for production use, ensuring they handle edge
                  cases that often get ignored in quick implementations.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-8">
                {[
                  "Production Ready",
                  "TypeScript First",
                  "Zero Fluff",
                  "Ergonomic API",
                ].map((pill) => (
                  <div
                    key={pill}
                    className="px-3 py-1 rounded-full bg-muted border border-border text-[11px] font-medium"
                  >
                    {pill}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-square md:aspect-video rounded-2xl bg-muted/50 border border-border overflow-hidden flex items-center justify-center">
              <div className="flex items-center gap-4 text-sm font-mono">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-lg bg-background border border-border flex items-center justify-center">
                    ⚠️
                  </div>
                  <span>Problem</span>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground" />
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-lg bg-primary border border-primary text-primary-foreground flex items-center justify-center">
                    ⚓
                  </div>
                  <span>Hook</span>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground" />
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-lg bg-background border border-border flex items-center justify-center">
                    🚀
                  </div>
                  <span>Reuse</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: How Each Hook Is Designed */}
        <section className="py-24 border-t border-border/50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight mb-12">
                How Each Hook Is Designed
              </h2>
              <div className="space-y-12">
                {[
                  {
                    title: "Problem",
                    desc: "Clearly defined pain point we are solving.",
                  },
                  {
                    title: "Why It Exists",
                    desc: "Analysis of why existing solutions weren't enough.",
                  },
                  {
                    title: "Usage",
                    desc: "Clean, copy-pasteable examples for your project.",
                  },
                  {
                    title: "Documentation",
                    desc: "Deep dive into API, types, and edge cases.",
                  },
                ].map((step, i) => (
                  <div key={step.title} className="flex gap-6">
                    <div className="shrink-0 w-8 h-8 rounded-full bg-muted border border-border flex items-center justify-center text-xs font-bold">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="py-32 border-t border-border/50 bg-muted/20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold tracking-tight mb-6">
              Start with one hook.
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
              Use it. Keep the rest when you need them. Production quality
              without the bloat of a massive library.
            </p>
            <Button size="lg" className="rounded-full px-10">
              Browse All Hooks
            </Button>
          </div>
        </section>

        {/* Creator Section */}
        <section className="py-24 border-t border-border/50">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                About Me
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Hi, I'm{" "}
                <span className="font-semibold text-foreground">
                  Anuj Chhikara
                </span>
                , a software engineer passionate about building end-to-end
                products that solve real-world problems.
              </p>
              <p className="text-base text-muted-foreground mb-8 max-w-2xl mx-auto">
                I created these hooks to solve problems I encountered in
                production. They're battle-tested, well-documented, and ready to
                use in your projects.
              </p>
              <div className="flex items-center justify-center gap-2 mb-8">
                <a
                  href="https://anujchhikara.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1"
                >
                  Visit my website
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <div className="flex items-center justify-center gap-6 flex-wrap">
                <a
                  href="https://github.com/anujchhikara"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/anujchhikara20"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">LinkedIn</span>
                </a>
                <a
                  href="https://twitter.com/anujchhikara07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">Twitter</span>
                </a>
                <a
                  href="mailto:anuj@anujchhikara.com"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">Email</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-border/40">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <span className="text-sm font-bold tracking-tight">
            GREAT REACT HOOKS
          </span>
          <div className="flex gap-8 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground">
              GitHub
            </a>
            <a href="#" className="hover:text-foreground">
              Documentation
            </a>
            <a href="#" className="hover:text-foreground">
              Twitter
            </a>
          </div>
          <p className="text-xs text-muted-foreground">© 2025 MIT Licensed.</p>
        </div>
      </footer>
    </div>
  );
}

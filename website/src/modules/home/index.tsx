import { Button } from "@/components/ui/button";
import { HeroVisualization } from "@/components/hero-visualization";
import { ArrowRight, Github, Library, ShieldCheck, Zap } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
              <a href="#" className="hover:text-foreground transition-colors">
                Hooks
              </a>
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
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
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

              <h1
                className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1] mb-6"
                style={{
                  fontFamily:
                    '"Geist", "Geist Fallback", system-ui, sans-serif',
                }}
              >
                Build Faster with <br />
                <span className="animate-shimmer">Production-Ready</span> <br />
                React Hooks
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-[540px] leading-relaxed mb-10">
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

        {/* SECTION 2: Hooks Overview */}
        <section className="py-24 bg-muted/30">
          <div className="max-w-7xl mx-auto px-6 text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Explore the Hooks
            </h2>
            <p className="text-muted-foreground">
              Each hook is focused, documented, and designed to solve one
              problem.
            </p>
          </div>

          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "useViewport",
                desc: "Track window dimensions and breakpoints with zero lag.",
                tag: "UI",
              },
              {
                name: "useDebounce",
                desc: "Delay execution of a function until after a set wait time.",
                tag: "Performance",
              },
              {
                name: "useLocalStorage",
                desc: "Sync state with localStorage with full type safety.",
                tag: "State",
              },
              {
                name: "useIntersection",
                desc: "Observer API wrapper for easy scroll animations.",
                tag: "Browser",
              },
              {
                name: "useEventListener",
                desc: "Automatic cleanup for any DOM or window events.",
                tag: "Events",
              },
              {
                name: "usePrevious",
                desc: "Keep track of the previous value of a prop or state.",
                tag: "Utilities",
              },
            ].map((hook) => (
              <Card
                key={hook.name}
                className="group hover:border-primary/50 transition-all cursor-pointer"
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="font-mono text-base">
                      {hook.name}
                    </CardTitle>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground border px-2 py-0.5 rounded">
                      {hook.tag}
                    </div>
                  </div>
                  <CardDescription className="pt-2">
                    {hook.desc}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
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
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-muted border border-border flex items-center justify-center text-xs font-bold">
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

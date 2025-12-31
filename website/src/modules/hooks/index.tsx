import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import { Github, ArrowLeft } from "lucide-react";
import { useViewport } from "react-use-viewport";
import { useScreenshot } from "great-react-screenshot";
import { FlowDiagram } from "react-animated-flow-diagram";
import { useState } from "react";

export function HooksModule() {
  const viewport = useViewport();
  const { parentRef, takeScreenshot, image, isCapturing } = useScreenshot();

  const [flowShapes] = useState([
    {
      id: "start",
      type: "roundedRectangle" as const,
      label: "Start",
      color: "#3b82f6",
    },
    {
      id: "process",
      type: "rectangle" as const,
      label: "Process",
      color: "#10b981",
    },
    {
      id: "decision",
      type: "diamond" as const,
      label: "Decision",
      color: "#f59e0b",
    },
    {
      id: "end",
      type: "roundedRectangle" as const,
      label: "End",
      color: "#ef4444",
    },
  ]);

  const [flowConnections] = useState([
    "start->process",
    "process->decision",
    "decision->end",
  ]);

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/10 transition-colors duration-300">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link to="/" className="text-sm font-bold tracking-tight">
              GREAT REACT HOOKS
            </Link>
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
            <Link to="/">
              <Button size="sm" className="rounded-full px-5">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Home
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-12">
        {/* Header */}
        <section className="py-12 border-b border-border/50">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Explore the Hooks
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Each hook is focused, documented, and designed to solve one
              problem. See them in action below.
            </p>
          </div>
        </section>

        {/* useViewport Example */}
        <section className="py-16 border-b border-border/50">
          <div className="max-w-7xl mx-auto px-6">
            <Card className="mb-8">
              <CardHeader>
                <div className="flex justify-between items-start mb-4">
                  <CardTitle className="text-2xl">useViewport</CardTitle>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground border px-2 py-0.5 rounded">
                    UI
                  </div>
                </div>
                <CardDescription className="text-base mb-6">
                  Track window dimensions, breakpoints, orientation, and
                  keyboard visibility with zero lag.
                </CardDescription>

                {/* Live Demo */}
                <div className="p-6 bg-muted/30 rounded-lg border border-border mb-6">
                  <h3 className="text-sm font-semibold mb-4">Live Demo</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="p-4 bg-background rounded-lg border border-border">
                      <p className="text-xs text-muted-foreground mb-1">
                        Width
                      </p>
                      <p className="text-lg font-bold">{viewport.width}px</p>
                    </div>
                    <div className="p-4 bg-background rounded-lg border border-border">
                      <p className="text-xs text-muted-foreground mb-1">
                        Height
                      </p>
                      <p className="text-lg font-bold">{viewport.height}px</p>
                    </div>
                    <div className="p-4 bg-background rounded-lg border border-border">
                      <p className="text-xs text-muted-foreground mb-1">
                        Breakpoint
                      </p>
                      <p className="text-lg font-bold capitalize">
                        {viewport.breakpoint}
                      </p>
                    </div>
                    <div className="p-4 bg-background rounded-lg border border-border">
                      <p className="text-xs text-muted-foreground mb-1">
                        Orientation
                      </p>
                      <p className="text-lg font-bold capitalize">
                        {viewport.orientation}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 flex gap-2 flex-wrap">
                    {viewport.isMobile && (
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                        Mobile
                      </span>
                    )}
                    {viewport.isTablet && (
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                        Tablet
                      </span>
                    )}
                    {viewport.isDesktop && (
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                        Desktop
                      </span>
                    )}
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* useScreenshot Example */}
        <section className="py-16 border-b border-border/50">
          <div className="max-w-7xl mx-auto px-6">
            <Card className="mb-8">
              <CardHeader>
                <div className="flex justify-between items-start mb-4">
                  <CardTitle className="text-2xl">useScreenshot</CardTitle>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground border px-2 py-0.5 rounded">
                    Media
                  </div>
                </div>
                <CardDescription className="text-base mb-6">
                  Take screenshots of React components and DOM elements with
                  full TypeScript support.
                </CardDescription>

                {/* Live Demo */}
                <div className="p-6 bg-muted/30 rounded-lg border border-border mb-6">
                  <h3 className="text-sm font-semibold mb-4">Live Demo</h3>
                  <div
                    ref={parentRef}
                    className="p-6 bg-background rounded-lg border-2 border-dashed border-border mb-4"
                  >
                    <h4 className="text-lg font-bold mb-2">
                      This content can be captured!
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Click the button below to take a screenshot of this card.
                    </p>
                  </div>
                  <div className="flex gap-4 items-center">
                    <Button
                      onClick={takeScreenshot}
                      disabled={isCapturing}
                      className="rounded-full"
                    >
                      {isCapturing ? "Capturing..." : "Take Screenshot"}
                    </Button>
                    {image && (
                      <div className="flex-1">
                        <p className="text-xs text-muted-foreground mb-2">
                          Screenshot captured!
                        </p>
                        <img
                          src={image}
                          alt="Screenshot"
                          className="max-w-xs rounded-lg border border-border"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* FlowDiagram Example */}
        <section className="py-16 border-b border-border/50">
          <div className="max-w-7xl mx-auto px-6">
            <Card className="mb-8">
              <CardHeader>
                <div className="flex justify-between items-start mb-4">
                  <CardTitle className="text-2xl">FlowDiagram</CardTitle>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground border px-2 py-0.5 rounded">
                    Component
                  </div>
                </div>
                <CardDescription className="text-base mb-6">
                  Create beautiful flow diagrams with animated connections.
                  Perfect for flowcharts and process diagrams.
                </CardDescription>

                {/* Live Demo */}
                <div className="p-6 bg-muted/30 rounded-lg border border-border mb-6">
                  <h3 className="text-sm font-semibold mb-4">Live Demo</h3>
                  <div className="bg-background rounded-lg p-8 border border-border">
                    <FlowDiagram
                      shapes={flowShapes}
                      connections={flowConnections}
                      defaultAnimated="flow"
                      defaultLineColor="currentColor"
                      gap={80}
                    />
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}

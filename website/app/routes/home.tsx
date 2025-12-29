import type { Route } from "./+types/home";
import { useScreenshot } from "great-react-screenshot";
import { useViewport } from "react-use-viewport";
import { FlowDiagram } from "react-animated-flow-diagram";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "React Hooks Collection - Powerful React Hooks" },
    {
      name: "description",
      content:
        "Collection of powerful React hooks: useScreenshot, useViewport, and FlowDiagram",
    },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      {/* Header */}
      <header className="border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            React Hooks Collection
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            Powerful, production-ready React hooks and components
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Build Better React Apps
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A collection of powerful, well-tested React hooks and components
            ready for production use
          </p>
        </section>

        {/* Hooks Grid */}
        <div className="grid gap-8 md:grid-cols-3 mb-16">
          <HookCard
            title="useScreenshot"
            packageName="great-react-screenshot"
            description="Capture screenshots of React components and DOM elements with ease"
            color="blue"
          />
          <HookCard
            title="useViewport"
            packageName="react-use-viewport"
            description="Track viewport dimensions, breakpoints, and keyboard visibility"
            color="green"
          />
          <HookCard
            title="FlowDiagram"
            packageName="react-animated-flow-diagram"
            description="Create beautiful flow diagrams with animated connections"
            color="purple"
          />
        </div>

        {/* Demo Sections */}
        <ScreenshotDemo />
        <ViewportDemo />
        <FlowDiagramDemo />
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 mt-16 py-8">
        <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
          <p>Built with React Router and Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}

function HookCard({
  title,
  packageName,
  description,
  color,
}: {
  title: string;
  packageName: string;
  description: string;
  color: "blue" | "green" | "purple";
}) {
  const colorClasses = {
    blue: "bg-blue-500 hover:bg-blue-600",
    green: "bg-green-500 hover:bg-green-600",
    purple: "bg-purple-500 hover:bg-purple-600",
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700">
      <div
        className={`w-12 h-12 ${colorClasses[color]} rounded-lg mb-4 flex items-center justify-center`}
      >
        <span className="text-white text-xl font-bold">{title[0]}</span>
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      <code className="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-gray-800 dark:text-gray-200">
        {packageName}
      </code>
    </div>
  );
}

function ScreenshotDemo() {
  const { parentRef, takeScreenshot, image, isCapturing, reset } =
    useScreenshot({
      format: "png",
      quality: 1,
    });

  const handleDownload = () => {
    if (image) {
      const link = document.createElement("a");
      link.download = "screenshot.png";
      link.href = image;
      link.click();
    }
  };

  return (
    <section className="mb-16 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 border border-gray-200 dark:border-gray-700">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          useScreenshot Hook
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Capture screenshots of any React component or DOM element
        </p>
        <code className="mt-2 inline-block text-sm bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded">
          npm install great-react-screenshot
        </code>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <div
            ref={parentRef}
            className="bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg p-8 text-white mb-4"
          >
            <h3 className="text-2xl font-bold mb-2">Capture This Card!</h3>
            <p className="mb-4">
              This is a beautiful card that you can capture as a screenshot.
            </p>
            <div className="bg-white/20 rounded p-4 backdrop-blur-sm">
              <p className="text-sm">
                ✨ Screenshots are perfect for sharing UI components, creating
                documentation, or generating thumbnails.
              </p>
            </div>
          </div>

          <div className="flex gap-2 flex-wrap">
            <button
              onClick={takeScreenshot}
              disabled={isCapturing}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isCapturing ? "Capturing..." : "Take Screenshot"}
            </button>
            {image && (
              <>
                <button
                  onClick={handleDownload}
                  className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                >
                  Download
                </button>
                <button
                  onClick={reset}
                  className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                >
                  Reset
                </button>
              </>
            )}
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Captured Screenshot:
          </h4>
          {image ? (
            <div className="border-2 border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden">
              <img src={image} alt="Screenshot" className="w-full h-auto" />
            </div>
          ) : (
            <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-12 text-center text-gray-400">
              No screenshot yet. Click "Take Screenshot" to capture!
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function ViewportDemo() {
  const viewport = useViewport({
    debounceMs: 100,
  });

  return (
    <section className="mb-16 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 border border-gray-200 dark:border-gray-700">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          useViewport Hook
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Track viewport dimensions, breakpoints, orientation, and keyboard
          visibility in real-time
        </p>
        <code className="mt-2 inline-block text-sm bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded">
          npm install react-use-viewport
        </code>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <InfoCard label="Width" value={`${viewport.width}px`} icon="📐" />
        <InfoCard label="Height" value={`${viewport.height}px`} icon="📏" />
        <InfoCard
          label="Breakpoint"
          value={viewport.breakpoint}
          icon="📱"
          highlight
        />
        <InfoCard label="Orientation" value={viewport.orientation} icon="🔄" />
      </div>

      <div className="mt-6 grid md:grid-cols-3 gap-4">
        <div
          className={`p-4 rounded-lg border-2 ${
            viewport.isMobile
              ? "border-green-500 bg-green-50 dark:bg-green-900/20"
              : "border-gray-200 dark:border-gray-700"
          }`}
        >
          <div className="flex items-center gap-2">
            <span className="text-2xl">📱</span>
            <div>
              <p className="font-semibold text-gray-900 dark:text-white">
                Mobile
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {viewport.isMobile ? "Active" : "Inactive"}
              </p>
            </div>
          </div>
        </div>

        <div
          className={`p-4 rounded-lg border-2 ${
            viewport.isTablet
              ? "border-green-500 bg-green-50 dark:bg-green-900/20"
              : "border-gray-200 dark:border-gray-700"
          }`}
        >
          <div className="flex items-center gap-2">
            <span className="text-2xl">💻</span>
            <div>
              <p className="font-semibold text-gray-900 dark:text-white">
                Tablet
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {viewport.isTablet ? "Active" : "Inactive"}
              </p>
            </div>
          </div>
        </div>

        <div
          className={`p-4 rounded-lg border-2 ${
            viewport.isDesktop
              ? "border-green-500 bg-green-50 dark:bg-green-900/20"
              : "border-gray-200 dark:border-gray-700"
          }`}
        >
          <div className="flex items-center gap-2">
            <span className="text-2xl">🖥️</span>
            <div>
              <p className="font-semibold text-gray-900 dark:text-white">
                Desktop
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {viewport.isDesktop ? "Active" : "Inactive"}
              </p>
            </div>
          </div>
        </div>
      </div>

      {viewport.isKeyboardVisible && (
        <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
          <p className="text-sm text-yellow-800 dark:text-yellow-200">
            ⌨️ Keyboard detected! Height: {viewport.keyboardHeight}px
          </p>
        </div>
      )}
    </section>
  );
}

function InfoCard({
  label,
  value,
  icon,
  highlight,
}: {
  label: string;
  value: string;
  icon: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`p-4 rounded-lg border-2 ${
        highlight
          ? "border-green-500 bg-green-50 dark:bg-green-900/20"
          : "border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/50"
      }`}
    >
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xl">{icon}</span>
        <p className="text-sm text-gray-600 dark:text-gray-400">{label}</p>
      </div>
      <p className="text-2xl font-bold text-gray-900 dark:text-white capitalize">
        {value}
      </p>
    </div>
  );
}

function FlowDiagramDemo() {
  const [diagramType, setDiagramType] = useState<"simple" | "complex">(
    "simple"
  );

  const simpleShapes = [
    {
      id: "start",
      type: "roundedRectangle" as const,
      label: "Start",
      color: "#3b82f6",
    },
    {
      id: "process",
      type: "rectangle" as const,
      label: "Process Data",
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
  ];

  const complexShapes = [
    {
      id: "start",
      type: "roundedRectangle" as const,
      label: "Start",
      color: "#3b82f6",
    },
    {
      id: "input",
      type: "parallelogram" as const,
      label: "Input",
      color: "#8b5cf6",
    },
    {
      id: "process1",
      type: "rectangle" as const,
      label: "Process 1",
      color: "#10b981",
    },
    {
      id: "process2",
      type: "rectangle" as const,
      label: "Process 2",
      color: "#06b6d4",
    },
    {
      id: "decision",
      type: "diamond" as const,
      label: "Decision",
      color: "#f59e0b",
    },
    {
      id: "output",
      type: "document" as const,
      label: "Output",
      color: "#ec4899",
    },
    {
      id: "end",
      type: "roundedRectangle" as const,
      label: "End",
      color: "#ef4444",
    },
  ];

  const simpleConnections = [
    "start->process",
    "process->decision",
    "decision->end",
  ];

  const complexConnections = [
    "start->input",
    "input->process1",
    "process1->process2",
    "process2->decision",
    "decision->output",
    "output->end",
  ];

  const shapes = diagramType === "simple" ? simpleShapes : complexShapes;
  const connections =
    diagramType === "simple" ? simpleConnections : complexConnections;

  return (
    <section className="mb-16 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 border border-gray-200 dark:border-gray-700">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          FlowDiagram Component
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Create beautiful flow diagrams with animated connections. Perfect for
          flowcharts, process diagrams, and system architecture visualizations.
        </p>
        <code className="mt-2 inline-block text-sm bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded">
          npm install react-animated-flow-diagram
        </code>
      </div>

      <div className="mb-4 flex gap-2">
        <button
          onClick={() => setDiagramType("simple")}
          className={`px-4 py-2 rounded ${
            diagramType === "simple"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
          }`}
        >
          Simple Flow
        </button>
        <button
          onClick={() => setDiagramType("complex")}
          className={`px-4 py-2 rounded ${
            diagramType === "complex"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
          }`}
        >
          Complex Flow
        </button>
      </div>

      <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
        <FlowDiagram
          shapes={shapes}
          connections={connections}
          defaultAnimated="flow"
          defaultLineColor="#6b7280"
          defaultStrokeWidth={2}
          gap={60}
          containerStyle={{ padding: "20px" }}
        />
      </div>

      <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
        <p className="text-sm text-blue-800 dark:text-blue-200">
          💡 <strong>Tip:</strong> FlowDiagram supports multiple shape types
          (square, rectangle, circle, diamond, hexagon, and more) and animated
          connections (flow, pulse, light). Customize colors, styles, and flow
          directions to match your design!
        </p>
      </div>
    </section>
  );
}

import { Link } from "react-router";
import { useScreenshot } from "great-react-screenshot";
import CodeBlock from "../../components/CodeBlock";

export default function UseScreenshotPage() {
  const { parentRef, takeScreenshot, image, status, reset } =
    useScreenshot<HTMLDivElement>();

  return (
    <div className="max-w-4xl">
      <header className="mb-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-text-secondary no-underline mb-4 hover:text-text-primary transition-colors"
        >
          ← Back to Hooks
        </Link>
        <h1 className="text-4xl font-semibold text-text-primary mb-2 font-mono">
          useScreenshot
        </h1>
        <p className="text-base text-text-muted font-mono mb-4">
          great-react-screenshot
        </p>
        <p className="text-lg text-text-secondary leading-relaxed">
          A React hook for capturing screenshots of components and DOM elements
          with ease. Supports PNG/JPEG formats with customizable quality and
          background colors.
        </p>
      </header>

      <section className="my-10">
        <h2 className="text-2xl font-semibold text-text-primary mb-4 flex items-center gap-3">
          <span className="w-1 h-6 bg-text-muted rounded-full"></span>
          Thought Process
        </h2>
        <p className="text-text-secondary leading-relaxed mb-4">
          When building dashboards, reports, or collaborative tools, users often
          need to capture and share visual content. Traditional approaches
          require complex canvas manipulation or external libraries with
          cumbersome APIs.
        </p>
        <p className="text-text-secondary leading-relaxed">
          <strong className="text-text-primary">useScreenshot</strong> simplifies this by providing a clean,
          hook-based API that handles the complexity of DOM-to-image conversion.
          Just attach a ref to any element, call a function, and get your
          screenshot.
        </p>
      </section>

      <section className="my-10">
        <h2 className="text-2xl font-semibold text-text-primary mb-4 flex items-center gap-3">
          <span className="w-1 h-6 bg-text-muted rounded-full"></span>
          What It Does
        </h2>
        <p className="text-text-secondary mb-4">This hook provides:</p>
        <ul className="text-text-secondary ml-6 space-y-2 list-disc">
          <li>A ref to attach to the target element</li>
          <li>Status tracking (idle, capturing, completed, error)</li>
          <li>The captured image as a data URL</li>
          <li>Support for PNG and JPEG formats</li>
          <li>Customizable quality and background color</li>
          <li>Easy reset functionality</li>
        </ul>
      </section>

      <section className="my-10">
        <h2 className="text-2xl font-semibold text-text-primary mb-4 flex items-center gap-3">
          <span className="w-1 h-6 bg-text-muted rounded-full"></span>
          API Reference
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="text-left p-3 bg-bg-secondary text-text-primary font-semibold border-b border-border">
                  Return Value
                </th>
                <th className="text-left p-3 bg-bg-secondary text-text-primary font-semibold border-b border-border">
                  Type
                </th>
                <th className="text-left p-3 bg-bg-secondary text-text-primary font-semibold border-b border-border">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border-b border-border text-text-secondary">
                  <code className="bg-bg-tertiary px-2 py-1 rounded text-xs font-mono text-text-primary">
                    parentRef
                  </code>
                </td>
                <td className="p-3 border-b border-border text-text-secondary">
                  <code className="bg-bg-tertiary px-2 py-1 rounded text-xs font-mono text-text-primary">
                    RefObject
                  </code>
                </td>
                <td className="p-3 border-b border-border text-text-secondary">
                  Attach to the element you want to capture
                </td>
              </tr>
              <tr>
                <td className="p-3 border-b border-border text-text-secondary">
                  <code className="bg-bg-tertiary px-2 py-1 rounded text-xs font-mono text-text-primary">
                    takeScreenshot
                  </code>
                </td>
                <td className="p-3 border-b border-border text-text-secondary">
                  <code className="bg-bg-tertiary px-2 py-1 rounded text-xs font-mono text-text-primary">
                    () =&gt; Promise
                  </code>
                </td>
                <td className="p-3 border-b border-border text-text-secondary">
                  Triggers the screenshot capture
                </td>
              </tr>
              <tr>
                <td className="p-3 border-b border-border text-text-secondary">
                  <code className="bg-bg-tertiary px-2 py-1 rounded text-xs font-mono text-text-primary">
                    image
                  </code>
                </td>
                <td className="p-3 border-b border-border text-text-secondary">
                  <code className="bg-bg-tertiary px-2 py-1 rounded text-xs font-mono text-text-primary">
                    string | null
                  </code>
                </td>
                <td className="p-3 border-b border-border text-text-secondary">
                  The captured image as a data URL
                </td>
              </tr>
              <tr>
                <td className="p-3 border-b border-border text-text-secondary">
                  <code className="bg-bg-tertiary px-2 py-1 rounded text-xs font-mono text-text-primary">
                    status
                  </code>
                </td>
                <td className="p-3 border-b border-border text-text-secondary">
                  <code className="bg-bg-tertiary px-2 py-1 rounded text-xs font-mono text-text-primary">
                    Status
                  </code>
                </td>
                <td className="p-3 border-b border-border text-text-secondary">
                  Current state: idle | capturing | completed | error
                </td>
              </tr>
              <tr>
                <td className="p-3 border-b border-border text-text-secondary">
                  <code className="bg-bg-tertiary px-2 py-1 rounded text-xs font-mono text-text-primary">
                    isCapturing
                  </code>
                </td>
                <td className="p-3 border-b border-border text-text-secondary">
                  <code className="bg-bg-tertiary px-2 py-1 rounded text-xs font-mono text-text-primary">
                    boolean
                  </code>
                </td>
                <td className="p-3 border-b border-border text-text-secondary">
                  True while capturing is in progress
                </td>
              </tr>
              <tr>
                <td className="p-3 border-b border-border text-text-secondary">
                  <code className="bg-bg-tertiary px-2 py-1 rounded text-xs font-mono text-text-primary">
                    reset
                  </code>
                </td>
                <td className="p-3 border-b border-border text-text-secondary">
                  <code className="bg-bg-tertiary px-2 py-1 rounded text-xs font-mono text-text-primary">
                    () =&gt; void
                  </code>
                </td>
                <td className="p-3 border-b border-border text-text-secondary">
                  Resets the hook to initial state
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="my-10">
        <h2 className="text-2xl font-semibold text-text-primary mb-4 flex items-center gap-3">
          <span className="w-1 h-6 bg-text-muted rounded-full"></span>
          Live Demo
        </h2>
        <div className="bg-bg-secondary border border-border rounded-lg p-6 my-4">
          <div className="text-xs uppercase tracking-wider text-text-secondary mb-4 font-semibold">
            Try it out
          </div>

          <div
            ref={parentRef}
            className="bg-gradient-to-br from-indigo-500 to-purple-600 p-8 rounded-lg text-center text-white mb-4"
          >
            <h3 className="mb-2 text-xl font-semibold">📸 Capture Me!</h3>
            <p>
              This entire card will be captured as an image when you click the
              button below.
            </p>
          </div>

          <div className="flex gap-3 mt-4">
            <button
              className="inline-flex items-center gap-2 px-4 py-2 bg-text-primary text-white rounded-md text-sm font-medium hover:bg-text-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={takeScreenshot}
              disabled={status === "capturing"}
            >
              {status === "capturing" ? "Capturing..." : "Take Screenshot"}
            </button>
            {image && (
              <button
                className="inline-flex items-center gap-2 px-4 py-2 bg-bg-tertiary text-text-primary border border-border rounded-md text-sm font-medium hover:bg-bg-secondary transition-colors"
                onClick={reset}
              >
                Reset
              </button>
            )}
          </div>

          <div className="mt-4">
            <span
              className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                status === "idle"
                  ? "bg-bg-tertiary text-text-secondary"
                  : status === "capturing"
                    ? "bg-amber-100 text-amber-700"
                    : status === "completed"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
              }`}
            >
              {status}
            </span>
          </div>

          {image && (
            <div className="mt-4 text-center">
              <p className="text-text-secondary mb-2 text-sm">Captured Image:</p>
              <img
                src={image}
                alt="Screenshot"
                className="max-w-full rounded-lg border border-border"
              />
            </div>
          )}
        </div>
      </section>

      <section className="my-10">
        <h2 className="text-2xl font-semibold text-text-primary mb-4 flex items-center gap-3">
          <span className="w-1 h-6 bg-text-muted rounded-full"></span>
          Usage Example
        </h2>
        <CodeBlock
          title="Example.tsx"
          code={`import { useScreenshot } from "great-react-screenshot";

function CaptureCard() {
  const { parentRef, takeScreenshot, image, status, reset } = 
    useScreenshot<HTMLDivElement>({
      format: "png",
      quality: 1,
    });

  return (
    <div>
      <div ref={parentRef}>
        <h2>Content to capture</h2>
        <p>This will be in the screenshot</p>
      </div>
      
      <button onClick={takeScreenshot}>
        {status === "capturing" ? "Capturing..." : "Capture"}
      </button>
      
      {image && <img src={image} alt="Screenshot" />}
    </div>
  );
}`}
        />
      </section>
    </div>
  );
}


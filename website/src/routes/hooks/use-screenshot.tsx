import { Link } from "react-router";
import { useScreenshot } from "great-react-screenshot";
import CodeBlock from "../../components/CodeBlock";

export default function UseScreenshotPage() {
  const { parentRef, takeScreenshot, image, status, reset } =
    useScreenshot<HTMLDivElement>();

  return (
    <div className="hook-page">
      <header className="hook-header">
        <Link to="/" className="back-link">
          ← Back to Hooks
        </Link>
        <h1 className="hook-title">useScreenshot</h1>
        <p className="hook-package">great-react-screenshot</p>
        <p className="hook-description">
          A React hook for capturing screenshots of components and DOM elements
          with ease. Supports PNG/JPEG formats with customizable quality and
          background colors.
        </p>
      </header>

      <section className="content-section">
        <h2>Thought Process</h2>
        <p>
          When building dashboards, reports, or collaborative tools, users often
          need to capture and share visual content. Traditional approaches
          require complex canvas manipulation or external libraries with
          cumbersome APIs.
        </p>
        <p>
          <strong>useScreenshot</strong> simplifies this by providing a clean,
          hook-based API that handles the complexity of DOM-to-image conversion.
          Just attach a ref to any element, call a function, and get your
          screenshot.
        </p>
      </section>

      <section className="content-section">
        <h2>What It Does</h2>
        <p>This hook provides:</p>
        <ul style={{ color: "var(--text-secondary)", marginLeft: "1.5rem" }}>
          <li>A ref to attach to the target element</li>
          <li>Status tracking (idle, capturing, completed, error)</li>
          <li>The captured image as a data URL</li>
          <li>Support for PNG and JPEG formats</li>
          <li>Customizable quality and background color</li>
          <li>Easy reset functionality</li>
        </ul>
      </section>

      <section className="content-section">
        <h2>API Reference</h2>
        <table className="api-table">
          <thead>
            <tr>
              <th>Return Value</th>
              <th>Type</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>parentRef</code>
              </td>
              <td>
                <code>RefObject</code>
              </td>
              <td>Attach to the element you want to capture</td>
            </tr>
            <tr>
              <td>
                <code>takeScreenshot</code>
              </td>
              <td>
                <code>() =&gt; Promise</code>
              </td>
              <td>Triggers the screenshot capture</td>
            </tr>
            <tr>
              <td>
                <code>image</code>
              </td>
              <td>
                <code>string | null</code>
              </td>
              <td>The captured image as a data URL</td>
            </tr>
            <tr>
              <td>
                <code>status</code>
              </td>
              <td>
                <code>Status</code>
              </td>
              <td>Current state: idle | capturing | completed | error</td>
            </tr>
            <tr>
              <td>
                <code>isCapturing</code>
              </td>
              <td>
                <code>boolean</code>
              </td>
              <td>True while capturing is in progress</td>
            </tr>
            <tr>
              <td>
                <code>reset</code>
              </td>
              <td>
                <code>() =&gt; void</code>
              </td>
              <td>Resets the hook to initial state</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="content-section">
        <h2>Live Demo</h2>
        <div className="demo-container">
          <div className="demo-title">Try it out</div>

          <div ref={parentRef} className="screenshot-target">
            <h3 style={{ marginBottom: "0.5rem" }}>📸 Capture Me!</h3>
            <p>
              This entire card will be captured as an image when you click the
              button below.
            </p>
          </div>

          <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
            <button
              className="btn btn-primary"
              onClick={takeScreenshot}
              disabled={status === "capturing"}
            >
              {status === "capturing" ? "Capturing..." : "Take Screenshot"}
            </button>
            {image && (
              <button className="btn btn-secondary" onClick={reset}>
                Reset
              </button>
            )}
          </div>

          <div style={{ marginTop: "1rem" }}>
            <span className={`status-badge status-${status}`}>{status}</span>
          </div>

          {image && (
            <div className="screenshot-preview">
              <p
                style={{
                  color: "var(--text-secondary)",
                  marginBottom: "0.5rem",
                }}
              >
                Captured Image:
              </p>
              <img src={image} alt="Screenshot" />
            </div>
          )}
        </div>
      </section>

      <section className="content-section">
        <h2>Usage Example</h2>
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


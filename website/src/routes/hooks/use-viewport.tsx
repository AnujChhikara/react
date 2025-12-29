import { Link } from "react-router";
import { useViewport } from "react-use-viewport";
import CodeBlock from "../../components/CodeBlock";

export default function UseViewportPage() {
  const viewport = useViewport({ debounceMs: 100 });

  return (
    <div className="hook-page">
      <header className="hook-header">
        <Link to="/" className="back-link">
          ← Back to Hooks
        </Link>
        <h1 className="hook-title">useViewport</h1>
        <p className="hook-package">react-use-viewport</p>
        <p className="hook-description">
          A React hook for tracking viewport dimensions, breakpoints,
          orientation, and keyboard visibility in real-time with optional
          debounce support.
        </p>
      </header>

      <section className="content-section">
        <h2>Thought Process</h2>
        <p>
          Building responsive React applications often requires knowing the
          exact viewport dimensions—not just CSS media queries, but actual
          JavaScript values for calculations, animations, or conditional
          rendering.
        </p>
        <p>
          <strong>useViewport</strong> provides a unified API for all
          viewport-related information. It tracks dimensions, detects device
          type based on customizable breakpoints, monitors orientation changes,
          and even detects mobile keyboard visibility—something CSS alone can't
          handle.
        </p>
      </section>

      <section className="content-section">
        <h2>What It Does</h2>
        <p>This hook provides real-time access to:</p>
        <ul style={{ color: "var(--text-secondary)", marginLeft: "1.5rem" }}>
          <li>Viewport width and height (using VisualViewport API)</li>
          <li>Current breakpoint (mobile, tablet, desktop)</li>
          <li>Device type detection (isMobile, isTablet, isDesktop)</li>
          <li>Orientation (portrait/landscape)</li>
          <li>Keyboard visibility and height (for mobile)</li>
          <li>Viewport scale factor</li>
          <li>Optional debounce for performance</li>
        </ul>
      </section>

      <section className="content-section">
        <h2>API Reference</h2>
        <table className="api-table">
          <thead>
            <tr>
              <th>Property</th>
              <th>Type</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>width</code>
              </td>
              <td>
                <code>number</code>
              </td>
              <td>Viewport width in pixels</td>
            </tr>
            <tr>
              <td>
                <code>height</code>
              </td>
              <td>
                <code>number</code>
              </td>
              <td>Viewport height in pixels</td>
            </tr>
            <tr>
              <td>
                <code>breakpoint</code>
              </td>
              <td>
                <code>string</code>
              </td>
              <td>Current breakpoint name</td>
            </tr>
            <tr>
              <td>
                <code>isMobile</code>
              </td>
              <td>
                <code>boolean</code>
              </td>
              <td>True if viewport is mobile-sized</td>
            </tr>
            <tr>
              <td>
                <code>isTablet</code>
              </td>
              <td>
                <code>boolean</code>
              </td>
              <td>True if viewport is tablet-sized</td>
            </tr>
            <tr>
              <td>
                <code>isDesktop</code>
              </td>
              <td>
                <code>boolean</code>
              </td>
              <td>True if viewport is desktop-sized</td>
            </tr>
            <tr>
              <td>
                <code>orientation</code>
              </td>
              <td>
                <code>portrait | landscape</code>
              </td>
              <td>Current screen orientation</td>
            </tr>
            <tr>
              <td>
                <code>isKeyboardVisible</code>
              </td>
              <td>
                <code>boolean</code>
              </td>
              <td>True if mobile keyboard is open</td>
            </tr>
            <tr>
              <td>
                <code>keyboardHeight</code>
              </td>
              <td>
                <code>number</code>
              </td>
              <td>Height of keyboard when visible</td>
            </tr>
            <tr>
              <td>
                <code>scale</code>
              </td>
              <td>
                <code>number</code>
              </td>
              <td>Current zoom/scale level</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="content-section">
        <h2>Live Demo</h2>
        <div className="demo-container">
          <div className="demo-title">Current Viewport State</div>
          <p
            style={{
              color: "var(--text-secondary)",
              marginBottom: "1rem",
              fontSize: "0.9rem",
            }}
          >
            Resize your browser window to see these values update in real-time:
          </p>

          <div className="viewport-info">
            <div className="viewport-stat">
              <div className="viewport-stat-label">Width</div>
              <div className="viewport-stat-value">{viewport.width}px</div>
            </div>
            <div className="viewport-stat">
              <div className="viewport-stat-label">Height</div>
              <div className="viewport-stat-value">{viewport.height}px</div>
            </div>
            <div className="viewport-stat">
              <div className="viewport-stat-label">Breakpoint</div>
              <div className="viewport-stat-value">{viewport.breakpoint}</div>
            </div>
            <div className="viewport-stat">
              <div className="viewport-stat-label">Orientation</div>
              <div className="viewport-stat-value">{viewport.orientation}</div>
            </div>
            <div className="viewport-stat">
              <div className="viewport-stat-label">Scale</div>
              <div className="viewport-stat-value">
                {viewport.scale.toFixed(2)}
              </div>
            </div>
            <div className="viewport-stat">
              <div className="viewport-stat-label">Device</div>
              <div className="viewport-stat-value">
                {viewport.isMobile
                  ? "📱 Mobile"
                  : viewport.isTablet
                    ? "📱 Tablet"
                    : "🖥️ Desktop"}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h2>Usage Example</h2>
        <CodeBlock
          title="ResponsiveComponent.tsx"
          code={`import { useViewport } from "react-use-viewport";

function ResponsiveLayout() {
  const { 
    width, 
    height, 
    isMobile, 
    isTablet, 
    orientation,
    isKeyboardVisible 
  } = useViewport({
    debounceMs: 100,
    breakpoints: {
      mobile: 768,
      tablet: 1024,
    },
  });

  return (
    <div>
      <p>Viewport: {width} x {height}</p>
      
      {isMobile && <MobileNav />}
      {isTablet && <TabletNav />}
      {!isMobile && !isTablet && <DesktopNav />}
      
      {isKeyboardVisible && (
        <p>Keyboard is open!</p>
      )}
    </div>
  );
}`}
        />
      </section>
    </div>
  );
}


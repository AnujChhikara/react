import { Link } from "react-router";
import { useViewport } from "react-use-viewport";
import CodeBlock from "../../components/CodeBlock";

export default function UseViewportPage() {
  const viewport = useViewport({ debounceMs: 100 });

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
          useViewport
        </h1>
        <p className="text-base text-text-muted font-mono mb-4">
          react-use-viewport
        </p>
        <p className="text-lg text-text-secondary leading-relaxed">
          A React hook for tracking viewport dimensions, breakpoints,
          orientation, and keyboard visibility in real-time with optional
          debounce support.
        </p>
      </header>

      <section className="my-10">
        <h2 className="text-2xl font-semibold text-text-primary mb-4 flex items-center gap-3">
          <span className="w-1 h-6 bg-text-muted rounded-full"></span>
          Thought Process
        </h2>
        <p className="text-text-secondary leading-relaxed mb-4">
          Building responsive React applications often requires knowing the
          exact viewport dimensions—not just CSS media queries, but actual
          JavaScript values for calculations, animations, or conditional
          rendering.
        </p>
        <p className="text-text-secondary leading-relaxed">
          <strong className="text-text-primary">useViewport</strong> provides a unified API for all
          viewport-related information. It tracks dimensions, detects device
          type based on customizable breakpoints, monitors orientation changes,
          and even detects mobile keyboard visibility—something CSS alone can't
          handle.
        </p>
      </section>

      <section className="my-10">
        <h2 className="text-2xl font-semibold text-text-primary mb-4 flex items-center gap-3">
          <span className="w-1 h-6 bg-text-muted rounded-full"></span>
          What It Does
        </h2>
        <p className="text-text-secondary mb-4">This hook provides real-time access to:</p>
        <ul className="text-text-secondary ml-6 space-y-2 list-disc">
          <li>Viewport width and height (using VisualViewport API)</li>
          <li>Current breakpoint (mobile, tablet, desktop)</li>
          <li>Device type detection (isMobile, isTablet, isDesktop)</li>
          <li>Orientation (portrait/landscape)</li>
          <li>Keyboard visibility and height (for mobile)</li>
          <li>Viewport scale factor</li>
          <li>Optional debounce for performance</li>
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
                  Property
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
                    width
                  </code>
                </td>
                <td className="p-3 border-b border-border text-text-secondary">
                  <code className="bg-bg-tertiary px-2 py-1 rounded text-xs font-mono text-text-primary">
                    number
                  </code>
                </td>
                <td className="p-3 border-b border-border text-text-secondary">
                  Viewport width in pixels
                </td>
              </tr>
              <tr>
                <td className="p-3 border-b border-border text-text-secondary">
                  <code className="bg-bg-tertiary px-2 py-1 rounded text-xs font-mono text-text-primary">
                    height
                  </code>
                </td>
                <td className="p-3 border-b border-border text-text-secondary">
                  <code className="bg-bg-tertiary px-2 py-1 rounded text-xs font-mono text-text-primary">
                    number
                  </code>
                </td>
                <td className="p-3 border-b border-border text-text-secondary">
                  Viewport height in pixels
                </td>
              </tr>
              <tr>
                <td className="p-3 border-b border-border text-text-secondary">
                  <code className="bg-bg-tertiary px-2 py-1 rounded text-xs font-mono text-text-primary">
                    breakpoint
                  </code>
                </td>
                <td className="p-3 border-b border-border text-text-secondary">
                  <code className="bg-bg-tertiary px-2 py-1 rounded text-xs font-mono text-text-primary">
                    string
                  </code>
                </td>
                <td className="p-3 border-b border-border text-text-secondary">
                  Current breakpoint name
                </td>
              </tr>
              <tr>
                <td className="p-3 border-b border-border text-text-secondary">
                  <code className="bg-bg-tertiary px-2 py-1 rounded text-xs font-mono text-text-primary">
                    isMobile
                  </code>
                </td>
                <td className="p-3 border-b border-border text-text-secondary">
                  <code className="bg-bg-tertiary px-2 py-1 rounded text-xs font-mono text-text-primary">
                    boolean
                  </code>
                </td>
                <td className="p-3 border-b border-border text-text-secondary">
                  True if viewport is mobile-sized
                </td>
              </tr>
              <tr>
                <td className="p-3 border-b border-border text-text-secondary">
                  <code className="bg-bg-tertiary px-2 py-1 rounded text-xs font-mono text-text-primary">
                    isTablet
                  </code>
                </td>
                <td className="p-3 border-b border-border text-text-secondary">
                  <code className="bg-bg-tertiary px-2 py-1 rounded text-xs font-mono text-text-primary">
                    boolean
                  </code>
                </td>
                <td className="p-3 border-b border-border text-text-secondary">
                  True if viewport is tablet-sized
                </td>
              </tr>
              <tr>
                <td className="p-3 border-b border-border text-text-secondary">
                  <code className="bg-bg-tertiary px-2 py-1 rounded text-xs font-mono text-text-primary">
                    isDesktop
                  </code>
                </td>
                <td className="p-3 border-b border-border text-text-secondary">
                  <code className="bg-bg-tertiary px-2 py-1 rounded text-xs font-mono text-text-primary">
                    boolean
                  </code>
                </td>
                <td className="p-3 border-b border-border text-text-secondary">
                  True if viewport is desktop-sized
                </td>
              </tr>
              <tr>
                <td className="p-3 border-b border-border text-text-secondary">
                  <code className="bg-bg-tertiary px-2 py-1 rounded text-xs font-mono text-text-primary">
                    orientation
                  </code>
                </td>
                <td className="p-3 border-b border-border text-text-secondary">
                  <code className="bg-bg-tertiary px-2 py-1 rounded text-xs font-mono text-text-primary">
                    portrait | landscape
                  </code>
                </td>
                <td className="p-3 border-b border-border text-text-secondary">
                  Current screen orientation
                </td>
              </tr>
              <tr>
                <td className="p-3 border-b border-border text-text-secondary">
                  <code className="bg-bg-tertiary px-2 py-1 rounded text-xs font-mono text-text-primary">
                    isKeyboardVisible
                  </code>
                </td>
                <td className="p-3 border-b border-border text-text-secondary">
                  <code className="bg-bg-tertiary px-2 py-1 rounded text-xs font-mono text-text-primary">
                    boolean
                  </code>
                </td>
                <td className="p-3 border-b border-border text-text-secondary">
                  True if mobile keyboard is open
                </td>
              </tr>
              <tr>
                <td className="p-3 border-b border-border text-text-secondary">
                  <code className="bg-bg-tertiary px-2 py-1 rounded text-xs font-mono text-text-primary">
                    keyboardHeight
                  </code>
                </td>
                <td className="p-3 border-b border-border text-text-secondary">
                  <code className="bg-bg-tertiary px-2 py-1 rounded text-xs font-mono text-text-primary">
                    number
                  </code>
                </td>
                <td className="p-3 border-b border-border text-text-secondary">
                  Height of keyboard when visible
                </td>
              </tr>
              <tr>
                <td className="p-3 border-b border-border text-text-secondary">
                  <code className="bg-bg-tertiary px-2 py-1 rounded text-xs font-mono text-text-primary">
                    scale
                  </code>
                </td>
                <td className="p-3 border-b border-border text-text-secondary">
                  <code className="bg-bg-tertiary px-2 py-1 rounded text-xs font-mono text-text-primary">
                    number
                  </code>
                </td>
                <td className="p-3 border-b border-border text-text-secondary">
                  Current zoom/scale level
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
            Current Viewport State
          </div>
          <p className="text-text-secondary mb-4 text-sm">
            Resize your browser window to see these values update in real-time:
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-bg-tertiary p-4 rounded-md text-center">
              <div className="text-xs text-text-muted mb-1">Width</div>
              <div className="text-xl font-semibold text-text-primary font-mono">
                {viewport.width}px
              </div>
            </div>
            <div className="bg-bg-tertiary p-4 rounded-md text-center">
              <div className="text-xs text-text-muted mb-1">Height</div>
              <div className="text-xl font-semibold text-text-primary font-mono">
                {viewport.height}px
              </div>
            </div>
            <div className="bg-bg-tertiary p-4 rounded-md text-center">
              <div className="text-xs text-text-muted mb-1">Breakpoint</div>
              <div className="text-xl font-semibold text-text-primary font-mono">
                {viewport.breakpoint}
              </div>
            </div>
            <div className="bg-bg-tertiary p-4 rounded-md text-center">
              <div className="text-xs text-text-muted mb-1">Orientation</div>
              <div className="text-xl font-semibold text-text-primary font-mono">
                {viewport.orientation}
              </div>
            </div>
            <div className="bg-bg-tertiary p-4 rounded-md text-center">
              <div className="text-xs text-text-muted mb-1">Scale</div>
              <div className="text-xl font-semibold text-text-primary font-mono">
                {viewport.scale.toFixed(2)}
              </div>
            </div>
            <div className="bg-bg-tertiary p-4 rounded-md text-center">
              <div className="text-xs text-text-muted mb-1">Device</div>
              <div className="text-xl font-semibold text-text-primary font-mono">
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

      <section className="my-10">
        <h2 className="text-2xl font-semibold text-text-primary mb-4 flex items-center gap-3">
          <span className="w-1 h-6 bg-text-muted rounded-full"></span>
          Usage Example
        </h2>
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


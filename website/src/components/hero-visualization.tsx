import { motion } from "framer-motion"

export function HeroVisualization() {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, oklch(0.4 0 0) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Hook Flow Animation */}
      <svg width="400" height="400" viewBox="0 0 400 400" className="relative z-10">
        <defs>
          <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="oklch(0.4 0 0)" />
            <stop offset="50%" stopColor="oklch(0.8 0 0)" />
            <stop offset="100%" stopColor="oklch(0.4 0 0)" />
          </linearGradient>
        </defs>

        {/* Connection Lines */}
        <motion.path
          d="M 100 100 L 300 100 L 300 300 L 100 300 Z"
          fill="none"
          stroke="url(#line-grad)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />

        {/* Nodes */}
        {[
          { x: 100, y: 100, label: "useAuth" },
          { x: 300, y: 100, label: "useSWR" },
          { x: 300, y: 300, label: "useDebounce" },
          { x: 100, y: 300, label: "useTheme" },
        ].map((node, i) => (
          <motion.g key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.5 }}>
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="6"
              fill="oklch(0.1 0 0)"
              stroke="oklch(0.8 0 0)"
              strokeWidth="2"
              animate={{ r: [6, 8, 6] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
            <text
              x={node.x}
              y={node.y - 15}
              textAnchor="middle"
              className="fill-muted-foreground text-[10px] font-mono uppercase tracking-widest"
            >
              {node.label}
            </text>
          </motion.g>
        ))}

        {/* Center Reactive Core */}
        <motion.circle
          cx="200"
          cy="200"
          r="40"
          fill="none"
          stroke="oklch(0.3 0 0)"
          strokeWidth="1"
          strokeDasharray="4 4"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
      </svg>

      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-[100px]" />
    </div>
  )
}

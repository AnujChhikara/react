"use client";

import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cva } from "class-variance-authority";
import { cn } from "~/lib/utils";

const itemVariants = cva(
  "size-6.5 rounded-full p-1.5 text-muted-foreground transition-colors",
  {
    variants: {
      active: {
        true: "bg-accent text-accent-foreground",
        false: "text-muted-foreground hover:text-foreground",
      },
    },
  }
);

const full = [
  ["light", Sun],
  ["dark", Moon],
  ["system", Monitor],
] as const;

interface ThemeToggleProps {
  className?: string;
  mode?: "light-dark" | "light-dark-system";
}

export function ThemeToggle({
  className,
  mode = "light-dark-system",
}: ThemeToggleProps) {
  const { setTheme, theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const container = cn(
    "inline-flex items-center rounded-full border border-border-secondary p-1",
    className
  );

  if (mode === "light-dark") {
    const value = mounted ? resolvedTheme : null;
    return (
      <button
        className={container}
        aria-label="Toggle Theme"
        onClick={() => setTheme(value === "light" ? "dark" : "light")}
        data-theme-toggle=""
      >
        {full.map(([key, Icon]) => {
          if (key === "system") return null;
          return (
            <Icon
              key={key}
              fill="currentColor"
              className={cn(itemVariants({ active: value === key }), "size-4")}
            />
          );
        })}
      </button>
    );
  }

  const value = mounted ? theme : null;
  return (
    <div className={container} data-theme-toggle="">
      {full.map(([key, Icon]) => (
        <button
          key={key}
          aria-label={key}
          className={cn(itemVariants({ active: value === key }))}
          onClick={() => setTheme(key)}
        >
          <Icon className="size-full" fill="currentColor" />
        </button>
      ))}
    </div>
  );
}

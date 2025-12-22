import { useEffect, useState, useRef, useCallback } from "react";

export interface ViewportBreakpoints {
  [key: string]: number;
}

export interface UseViewportOptions {
  debounceMs?: number;
  breakpoints?: ViewportBreakpoints;
  keyboardThreshold?: number;
}

export interface ViewportInfo {
  width: number;
  height: number;
  isKeyboardVisible: boolean;
  keyboardHeight: number;
  orientation: "portrait" | "landscape";
  breakpoint: string;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  scale: number;
}

const DEFAULT_BREAKPOINTS: ViewportBreakpoints = {
  mobile: 768,
  tablet: 1024,
};

function getBreakpoint(
  width: number,
  breakpoints: ViewportBreakpoints
): string {
  const sorted = Object.entries(breakpoints).sort((a, b) => a[1] - b[1]);
  for (const [name, maxWidth] of sorted) {
    if (width < maxWidth) return name;
  }
  return "desktop";
}

export function useViewport(options?: UseViewportOptions): ViewportInfo {
  const {
    debounceMs = 0,
    breakpoints = DEFAULT_BREAKPOINTS,
    keyboardThreshold = 100,
  } = options ?? {};

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const getViewportState = useCallback((): ViewportInfo => {
    const visualViewport = window.visualViewport;
    const width = visualViewport?.width ?? window.innerWidth;
    const height = visualViewport?.height ?? window.innerHeight;
    const keyboardHeight = Math.max(0, window.innerHeight - height);
    const breakpoint = getBreakpoint(width, breakpoints);

    const isTouchDevice =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      breakpoint === "mobile";

    const isKeyboardVisible =
      isTouchDevice && keyboardHeight > keyboardThreshold;

    return {
      width,
      height,
      isKeyboardVisible,
      keyboardHeight: isTouchDevice ? keyboardHeight : 0,
      orientation: width > height ? "landscape" : "portrait",
      breakpoint,
      isMobile: breakpoint === "mobile",
      isTablet: breakpoint === "tablet",
      isDesktop: breakpoint === "desktop",
      scale: visualViewport?.scale ?? 1,
    };
  }, [breakpoints, keyboardThreshold]);

  const [viewport, setViewport] = useState<ViewportInfo>(getViewportState);

  useEffect(() => {
    const handleViewportChange = () => {
      if (debounceMs > 0) {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = setTimeout(() => {
          setViewport(getViewportState());
        }, debounceMs);
      } else {
        setViewport(getViewportState());
      }
    };

    const visualViewport = window.visualViewport;

    visualViewport?.addEventListener("resize", handleViewportChange);
    visualViewport?.addEventListener("scroll", handleViewportChange);

    window.addEventListener("resize", handleViewportChange);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      visualViewport?.removeEventListener("resize", handleViewportChange);
      visualViewport?.removeEventListener("scroll", handleViewportChange);
      window.removeEventListener("resize", handleViewportChange);
    };
  }, [debounceMs, getViewportState]);

  return viewport;
}

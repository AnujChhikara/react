import { useRef, useState, useCallback } from "react";
import { toPng, toJpeg } from "html-to-image";

type Status = "idle" | "capturing" | "completed" | "error";

interface UseScreenshotOptions {
  quality?: number;
  format?: "png" | "jpeg";
  backgroundColor?: string;
}

interface UseScreenshotReturn<T extends HTMLElement> {
  parentRef: React.RefObject<T | null>;
  status: Status;
  isCapturing: boolean;
  isCompleted: boolean;
  error: Error | null;
  image: string | null;
  takeScreenshot: () => Promise<string | null>;
  reset: () => void;
}

export default function useScreenshot<T extends HTMLElement = HTMLDivElement>(
  options: UseScreenshotOptions = {}
): UseScreenshotReturn<T> {
  const { quality = 1, format = "png", backgroundColor } = options;

  const parentRef = useRef<T | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [image, setImage] = useState<string | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const takeScreenshot = useCallback(async (): Promise<string | null> => {
    if (!parentRef.current) {
      const err = new Error(
        "No element referenced. Attach the parentRef to a DOM element."
      );
      setError(err);
      setStatus("error");
      return null;
    }

    try {
      setStatus("capturing");
      setError(null);

      const captureOptions = {
        quality,
        backgroundColor,
        cacheBust: true,
      };

      const dataUrl =
        format === "jpeg"
          ? await toJpeg(parentRef.current, captureOptions)
          : await toPng(parentRef.current, captureOptions);

      setImage(dataUrl);
      setStatus("completed");
      return dataUrl;
    } catch (err) {
      const error = err instanceof Error ? err : new Error("Screenshot failed");
      setError(error);
      setStatus("error");
      return null;
    }
  }, [quality, format, backgroundColor]);

  const reset = useCallback(() => {
    setStatus("idle");
    setImage(null);
    setError(null);
  }, []);

  return {
    parentRef,
    status,
    isCapturing: status === "capturing",
    isCompleted: status === "completed",
    error,
    image,
    takeScreenshot,
    reset,
  };
}

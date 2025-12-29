interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
}

export default function CodeBlock({ code, title }: CodeBlockProps) {
  return (
    <div className="bg-bg-tertiary border border-border rounded-lg overflow-hidden my-4">
      {title && (
        <div className="px-4 py-2 bg-bg-secondary border-b border-border text-xs text-text-secondary font-mono">
          {title}
        </div>
      )}
      <pre className="p-4 overflow-x-auto text-sm leading-relaxed m-0">
        <code className="font-mono text-text-primary">{code}</code>
      </pre>
    </div>
  );
}


interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
}

export default function CodeBlock({ code, title }: CodeBlockProps) {
  return (
    <div className="code-block">
      {title && <div className="code-block-title">{title}</div>}
      <pre className="code-block-pre">
        <code>{code}</code>
      </pre>
    </div>
  );
}


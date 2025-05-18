interface DividerBlockProps {
  content: {
    style: "solid" | "dashed" | "dotted";
    color: string;
    spacing: "small" | "medium" | "large";
  };
}

const DividerBlock = ({ content }: DividerBlockProps) => {
  const { style, color, spacing } = content;

  const spacingClasses = {
    small: "my-2",
    medium: "my-4",
    large: "my-6",
  };

  return (
    <div className={spacingClasses[spacing]}>
      <hr
        style={{
          borderStyle: style,
          borderColor: color,
        }}
      />
    </div>
  );
};

export default DividerBlock;

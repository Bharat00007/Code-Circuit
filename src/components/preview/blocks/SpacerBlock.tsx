interface SpacerBlockProps {
  content: {
    height: "small" | "medium" | "large";
  };
}

const SpacerBlock = ({ content }: SpacerBlockProps) => {
  const { height } = content;

  const heightClasses = {
    small: "h-4",
    medium: "h-8",
    large: "h-16",
  };

  return <div className={heightClasses[height]} />;
};

export default SpacerBlock;

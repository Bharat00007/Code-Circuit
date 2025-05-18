import { cn } from "@/lib/utils";

interface HeaderBlockProps {
  content: {
    text: string;
    alignment: "left" | "center" | "right";
    size: "small" | "medium" | "large";
  };
}

const HeaderBlock = ({ content }: HeaderBlockProps) => {
  const { text, alignment, size } = content;

  const alignmentClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  const sizeClasses = {
    small: "text-lg font-semibold",
    medium: "text-xl font-bold",
    large: "text-2xl font-bold",
  };

  return (
    <div className="mb-4">
      <h2
        className={cn(
          alignmentClasses[alignment],
          sizeClasses[size],
          "text-gray-900",
        )}
      >
        {text}
      </h2>
    </div>
  );
};

export default HeaderBlock;

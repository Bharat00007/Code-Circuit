import { cn } from "@/lib/utils";

interface TextBlockProps {
  content: {
    text: string;
    fontFamily?: string;
    fontSize?: string;
    textColor?: string;
    alignment?: "left" | "center" | "right";
    isBold?: boolean;
    isItalic?: boolean;
  };
}

const TextBlock = ({ content }: TextBlockProps) => {
  const { text, fontFamily, fontSize, textColor, alignment, isBold, isItalic } =
    content;

  return (
    <div className="mb-4">
      <p
        className={cn(
          "whitespace-pre-wrap",
          alignment === "center" && "text-center",
          alignment === "right" && "text-right",
        )}
        style={{
          fontFamily: fontFamily || "inherit",
          fontSize: fontSize || "inherit",
          color: textColor || "inherit",
          fontWeight: isBold ? "bold" : "normal",
          fontStyle: isItalic ? "italic" : "normal",
        }}
      >
        {text}
      </p>
    </div>
  );
};

export default TextBlock;

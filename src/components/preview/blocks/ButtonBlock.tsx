import { cn } from "@/lib/utils";

interface ButtonBlockProps {
  content: {
    text: string;
    url: string;
    backgroundColor: string;
    textColor: string;
    alignment: "left" | "center" | "right";
  };
}

const ButtonBlock = ({ content }: ButtonBlockProps) => {
  const { text, url, backgroundColor, textColor, alignment } = content;

  const alignmentClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <div className={cn("mb-4", alignmentClasses[alignment])}>
      <a
        href={url}
        className="inline-block px-6 py-2 rounded text-center"
        style={{ backgroundColor, color: textColor }}
      >
        {text}
      </a>
    </div>
  );
};

export default ButtonBlock;

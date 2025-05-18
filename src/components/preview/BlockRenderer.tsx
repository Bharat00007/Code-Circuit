import { NewsletterBlock } from "@/types/newsletter";
import HeaderBlock from "./blocks/HeaderBlock";
import TextBlock from "./blocks/TextBlock";
import ImageBlock from "./blocks/ImageBlock";
import ButtonBlock from "./blocks/ButtonBlock";
import DividerBlock from "./blocks/DividerBlock";
import SpacerBlock from "./blocks/SpacerBlock";
import { motion } from "framer-motion";

interface BlockRendererProps {
  block: NewsletterBlock;
  previewMode?: "desktop" | "mobile";
  index?: number;
}

const BlockRenderer = ({
  block,
  previewMode = "desktop",
  index = 0,
}: BlockRendererProps) => {
  // Define animations based on block type
  const getAnimationVariants = () => {
    // Default animation for most blocks
    const defaultVariants = {
      initial: {
        opacity: 0,
        y: 15,
      },
      animate: {
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          damping: 12,
          stiffness: 100,
          delay: index * 0.08,
        },
      },
    };

    // Specific animations for different block types
    switch (block.type) {
      case "header":
        return {
          initial: {
            opacity: 0,
            y: 0,
            x: -20,
          },
          animate: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
              type: "spring",
              damping: 12,
              stiffness: 100,
              delay: index * 0.08,
            },
          },
        };

      case "image":
        return {
          initial: {
            opacity: 0,
            y: 0,
            scale: 0.95,
          },
          animate: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
              type: "spring",
              damping: 12,
              stiffness: 100,
              delay: index * 0.08,
            },
          },
        };

      case "button":
        return {
          initial: {
            opacity: 0,
            y: 15,
            scale: 0.9,
          },
          animate: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
              type: "spring",
              damping: 8,
              stiffness: 100,
              delay: index * 0.08,
            },
          },
        };

      default:
        return defaultVariants;
    }
  };

  const animationVariants = getAnimationVariants();

  // Render the appropriate block component based on type
  const renderBlock = () => {
    switch (block.type) {
      case "header":
        return <HeaderBlock content={block.content} />;
      case "text":
        return <TextBlock content={block.content} />;
      case "image":
        return <ImageBlock content={block.content} />;
      case "button":
        return <ButtonBlock content={block.content} />;
      case "divider":
        return <DividerBlock content={block.content} />;
      case "spacer":
        return <SpacerBlock content={block.content} />;
      default:
        return <div>Unknown block type: {block.type}</div>;
    }
  };

  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-10%" }}
      variants={animationVariants}
      className="transition-all duration-300"
      whileHover={{
        boxShadow: "0 0 0 2px rgba(155, 135, 245, 0.2)",
        scale: 1.01,
      }}
      style={{ borderRadius: "4px" }}
    >
      {renderBlock()}
    </motion.div>
  );
};

export default BlockRenderer;

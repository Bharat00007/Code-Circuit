import { useState } from "react";
import { NewsletterBlock } from "@/types/newsletter";
import HeaderEditor from "./editors/HeaderEditor";
import TextEditor from "./editors/TextEditor";
import ImageEditor from "./editors/ImageEditor";
import ButtonEditor from "./editors/ButtonEditor";
import DividerEditor from "./editors/DividerEditor";
import SpacerEditor from "./editors/SpacerEditor";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

interface BlockEditorProps {
  block: NewsletterBlock;
  updateBlock: (id: string, content: any) => void;
  onClose: () => void;
  isDarkMode?: boolean;
}

const BlockEditor = ({
  block,
  updateBlock,
  onClose,
  isDarkMode = false,
}: BlockEditorProps) => {
  const [content, setContent] = useState({ ...block.content });

  const handleChange = (value: any) => {
    setContent({ ...content, ...value });
  };

  const handleSave = () => {
    updateBlock(block.id, content);
    onClose();
  };

  const getEditor = () => {
    switch (block.type) {
      case "header":
        return <HeaderEditor content={content} onChange={handleChange} />;
      case "text":
        return <TextEditor content={content} onChange={handleChange} />;
      case "image":
        return <ImageEditor content={content} onChange={handleChange} />;
      case "button":
        return <ButtonEditor content={content} onChange={handleChange} />;
      case "divider":
        return <DividerEditor content={content} onChange={handleChange} />;
      case "spacer":
        return <SpacerEditor content={content} onChange={handleChange} />;
      default:
        return <div>No editor available for this block type</div>;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="space-y-4"
    >
      {getEditor()}
      <div className="flex justify-end">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            onClick={handleSave}
            className="bg-lotus-primary hover:bg-lotus-primary/90 font-lotus text-white"
          >
            <Check className="h-4 w-4 mr-2" />
            Save
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default BlockEditor;

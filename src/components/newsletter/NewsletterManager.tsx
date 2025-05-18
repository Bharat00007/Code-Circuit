import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { BlockType, NewsletterBlock } from "@/types/newsletter";
import { generateRandomBlock } from "@/lib/content-generator";

interface NewsletterManagerProps {
  blocks: NewsletterBlock[];
  setBlocks: React.Dispatch<React.SetStateAction<NewsletterBlock[]>>;
  setShowTemplates: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NewsletterManager = ({
  blocks,
  setBlocks,
  setShowTemplates,
}: NewsletterManagerProps) => {
  const [activeTemplate, setActiveTemplate] = useState<string | null>(null);

  // Add a new block to the newsletter
  const addBlock = (type: BlockType, content?: any) => {
    // Use provided content or generate random content
    const blockContent = content || generateRandomBlock(type).content;

    const newBlock: NewsletterBlock = {
      id: uuidv4(),
      type,
      content: blockContent,
    };

    setBlocks((prevBlocks) => [...prevBlocks, newBlock]);
  };

  // Update an existing block in the newsletter
  const updateBlock = (id: string, content: any) => {
    setBlocks((prevBlocks) =>
      prevBlocks.map((block) =>
        block.id === id ? { ...block, content } : block,
      ),
    );
  };

  // Remove a block from the newsletter
  const removeBlock = (id: string) => {
    setBlocks((prevBlocks) => prevBlocks.filter((block) => block.id !== id));
  };

  // Reorder blocks in the newsletter
  const reorderBlocks = (startIndex: number, endIndex: number) => {
    setBlocks((prevBlocks) => {
      const result = Array.from(prevBlocks);
      const [removed] = result.splice(startIndex, 1);
      result.splice(endIndex, 0, removed);
      return result;
    });
  };

  // Load a template into the newsletter
  const loadTemplate = (
    templateId: string,
    templateBlocks: NewsletterBlock[],
  ) => {
    // Create new blocks with unique IDs
    const newBlocks = templateBlocks.map((block) => ({
      ...block,
      id: uuidv4(),
    }));

    setActiveTemplate(templateId);
    setBlocks(newBlocks);
    setShowTemplates(false);
  };

  return {
    activeTemplate,
    addBlock,
    updateBlock,
    removeBlock,
    reorderBlocks,
    loadTemplate,
  };
};

import { useState } from "react";
import { NewsletterBlock } from "@/types/newsletter";
import { Draggable } from "@hello-pangea/dnd";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Grip, Trash2, Settings } from "lucide-react";
import BlockEditor from "./BlockEditor";
import { motion } from "framer-motion";

interface BlockItemProps {
  block: NewsletterBlock;
  index: number;
  updateBlock: (id: string, content: any) => void;
  removeBlock: (id: string) => void;
  isDarkMode?: boolean;
}

const BlockItem = ({
  block,
  index,
  updateBlock,
  removeBlock,
  isDarkMode = false,
}: BlockItemProps) => {
  const [isEditing, setIsEditing] = useState(false);

  const getBlockTypeLabel = (type: string): string => {
    switch (type) {
      case "header":
        return "Heading";
      case "text":
        return "Text";
      case "image":
        return "Image";
      case "button":
        return "Button";
      case "divider":
        return "Divider";
      case "spacer":
        return "Spacer";
      default:
        return type.charAt(0).toUpperCase() + type.slice(1);
    }
  };

  const getBlockPreview = (block: NewsletterBlock): string => {
    switch (block.type) {
      case "header":
        return block.content.text;
      case "text":
        return block.content.text.length > 50
          ? `${block.content.text.substring(0, 50)}...`
          : block.content.text;
      case "image":
        return `Image: ${block.content.alt || "No description"}`;
      case "button":
        return `Button: ${block.content.text}`;
      case "divider":
        return "Horizontal divider";
      case "spacer":
        return `Spacer (${block.content.height})`;
      default:
        return "Block preview";
    }
  };

  return (
    <Draggable draggableId={block.id} index={index}>
      {(provided, snapshot) => (
        <motion.div
          ref={provided.innerRef}
          {...provided.draggableProps}
          className={`transition-all ${snapshot.isDragging ? "drag-item-moving z-10" : ""}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10, height: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <Card
            className={`border ${isDarkMode ? "bg-gray-700 border-gray-600" : "bg-white border-gray-200"} shadow-sm transition-shadow hover:shadow-md`}
          >
            <CardHeader
              className={`p-3 ${isDarkMode ? "bg-gray-800" : "bg-gray-50"} flex flex-row items-center justify-between border-b ${isDarkMode ? "border-gray-700" : "border-gray-200"}`}
            >
              <div className="flex items-center space-x-3">
                <div
                  {...provided.dragHandleProps}
                  className={`drag-handle p-1 rounded ${isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-200"}`}
                >
                  <Grip
                    className={`h-4 w-4 ${isDarkMode ? "text-gray-300" : "text-gray-400"}`}
                  />
                </div>
                <p
                  className={`font-medium text-sm ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}
                >
                  {getBlockTypeLabel(block.type)}
                </p>
              </div>
              <div className="flex space-x-2">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsEditing(!isEditing)}
                    className={`h-8 w-8 p-0 ${isDarkMode ? "text-gray-200 hover:bg-gray-700" : ""}`}
                  >
                    <Settings className="h-4 w-4" />
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeBlock(block.id)}
                    className={`h-8 w-8 p-0 text-red-500 hover:text-red-600 ${isDarkMode ? "hover:bg-gray-700" : ""}`}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </motion.div>
              </div>
            </CardHeader>
            <CardContent className="p-3">
              {isEditing ? (
                <BlockEditor
                  block={block}
                  updateBlock={updateBlock}
                  onClose={() => setIsEditing(false)}
                  isDarkMode={isDarkMode}
                />
              ) : (
                <motion.div
                  whileHover={{
                    backgroundColor: isDarkMode
                      ? "rgba(75, 85, 99, 0.2)"
                      : "rgba(249, 250, 251, 1)",
                  }}
                  className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"} cursor-pointer py-1 px-2 rounded transition-all duration-200`}
                  onClick={() => setIsEditing(true)}
                >
                  {getBlockPreview(block)}
                </motion.div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      )}
    </Draggable>
  );
};

export default BlockItem;

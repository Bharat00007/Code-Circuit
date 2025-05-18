import { useState, useEffect } from "react";
import {
  BlockType,
  NewsletterBlock,
  NewsletterTemplate,
} from "@/types/newsletter";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import BlockItem from "./BlockItem";
import AddBlockButton from "./AddBlockButton";
import TemplateGallery from "./TemplateGallery";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Save, Bookmark, Wand } from "lucide-react";
import { SavedTemplatesDrawer } from "../newsletter/SavedTemplatesDrawer";
import { Button } from "../ui/button";
import { generateNewsletterStructure } from "@/lib/content-generator";
import { useToast } from "@/components/ui/use-toast";
import { HintTooltip } from "../ui/intro-tour";

interface EditorPanelProps {
  blocks: NewsletterBlock[];
  addBlock: (type: BlockType, content?: any) => void;
  updateBlock: (id: string, content: any) => void;
  removeBlock: (id: string) => void;
  reorderBlocks: (startIndex: number, endIndex: number) => void;
  showTemplates: boolean;
  setShowTemplates: (show: boolean) => void;
  loadTemplate: (templateIndex: number) => void;
  templates: NewsletterTemplate[];
  activeTemplate: number;
}

const EditorPanel = ({
  blocks,
  addBlock,
  updateBlock,
  removeBlock,
  reorderBlocks,
  showTemplates,
  setShowTemplates,
  loadTemplate,
  templates,
  activeTemplate,
}: EditorPanelProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [showSaved, setShowSaved] = useState(false);
  const [dropHighlight, setDropHighlight] = useState(false);
  const { toast } = useToast();

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = (result: any) => {
    setIsDragging(false);
    setDropHighlight(false);
    if (!result.destination) return;
    reorderBlocks(result.source.index, result.destination.index);
  };

  const handleDragUpdate = (update: any) => {
    setDropHighlight(!!update.destination);
  };

  const handleLoadSavedTemplate = (savedBlocks: NewsletterBlock[]) => {
    // Load the saved template blocks
    const templateIndex = -1; // Custom template
    loadTemplate(templateIndex);
    // Need to update blocks directly here
    // This should be handled in NewsletterManager
  };

  const handleGenerateStructure = () => {
    if (blocks.length > 0) {
      toast({
        title: "Newsletter not empty",
        description:
          "Please clear your newsletter first before generating a complete structure.",
        variant: "destructive",
      });
      return;
    }

    // Generate a complete newsletter structure
    const structure = generateNewsletterStructure();

    // Add each block type in sequence with a delay
    structure.forEach((block, index) => {
      setTimeout(() => {
        if (block.type) {
          addBlock(block.type as BlockType, block.content);
        }
      }, index * 300);
    });

    toast({
      title: "Magic Structure Generated!",
      description: "A complete newsletter structure has been created for you.",
      className:
        "font-creative bg-gradient-to-r from-lotus-primary to-lotus-secondary text-white",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full lg:w-1/2 bg-white rounded-xl shadow-lg p-5 min-h-[600px] flex flex-col hover-glow"
      data-tour="editor-panel"
    >
      <AnimatePresence mode="wait">
        {showTemplates ? (
          <motion.div
            key="templates"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-full"
            data-tour="templates"
          >
            <TemplateGallery
              templates={templates}
              loadTemplate={loadTemplate}
              activeTemplate={activeTemplate}
              onClose={() => setShowTemplates(false)}
            />
          </motion.div>
        ) : (
          <motion.div
            key="editor"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-full flex flex-col"
          >
            <div className="flex justify-between items-center mb-5">
              <h2 className="text-xl font-lotus lotus-text-gradient flex items-center">
                Editor{" "}
                <Sparkles className="ml-2 h-5 w-5 text-lotus-primary animate-pulse-slow" />
              </h2>
              <div className="flex items-center space-x-2">
                <HintTooltip content="Generate a complete newsletter with one click">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    data-tour="magic-structure"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleGenerateStructure}
                      className="text-sm flex items-center border-lotus-light hover:bg-gradient-to-r hover:from-lotus-primary/10 hover:to-lotus-secondary/10"
                    >
                      <Wand className="h-4 w-4 mr-1 text-lotus-primary" />
                      <span className="font-creative">Magic Structure</span>
                    </Button>
                  </motion.div>
                </HintTooltip>

                <HintTooltip content="View your saved templates">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    data-tour="saved-designs"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-sm flex items-center border-lotus-light border hover:bg-gradient-to-r hover:from-lotus-primary/10 hover:to-lotus-secondary/10"
                      onClick={() => setShowSaved(true)}
                    >
                      <Bookmark className="h-4 w-4 mr-1 text-lotus-primary" />
                      <span className="font-creative">Saved</span>
                    </Button>
                  </motion.div>
                </HintTooltip>
                <HintTooltip content="Add a new content block">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    data-tour="add-block"
                  >
                    <AddBlockButton onAddBlock={addBlock} />
                  </motion.div>
                </HintTooltip>
              </div>
            </div>
            <div className="flex-1 overflow-auto">
              {blocks.length === 0 ? (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className={`flex flex-col items-center justify-center h-full text-lotus-dark/60 ${isDragging ? "drop-target rounded-lg" : ""} ${dropHighlight ? "drop-target active" : ""}`}
                >
                  <div className="w-32 h-32 mb-6 relative">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute inset-0 bg-gradient-to-br from-lotus-primary/30 via-lotus-secondary/30 to-lotus-light/30 rounded-full"
                    ></motion.div>
                    <motion.div
                      animate={{
                        scale: [1, 1.15, 1],
                        opacity: [0.3, 0.4, 0.3],
                      }}
                      transition={{
                        duration: 3.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.3,
                      }}
                      className="absolute inset-2 bg-gradient-to-br from-lotus-primary/40 to-lotus-secondary/40 rounded-full"
                    ></motion.div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        animate={{ y: [0, -8, 0] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <Sparkles className="h-12 w-12 text-lotus-primary" />
                      </motion.div>
                    </div>
                  </div>
                  <p className="mb-4 text-lg font-creative">
                    Your newsletter is empty
                  </p>
                  <p className="mb-6 text-sm max-w-xs text-center">
                    Add blocks to start building your beautiful newsletter
                  </p>
                  <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        variant="default"
                        onClick={() => setShowTemplates(true)}
                        className="bg-gradient-to-r from-lotus-primary to-lotus-secondary hover:from-lotus-secondary hover:to-lotus-primary text-white font-creative"
                      >
                        Choose a Template
                      </Button>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        variant="outline"
                        onClick={handleGenerateStructure}
                        className="font-creative border-lotus-light"
                      >
                        <Wand className="h-4 w-4 mr-1" />
                        Magic Structure
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>
              ) : (
                <DragDropContext
                  onDragStart={handleDragStart}
                  onDragEnd={handleDragEnd}
                  onDragUpdate={handleDragUpdate}
                >
                  <Droppable droppableId="newsletter-blocks">
                    {(provided, snapshot) => (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className={`space-y-4 transition-all ${snapshot.isDraggingOver ? "drop-target active p-3 rounded-lg" : ""}`}
                      >
                        <AnimatePresence mode="popLayout">
                          {blocks.map((block, index) => (
                            <BlockItem
                              key={block.id}
                              block={block}
                              index={index}
                              updateBlock={updateBlock}
                              removeBlock={removeBlock}
                            />
                          ))}
                        </AnimatePresence>
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                </DragDropContext>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Saved Templates Drawer */}
      <SavedTemplatesDrawer
        isOpen={showSaved}
        onClose={() => setShowSaved(false)}
        currentBlocks={blocks}
        onLoadTemplate={handleLoadSavedTemplate}
      />
    </motion.div>
  );
};

export default EditorPanel;

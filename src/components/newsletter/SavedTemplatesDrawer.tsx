import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { X, Save, Download, Trash2, Check } from "lucide-react";
import { NewsletterBlock } from "@/types/newsletter";
import { useToast } from "@/components/ui/use-toast";

interface SavedTemplatesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  currentBlocks: NewsletterBlock[];
  onLoadTemplate: (blocks: NewsletterBlock[]) => void;
}

export const SavedTemplatesDrawer = ({
  isOpen,
  onClose,
  currentBlocks,
  onLoadTemplate,
}: SavedTemplatesDrawerProps) => {
  const [savedTemplates, setSavedTemplates] = useState<
    { name: string; blocks: NewsletterBlock[] }[]
  >([]);
  const [templateName, setTemplateName] = useState("");
  const [isNaming, setIsNaming] = useState(false);
  const { toast } = useToast();

  // Load templates from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("saved-newsletter-templates");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setSavedTemplates(parsed);
      } catch (e) {
        console.error("Error parsing saved templates", e);
      }
    }
  }, [isOpen]);

  const saveCurrentTemplate = () => {
    if (currentBlocks.length === 0) {
      toast({
        title: "Cannot save empty template",
        description: "Add some blocks to your newsletter first!",
        variant: "destructive",
      });
      return;
    }

    setIsNaming(true);
  };

  const handleSaveConfirm = () => {
    if (!templateName.trim()) {
      toast({
        title: "Template name required",
        description: "Please enter a name for your template",
        variant: "destructive",
      });
      return;
    }

    const newTemplate = {
      name: templateName,
      blocks: currentBlocks,
      savedAt: new Date().toISOString(),
    };

    const newTemplates = [...savedTemplates, newTemplate];
    setSavedTemplates(newTemplates);
    localStorage.setItem(
      "saved-newsletter-templates",
      JSON.stringify(newTemplates),
    );

    setTemplateName("");
    setIsNaming(false);

    toast({
      title: "Template saved!",
      description: `Template "${templateName}" has been saved.`,
      action: <Check className="text-green-500 h-4 w-4" />,
    });
  };

  const handleDeleteTemplate = (index: number) => {
    const newTemplates = [...savedTemplates];
    newTemplates.splice(index, 1);
    setSavedTemplates(newTemplates);
    localStorage.setItem(
      "saved-newsletter-templates",
      JSON.stringify(newTemplates),
    );

    toast({
      title: "Template deleted",
      description: "The template has been removed from your saved templates.",
    });
  };

  const handleLoadTemplate = (template: {
    name: string;
    blocks: NewsletterBlock[];
  }) => {
    onLoadTemplate(template.blocks);
    onClose();

    toast({
      title: "Template loaded",
      description: `Template "${template.name}" has been loaded.`,
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex justify-end"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <motion.div
            className="w-full max-w-md bg-white rounded-l-2xl shadow-2xl overflow-hidden flex flex-col"
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
          >
            <div className="p-4 bg-lotus-subtle flex items-center justify-between border-b">
              <div className="flex items-center space-x-2">
                <Save className="h-5 w-5 text-lotus-primary" />
                <h2 className="text-xl font-lotus lotus-text-gradient">
                  Saved Templates
                </h2>
              </div>
              <Button
                size="sm"
                variant="ghost"
                className="rounded-full hover:bg-lotus-light/20"
                onClick={onClose}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            <div className="p-4 bg-white border-b flex justify-between items-center">
              {isNaming ? (
                <div className="flex w-full space-x-2">
                  <input
                    type="text"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lotus-primary"
                    placeholder="Template name..."
                    value={templateName}
                    onChange={(e) => setTemplateName(e.target.value)}
                    autoFocus
                  />
                  <Button
                    size="sm"
                    variant="default"
                    className="bg-lotus-primary hover:bg-lotus-secondary"
                    onClick={handleSaveConfirm}
                  >
                    Save
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => {
                      setIsNaming(false);
                      setTemplateName("");
                    }}
                  >
                    Cancel
                  </Button>
                </div>
              ) : (
                <>
                  <p className="text-sm text-gray-600">
                    {savedTemplates.length} saved template
                    {savedTemplates.length !== 1 ? "s" : ""}
                  </p>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-lotus-primary text-lotus-primary hover:bg-lotus-light/20"
                    onClick={saveCurrentTemplate}
                  >
                    <Save className="h-4 w-4 mr-1" />
                    Save Current Design
                  </Button>
                </>
              )}
            </div>

            <ScrollArea className="flex-1 p-4">
              {savedTemplates.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-64 text-center">
                  <motion.div
                    animate={{
                      scale: [1, 1.05, 1],
                      rotate: [0, 2, -2, 0],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 5,
                      ease: "easeInOut",
                    }}
                    className="w-20 h-20 mb-4 rounded-full bg-gradient-to-br from-lotus-light/50 to-lotus-primary/20 flex items-center justify-center"
                  >
                    <Save className="h-10 w-10 text-lotus-primary/70" />
                  </motion.div>
                  <p className="text-lg mb-2 font-creative text-lotus-dark">
                    No saved templates yet
                  </p>
                  <p className="text-sm text-lotus-dark/60 max-w-xs px-8">
                    Create beautiful newsletters and save them as templates for
                    later use
                  </p>
                </div>
              ) : (
                <div className="grid gap-4">
                  {savedTemplates.map((template, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ y: -2, scale: 1.01 }}
                      className="relative"
                    >
                      <Card className="overflow-hidden">
                        <CardContent className="p-0">
                          <div className="p-3 bg-lotus-subtle/30">
                            <div className="flex justify-between items-center">
                              <p className="font-medium font-lotus text-lotus-dark">
                                {template.name}
                              </p>
                              <div className="flex space-x-1">
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  className="h-7 w-7 p-0 text-lotus-primary hover:text-lotus-secondary hover:bg-lotus-light/10"
                                  onClick={() => handleLoadTemplate(template)}
                                >
                                  <Download className="h-3.5 w-3.5" />
                                </Button>
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  className="h-7 w-7 p-0 text-red-400 hover:text-red-500 hover:bg-red-50"
                                  onClick={() => handleDeleteTemplate(index)}
                                >
                                  <Trash2 className="h-3.5 w-3.5" />
                                </Button>
                              </div>
                            </div>
                          </div>
                          <div
                            className="p-3 cursor-pointer"
                            onClick={() => handleLoadTemplate(template)}
                          >
                            <div className="text-xs text-gray-500 mb-2">
                              {template.blocks.length} block
                              {template.blocks.length !== 1 ? "s" : ""}
                            </div>
                            <div className="max-h-24 overflow-hidden bg-gray-50 rounded-md p-2 text-left">
                              {template.blocks.slice(0, 2).map((block, idx) => (
                                <div
                                  key={idx}
                                  className="text-xs text-gray-600 truncate"
                                >
                                  {block.type === "header"
                                    ? `Heading: ${block.content.text.substring(0, 30)}${block.content.text.length > 30 ? "..." : ""}`
                                    : block.type === "text"
                                      ? `Text: ${block.content.text.substring(0, 30)}${block.content.text.length > 30 ? "..." : ""}`
                                      : block.type === "image"
                                        ? `Image: ${block.content.alt || "No description"}`
                                        : block.type === "button"
                                          ? `Button: ${block.content.text}`
                                          : block.type}
                                </div>
                              ))}
                              {template.blocks.length > 2 && (
                                <div className="text-xs text-gray-400 mt-1">
                                  + {template.blocks.length - 2} more blocks
                                </div>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              )}
            </ScrollArea>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

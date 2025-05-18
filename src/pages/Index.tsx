import { useState, useEffect } from "react";
import EditorPanel from "@/components/editor/EditorPanel";
import PreviewPanel from "@/components/preview/PreviewPanel";
import Header from "@/components/layout/Header";
import { NewsletterBlock } from "@/types/newsletter";
import { newsletterTemplates } from "@/data/templates";
import { NewsletterManager } from "@/components/newsletter/NewsletterManager";
import { useDocumentOperations } from "@/components/newsletter/DocumentOperations";
import { AnimatePresence, motion } from "framer-motion";
import { IntroTour } from "@/components/ui/intro-tour";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [blocks, setBlocks] = useState<NewsletterBlock[]>([]);
  const [showTemplates, setShowTemplates] = useState(true);
  const [showTour, setShowTour] = useState(false);
  const [firstVisit, setFirstVisit] = useState(false);

  // Check if this is the user's first visit
  useEffect(() => {
    const hasVisitedBefore = localStorage.getItem("tour-completed");
    if (!hasVisitedBefore) {
      setFirstVisit(true);
      setShowTour(true);
    }
  }, []);

  // Use the newsletter manager for block operations
  const {
    activeTemplate,
    addBlock,
    updateBlock,
    removeBlock,
    reorderBlocks,
    loadTemplate,
  } = NewsletterManager({ blocks, setBlocks, setShowTemplates });

  // Enhanced add block function that accepts content
  const enhancedAddBlock = (type: any, content?: any) => {
    // Pass the content to the original addBlock function
    addBlock(type, content);
  };

  // Use document operations for saving, clearing, and exporting
  const { clearNewsletter, saveNewsletter, exportToPdf } =
    useDocumentOperations(blocks);

  // Function to load a template that adapts the EditorPanel's expected format to NewsletterManager's format
  const handleLoadTemplate = (templateIndex: number) => {
    if (templateIndex >= 0 && templateIndex < newsletterTemplates.length) {
      const template = newsletterTemplates[templateIndex];
      loadTemplate(template.id, template.blocks);
    }
  };

  return (
    <motion.div
      className="min-h-screen bg-lotus-subtle/30 flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Header
        onClear={() => clearNewsletter(() => setBlocks([]))}
        onShowTemplates={() => setShowTemplates(true)}
        blocks={blocks}
        onSave={saveNewsletter}
        onExportPdf={exportToPdf}
      />

      <AnimatePresence>
        <motion.div
          className="flex flex-col lg:flex-row flex-1 p-4 gap-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.2,
            type: "spring",
            stiffness: 100,
            damping: 15,
          }}
        >
          <EditorPanel
            blocks={blocks}
            addBlock={enhancedAddBlock}
            updateBlock={updateBlock}
            removeBlock={removeBlock}
            reorderBlocks={reorderBlocks}
            showTemplates={showTemplates}
            setShowTemplates={setShowTemplates}
            loadTemplate={handleLoadTemplate}
            templates={newsletterTemplates}
            activeTemplate={
              typeof activeTemplate === "number" ? activeTemplate : -1
            }
          />
          <PreviewPanel blocks={blocks} />
        </motion.div>
      </AnimatePresence>

      {/* Intro Tour */}
      {showTour && (
        <IntroTour
          onClose={() => setShowTour(false)}
          onComplete={() => setShowTour(false)}
        />
      )}

      {/* First-time welcome message */}
      {firstVisit && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-6 right-6 bg-white p-4 rounded-lg shadow-lg border border-lotus-light/30 max-w-sm z-50"
        >
          <h3 className="font-creative text-lotus-primary text-lg mb-2">
            Welcome to the Newsletter Studio!
          </h3>
          <p className="text-sm text-lotus-dark/80 mb-4">
            Take a quick tour to discover all the features of this powerful
            newsletter builder.
          </p>
          <div className="flex justify-end space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setFirstVisit(false)}
            >
              Skip
            </Button>
            <Button
              size="sm"
              onClick={() => {
                setFirstVisit(false);
                setShowTour(true);
              }}
              className="bg-lotus-primary hover:bg-lotus-secondary"
            >
              Start Tour
            </Button>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Index;

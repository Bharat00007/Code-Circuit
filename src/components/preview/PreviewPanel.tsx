import { useState } from "react";
import { NewsletterBlock } from "@/types/newsletter";
import BlockRenderer from "./BlockRenderer";
import { Button } from "@/components/ui/button";
import { Monitor, Smartphone, Eye, Palette } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { HintTooltip } from "../ui/intro-tour";

interface PreviewPanelProps {
  blocks: NewsletterBlock[];
}

const PreviewPanel = ({ blocks }: PreviewPanelProps) => {
  const [previewMode, setPreviewMode] = useState<"desktop" | "mobile">(
    "desktop",
  );
  const [bgVariant, setBgVariant] = useState<number>(0);

  // Enhanced background options
  const backgroundStyles = [
    "bg-white", // Original white
    "bg-[#f9f6ef]", // Soft cream
    "bg-gradient-to-b from-white to-[#f8f4ea]", // Subtle gradient
    "bg-[#fbfaf7] bg-opacity-90 backdrop-blur-sm", // Frosted
    "bg-[#fcfbf8] bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]", // Textured
    "bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef]", // Cool gradient
    "bg-gradient-to-br from-[#fff8f0] to-[#fff0e2]", // Warm gradient
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="w-full lg:w-1/2 bg-[#faf7f2] rounded-xl shadow-lg overflow-hidden hover-glow"
      data-tour="preview-panel"
    >
      <div className="lotus-gradient p-4 border-b flex justify-between items-center text-white">
        <h2 className="text-xl font-lotus flex items-center">
          <Eye className="h-5 w-5 mr-2 animate-pulse-slow" />
          Preview
        </h2>
        <div className="flex items-center gap-3">
          <HintTooltip content="Switch between desktop and mobile view">
            <motion.div
              className="flex items-center rounded-full overflow-hidden border border-white/30 bg-white/10 backdrop-blur"
              whileHover={{ scale: 1.03 }}
            >
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className={`px-3 py-1 rounded-l-full ${previewMode === "desktop" ? "bg-white/20 text-white" : "text-white/80"} hover:text-white hover:bg-white/20 border-0`}
                onClick={() => setPreviewMode("desktop")}
              >
                <Monitor className="h-4 w-4 mr-1" />
                Desktop
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className={`px-3 py-1 rounded-r-full ${previewMode === "mobile" ? "bg-white/20 text-white" : "text-white/80"} hover:text-white hover:bg-white/20 border-0`}
                onClick={() => setPreviewMode("mobile")}
              >
                <Smartphone className="h-4 w-4 mr-1" />
                Mobile
              </Button>
            </motion.div>
          </HintTooltip>

          {blocks.length > 0 && (
            <HintTooltip content="Change newsletter background style">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center rounded-full overflow-hidden border border-white/30 bg-white/10 backdrop-blur"
              >
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="px-3 py-1 rounded-full text-white/80 hover:text-white hover:bg-white/20 border-0"
                  onClick={() =>
                    setBgVariant((bgVariant + 1) % backgroundStyles.length)
                  }
                >
                  <Palette className="h-4 w-4 mr-1" />
                  Background
                </Button>
              </motion.div>
            </HintTooltip>
          )}

          <motion.div
            className="text-sm text-white/80 bg-white/10 px-3 py-1 rounded-full backdrop-blur"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {blocks.length} {blocks.length === 1 ? "block" : "blocks"}
          </motion.div>
        </div>
      </div>
      <ScrollArea className="h-[calc(100vh-180px)]">
        <div className="p-6 bg-lotus-subtle/20">
          {blocks.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center h-64 text-gray-400"
            >
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
                className="w-20 h-20 mb-4 rounded-full bg-gradient-to-br from-lotus-primary/20 to-lotus-secondary/20 flex items-center justify-center"
              >
                <Eye className="h-10 w-10 text-lotus-primary/60" />
              </motion.div>
              <p className="text-lg mb-2 font-creative text-lotus-dark/70">
                Your preview will appear here
              </p>
              <p className="text-sm text-lotus-dark/50 max-w-xs text-center">
                Add blocks from the editor panel to start building your
                newsletter
              </p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className={`mx-auto ${backgroundStyles[bgVariant]} p-6 shadow-md border border-lotus-light/30 rounded-lg relative newsletter-preview-content hover-glow`}
              style={{
                maxWidth: previewMode === "mobile" ? "375px" : "650px",
                transition: "max-width 0.3s ease, background 0.3s ease",
              }}
            >
              {/* Device frame overlay for mobile preview */}
              {previewMode === "mobile" && (
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-0 left-0 right-0 h-4 bg-lotus-dark/80 rounded-t-lg flex items-center justify-center">
                    <div className="w-20 h-1 bg-lotus-light/60 rounded-full"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-4 bg-lotus-dark/80 rounded-b-lg"></div>
                </div>
              )}

              {blocks.map((block, index) => (
                <BlockRenderer
                  key={block.id}
                  block={block}
                  previewMode={previewMode}
                  index={index}
                />
              ))}
            </motion.div>
          )}
        </div>
      </ScrollArea>
    </motion.div>
  );
};

export default PreviewPanel;

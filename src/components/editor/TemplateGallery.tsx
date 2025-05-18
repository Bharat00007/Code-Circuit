import { NewsletterTemplate } from "@/types/newsletter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { X, Sparkles, Star } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

interface TemplateGalleryProps {
  templates: NewsletterTemplate[];
  loadTemplate: (templateIndex: number) => void;
  activeTemplate: number;
  onClose: () => void;
}

const TemplateGallery = ({
  templates,
  loadTemplate,
  activeTemplate,
  onClose,
}: TemplateGalleryProps) => {
  const [hoveredTemplate, setHoveredTemplate] = useState<number | null>(null);

  return (
    <div className="h-full flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-lotus flex items-center">
          <span className="mr-2 lotus-text-gradient">Choose a Template</span>
          <motion.div
            animate={{ y: [0, -5, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block"
          >
            <Sparkles className="h-5 w-5 text-lotus-primary" />
          </motion.div>
        </h2>
        <motion.div whileHover={{ rotate: 90 }} whileTap={{ scale: 0.9 }}>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="rounded-full hover:bg-lotus-light/20"
          >
            <X className="h-4 w-4 text-lotus-dark" />
          </Button>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-auto flex-1 pr-2">
        {templates.map((template, index) => (
          <motion.div
            key={template.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            onHoverStart={() => setHoveredTemplate(index)}
            onHoverEnd={() => setHoveredTemplate(null)}
          >
            <Card
              className={`template-card cursor-sparkle cursor-pointer overflow-hidden transition hover:shadow-lg 
                lotus-card relative
                ${activeTemplate === index ? "gradient-border border-2 border-transparent" : ""}`}
              onClick={() => loadTemplate(index)}
            >
              {template.id === "blank" ? (
                <div className="aspect-w-16 aspect-h-9 h-48 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: [0, 5, 0, -5, 0] }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="w-16 h-16 opacity-30"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                        stroke="#9b87f5"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeDasharray="4 4"
                      />
                      <path
                        d="M12 8V16M8 12H16"
                        stroke="#9b87f5"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </motion.div>
                </div>
              ) : (
                <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                  <img
                    src={template.thumbnail}
                    alt={template.name}
                    className="object-cover w-full h-48 transition-transform duration-500"
                    crossOrigin="anonymous"
                  />
                  {/* Image overlay on hover */}
                  {hoveredTemplate === index && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center p-4"
                    >
                      <p className="text-white font-medium text-sm">
                        {template.blocks.length} blocks
                      </p>
                    </motion.div>
                  )}
                </div>
              )}

              {/* Featured badge for selected templates */}
              {(index === 1 || index === 3 || index === 4) && (
                <div className="absolute top-2 right-2">
                  <motion.div
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="bg-lotus-primary text-white text-xs px-2 py-1 rounded-full flex items-center shadow-lg"
                  >
                    <Star className="h-3 w-3 mr-1" />
                    Featured
                  </motion.div>
                </div>
              )}

              <CardContent className="p-5">
                <h3
                  className={`${
                    template.id === "modern-welcome"
                      ? "font-elegant"
                      : template.id === "product-launch"
                        ? "font-marker"
                        : template.id === "event-invitation"
                          ? "font-handwritten"
                          : template.id === "blank"
                            ? "font-creative"
                            : "font-lotus"
                  } 
                               text-lg text-lotus-dark`}
                >
                  {template.name}
                </h3>
                <p className="text-lotus-dark/70 text-sm mt-2 line-clamp-2">
                  {template.description}
                </p>
                <motion.div
                  className="mt-4"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Button
                    variant={activeTemplate === index ? "default" : "outline"}
                    size="sm"
                    className={`w-full transition-all duration-300 font-creative ${
                      activeTemplate === index
                        ? "bg-gradient-to-r from-lotus-primary to-lotus-secondary hover:from-lotus-primary hover:to-lotus-secondary/90 border-0 text-white"
                        : "hover:border-lotus-secondary text-lotus-dark"
                    }`}
                    onClick={() => loadTemplate(index)}
                  >
                    {activeTemplate === index ? "Selected" : "Use Template"}
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TemplateGallery;

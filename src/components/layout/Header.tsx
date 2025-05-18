import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, Trash2, LayoutTemplate, Save } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { NewsletterBlock } from "@/types/newsletter";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { motion } from "framer-motion";
import html2pdf from "html2pdf.js";
import { Link } from "react-router-dom";

interface HeaderProps {
  onClear: () => void;
  onShowTemplates: () => void;
  blocks: NewsletterBlock[];
  onSave?: () => void;
  onExportPdf: () => void;
  children?: React.ReactNode;
}

const Header = ({
  onClear,
  onShowTemplates,
  blocks,
  onSave,
  onExportPdf,
  children,
}: HeaderProps) => {
  const [isExporting, setIsExporting] = useState(false);

  const handleExportHTML = () => {
    setIsExporting(true);

    try {
      // This is a simplified approach - a more robust implementation would
      // use a proper HTML generation library or template engine
      const style = `
        <style>
          body { font-family: 'Quicksand', Arial, sans-serif; margin: 0; padding: 0; background-color: #faf7f2; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f6ef; }
          .header { font-family: 'Pacifico', cursive; font-size: 24px; font-weight: bold; margin-bottom: 20px; color: #9b87f5; }
          .text { margin-bottom: 15px; }
          .button { display: inline-block; padding: 10px 20px; text-decoration: none; border-radius: 4px; }
          .image { max-width: 100%; }
          .divider { border: 0; height: 1px; margin: 15px 0; }
          img { max-width: 100%; }
        </style>
        <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;600&display=swap" rel="stylesheet">
      `;

      // This would need to be expanded to properly handle all block types and styling
      const content = blocks
        .map((block) => {
          switch (block.type) {
            case "header":
              return `<h1 style="text-align: ${block.content.alignment}; font-size: ${
                block.content.size === "large"
                  ? "28px"
                  : block.content.size === "medium"
                    ? "24px"
                    : "20px"
              }; font-family: 'Pacifico', cursive; color: #9b87f5;">${block.content.text}</h1>`;
            case "text":
              return `<p style="text-align: ${block.content.alignment || "left"}; 
              ${block.content.fontFamily ? `font-family: ${block.content.fontFamily};` : ""}
              ${block.content.fontSize ? `font-size: ${block.content.fontSize};` : ""}
              ${block.content.textColor ? `color: ${block.content.textColor};` : ""}
              ${block.content.isBold ? "font-weight: bold;" : ""}
              ${block.content.isItalic ? "font-style: italic;" : ""}
            ">${block.content.text}</p>`;
            case "image":
              return `<div style="text-align: ${block.content.alignment}"><img src="${block.content.url}" alt="${block.content.alt}" style="max-width: 100%;" /></div>`;
            case "button":
              return `<div style="text-align: ${block.content.alignment}">
              <a href="${block.content.url}" 
                style="display: inline-block; padding: 10px 20px; background-color: ${block.content.backgroundColor}; 
                color: ${block.content.textColor}; text-decoration: none; border-radius: 4px;">
                ${block.content.text}
              </a>
            </div>`;
            case "divider":
              return `<hr style="border-style: ${block.content.style}; border-color: ${block.content.color}; margin: ${
                block.content.spacing === "large"
                  ? "30px 0"
                  : block.content.spacing === "medium"
                    ? "20px 0"
                    : "10px 0"
              };" />`;
            case "spacer":
              const height =
                block.content.height === "large"
                  ? "60px"
                  : block.content.height === "medium"
                    ? "30px"
                    : "15px";
              return `<div style="height: ${height};"></div>`;
            default:
              return "";
          }
        })
        .join("");

      const html = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Newsletter</title>
          ${style}
        </head>
        <body>
          <div class="container">
            ${content}
          </div>
        </body>
        </html>
      `;

      const blob = new Blob([html], { type: "text/html" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "newsletter.html";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      toast({
        title: "Newsletter Exported as HTML",
        description: "Your newsletter has been exported as an HTML file.",
      });
    } catch (error) {
      console.error("Export error:", error);
      toast({
        title: "Export Failed",
        description: "There was an error exporting your newsletter.",
        variant: "destructive",
      });
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <header className="bg-gradient-to-r from-[#f9f6ef] to-[#f2eee6] border-b border-desert-sand shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div
            className="flex items-center"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="hover:opacity-80 transition-opacity">
              <h1 className="text-2xl font-pacifico bg-gradient-to-r from-lotus-primary to-lotus-secondary bg-clip-text text-transparent">
                Newsletter Studio
              </h1>
            </Link>
          </motion.div>
          <div className="flex items-center space-x-3">
            {/* Include children here to render them in the header */}
            {children}
            {onSave && (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  onClick={onSave}
                  className="flex items-center gradient-border hover:bg-lotus-subtle/20"
                >
                  <Save className="h-4 w-4 mr-2 text-lotus-primary" />
                  <span className="font-creative">Save</span>
                </Button>
              </motion.div>
            )}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                onClick={onShowTemplates}
                className="flex items-center gradient-border hover:bg-lotus-subtle/20"
              >
                <LayoutTemplate className="h-4 w-4 mr-2 text-lotus-secondary" />
                <span className="font-creative">Templates</span>
              </Button>
            </motion.div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outline"
                    className="flex items-center gradient-border hover:bg-lotus-subtle/20"
                    disabled={isExporting || blocks.length === 0}
                  >
                    <Download className="h-4 w-4 mr-2 text-lotus-primary" />
                    <span className="font-creative">Export</span>
                  </Button>
                </motion.div>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="font-elegant border-lotus-light"
              >
                <DropdownMenuItem
                  onClick={handleExportHTML}
                  className="hover:bg-lotus-subtle/40 cursor-pointer"
                >
                  Export as HTML
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={onExportPdf}
                  className="hover:bg-lotus-subtle/40 cursor-pointer"
                >
                  Export as PDF
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                onClick={onClear}
                className="flex items-center text-red-500 hover:text-red-600 border-red-300 hover:bg-red-50"
                disabled={blocks.length === 0}
              >
                <Trash2 className="h-4 w-4 mr-2" />
                <span className="font-creative">Clear</span>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

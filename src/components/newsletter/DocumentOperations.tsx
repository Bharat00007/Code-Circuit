import { NewsletterBlock } from "@/types/newsletter";
import { toast } from "@/hooks/use-toast";
import html2pdf from "html2pdf.js";

export const useDocumentOperations = (blocks: NewsletterBlock[]) => {
  const clearNewsletter = (callback: () => void) => {
    if (confirm("Are you sure you want to clear the newsletter?")) {
      callback();

      // Add toast notification
      toast({
        title: "Newsletter Cleared",
        description: "All blocks have been removed from your newsletter.",
        variant: "destructive",
      });
    }
  };

  const saveNewsletter = () => {
    try {
      localStorage.setItem("savedNewsletter", JSON.stringify(blocks));
      toast({
        title: "Newsletter Saved",
        description: "Your newsletter has been saved to local storage.",
        className: "bg-lotus-primary text-white border-lotus-secondary",
      });
    } catch (error) {
      toast({
        title: "Save Failed",
        description: "There was an error saving your newsletter.",
        variant: "destructive",
      });
    }
  };

  const exportToPdf = () => {
    const element = document.querySelector(".newsletter-preview-content");

    if (!element) {
      toast({
        title: "Export Failed",
        description: "Could not find newsletter content to export.",
        variant: "destructive",
      });
      return;
    }

    // Show loading toast
    toast({
      title: "Preparing PDF...",
      description: "Please wait while we generate your high-quality PDF.",
    });

    // Better CORS handling for images
    const images = element.querySelectorAll("img");
    Array.from(images).forEach((img) => {
      img.setAttribute("crossOrigin", "anonymous");
      // Create a cache-busting URL to ensure fresh load
      const cacheBustUrl = img.src.includes("?")
        ? `${img.src}&_cb=${new Date().getTime()}`
        : `${img.src}?_cb=${new Date().getTime()}`;
      img.src = cacheBustUrl;
    });

    // Wait for DOM updates and image loading before generating PDF
    setTimeout(() => {
      // Enhanced PDF options for better quality
      const options = {
        margin: [15, 15, 15, 15],
        filename: "newsletter.pdf",
        image: {
          type: "jpeg",
          quality: 1.0,
        },
        enableLinks: true,
        html2canvas: {
          scale: 5, // Higher scale for better quality
          useCORS: true, // Enable CORS for images
          allowTaint: true,
          letterRendering: true,
          imageTimeout: 8000, // Longer timeout for images
          logging: true,
          backgroundColor: "#ffffff",
        },
        jsPDF: {
          unit: "mm",
          format: "a4",
          orientation: "portrait",
          compress: false, // Better quality without compression
          hotfixes: ["px_scaling"],
        },
      };

      // Use the exported clone method for better image handling
      const clone = element.cloneNode(true) as HTMLElement;
      clone.style.width = "210mm"; // A4 width
      clone.style.padding = "15mm";
      document.body.appendChild(clone);

      // Generate PDF with improved configuration
      html2pdf()
        .from(clone)
        .set(options)
        .save()
        .then(() => {
          toast({
            title: "PDF Generated Successfully",
            description:
              "Your high-quality newsletter has been exported to PDF.",
            className: "bg-lotus-primary text-white border-lotus-secondary",
          });
          document.body.removeChild(clone);
        })
        .catch((error) => {
          console.error("PDF generation error:", error);
          document.body.removeChild(clone);
          toast({
            title: "Export Failed",
            description:
              "There was an error generating the PDF. Please try again.",
            variant: "destructive",
          });
        });
    }, 2000); // Longer wait time for images to load
  };

  return {
    clearNewsletter,
    saveNewsletter,
    exportToPdf,
  };
};

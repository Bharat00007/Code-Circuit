import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, X, ChevronRight, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type TourStep = {
  target: string;
  content: string;
  title: string;
  placement?: "top" | "right" | "bottom" | "left";
};

interface IntroTourProps {
  onClose: () => void;
  onComplete: () => void;
}

// Tour steps definition
const tourSteps: TourStep[] = [
  {
    target: "[data-tour='editor-panel']",
    title: "Editor Panel",
    content: "This is where you add and edit blocks for your newsletter.",
    placement: "right",
  },
  {
    target: "[data-tour='add-block']",
    title: "Add Blocks",
    content: "Click here to add new content blocks to your newsletter.",
    placement: "bottom",
  },
  {
    target: "[data-tour='preview-panel']",
    title: "Preview Panel",
    content: "See a real-time preview of your newsletter as you edit.",
    placement: "left",
  },
  {
    target: "[data-tour='templates']",
    title: "Templates",
    content: "Choose from pre-designed templates to get started quickly.",
    placement: "bottom",
  },
  {
    target: "[data-tour='saved-designs']",
    title: "Saved Designs",
    content: "Access your saved newsletter designs here.",
    placement: "bottom",
  },
];

export const IntroTour = ({ onClose, onComplete }: IntroTourProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [targetElement, setTargetElement] = useState<HTMLElement | null>(null);

  // Find the target element for the current step
  useEffect(() => {
    const target = document.querySelector(
      tourSteps[currentStep].target,
    ) as HTMLElement;
    if (target) {
      setTargetElement(target);
      target.scrollIntoView({ behavior: "smooth", block: "center" });

      // Add highlight effect to target element
      target.classList.add("tour-highlight");

      return () => {
        target.classList.remove("tour-highlight");
      };
    }
  }, [currentStep]);

  const handleNext = () => {
    if (currentStep < tourSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete();
      localStorage.setItem("tour-completed", "true");
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSkip = () => {
    onClose();
    localStorage.setItem("tour-completed", "true");
  };

  if (!targetElement) return null;

  // Calculate position based on targetElement
  const targetRect = targetElement.getBoundingClientRect();
  const placement = tourSteps[currentStep].placement || "bottom";

  let tooltipStyle = {};
  const offset = 15; // Distance from the target element

  switch (placement) {
    case "top":
      tooltipStyle = {
        top: targetRect.top - offset,
        left: targetRect.left + targetRect.width / 2,
        transform: "translateX(-50%) translateY(-100%)",
      };
      break;
    case "right":
      tooltipStyle = {
        top: targetRect.top + targetRect.height / 2,
        left: targetRect.right + offset,
        transform: "translateY(-50%)",
      };
      break;
    case "bottom":
      tooltipStyle = {
        top: targetRect.bottom + offset,
        left: targetRect.left + targetRect.width / 2,
        transform: "translateX(-50%)",
      };
      break;
    case "left":
      tooltipStyle = {
        top: targetRect.top + targetRect.height / 2,
        left: targetRect.left - offset,
        transform: "translateX(-100%) translateY(-50%)",
      };
      break;
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="fixed z-50"
        style={tooltipStyle}
      >
        <div className="bg-white rounded-lg shadow-lg border border-lotus-light p-4 max-w-sm">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-creative text-lg text-lotus-dark">
              {tourSteps[currentStep].title}
            </h3>
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0"
              onClick={handleSkip}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-sm text-lotus-dark/80 mb-4">
            {tourSteps[currentStep].content}
          </p>
          <div className="flex justify-between items-center">
            <div>
              <Button
                variant="ghost"
                size="sm"
                onClick={handlePrevious}
                disabled={currentStep === 0}
                className="mr-2"
              >
                <ChevronLeft className="mr-1 h-4 w-4" />
                Back
              </Button>
            </div>
            <div className="text-xs text-lotus-dark/60">
              {currentStep + 1} of {tourSteps.length}
            </div>
            <Button
              size="sm"
              onClick={handleNext}
              className="bg-lotus-primary hover:bg-lotus-secondary text-white"
            >
              {currentStep === tourSteps.length - 1 ? "Finish" : "Next"}
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Connector line */}
        <div
          className="absolute w-2 h-2 bg-white transform rotate-45 border-t border-l border-lotus-light"
          style={{
            top:
              placement === "bottom"
                ? "-4px"
                : placement === "top"
                  ? "calc(100% - 4px)"
                  : "calc(50% - 4px)",
            left:
              placement === "right"
                ? "-4px"
                : placement === "left"
                  ? "calc(100% - 4px)"
                  : "calc(50% - 4px)",
          }}
        ></div>
      </motion.div>
    </AnimatePresence>
  );
};

// Helper tooltip component to show hints on hover
export const HintTooltip = ({
  children,
  content,
}: {
  children: React.ReactNode;
  content: string;
}) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="inline-flex">{children}</div>
        </TooltipTrigger>
        <TooltipContent
          className="bg-lotus-primary text-white border-lotus-primary font-creative"
          sideOffset={5}
        >
          {content}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

// Toggle button for help
export const TourToggleButton = ({ onToggle }: { onToggle: () => void }) => {
  const [hasSeenTour, setHasSeenTour] = useState(false);

  useEffect(() => {
    const tourCompleted = localStorage.getItem("tour-completed");
    setHasSeenTour(!!tourCompleted);
  }, []);

  if (hasSeenTour) {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="text-lotus-primary"
              onClick={onToggle}
            >
              <HelpCircle className="h-5 w-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Show help tour</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }

  return (
    <Button
      variant="outline"
      size="sm"
      className="text-lotus-primary animate-pulse border-lotus-primary/50"
      onClick={onToggle}
    >
      <HelpCircle className="h-4 w-4 mr-2" />
      Tour
    </Button>
  );
};

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ImageOff, AlertCircle, CheckCircle2, RefreshCw } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

interface ImageEditorProps {
  content: {
    url: string;
    alt: string;
    alignment: string;
  };
  onChange: (content: any) => void;
}

const ImageEditor = ({ content, onChange }: ImageEditorProps) => {
  const [previewLoaded, setPreviewLoaded] = useState(false);
  const [previewError, setPreviewError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (content.url) {
      setIsLoading(true);
      const img = new Image();
      img.crossOrigin = "anonymous";

      // Add cache busting to force reload
      const cacheBuster = new Date().getTime();
      const uniqueId = Math.floor(Math.random() * 100000);
      const imgUrl = content.url.includes("?")
        ? `${content.url}&_cb=${cacheBuster}&id=${uniqueId}`
        : `${content.url}?_cb=${cacheBuster}&id=${uniqueId}`;

      img.src = imgUrl;

      img.onload = () => {
        setPreviewLoaded(true);
        setPreviewError(false);
        setIsLoading(false);
      };

      img.onerror = () => {
        setPreviewLoaded(false);
        setPreviewError(true);
        setIsLoading(false);
        console.error(`Failed to load image: ${imgUrl}`);
      };

      return () => {
        img.onload = null;
        img.onerror = null;
      };
    }
  }, [content.url]);

  const handleRefreshImage = () => {
    if (content.url) {
      setPreviewLoaded(false);
      setPreviewError(false);
      setIsLoading(true);

      // Force image reload with new cache-busting parameter
      const refreshedUrl =
        content.url.split("?")[0] +
        `?refresh=${Date.now()}&id=${Math.random()}`;
      onChange({ url: refreshedUrl });

      toast({
        title: "Refreshing image",
        description: "Trying to reload the image from source",
        duration: 2000,
      });
    }
  };

  const handleTryFallbackImage = () => {
    // Provide fallback image from placeholder service
    const fallbackUrl = `https://placehold.co/900x600/e5e7eb/818cf8?text=Newsletter+Image&font=montserrat&cb=${Date.now()}`;
    onChange({ url: fallbackUrl });

    toast({
      title: "Using fallback image",
      description: "Switched to a reliable placeholder image",
      duration: 3000,
    });
  };

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="url" className="flex items-center">
          Image URL
          {previewError && (
            <span className="text-xs text-red-500 ml-2 flex items-center">
              <AlertCircle className="h-3 w-3 mr-1" />
              Could not load image
            </span>
          )}
          {previewLoaded && (
            <span className="text-xs text-green-500 ml-2 flex items-center">
              <CheckCircle2 className="h-3 w-3 mr-1" />
              Image loaded successfully
            </span>
          )}
        </Label>
        <div className="flex gap-2 mt-1">
          <Input
            id="url"
            value={content.url}
            onChange={(e) => {
              onChange({ url: e.target.value });
              setPreviewLoaded(false);
              setPreviewError(false);
            }}
            className="flex-1"
            placeholder="https://example.com/image.jpg"
          />
          {content.url && (
            <Button
              size="icon"
              variant="outline"
              onClick={handleRefreshImage}
              className="flex-shrink-0"
              disabled={isLoading}
            >
              <RefreshCw
                className={`h-4 w-4 ${isLoading ? "animate-spin" : ""}`}
              />
            </Button>
          )}
        </div>
        <p className="text-xs text-gray-500 mt-1">
          Enter a direct URL to the image. For best results with PDF export, use
          HTTPS URLs.
        </p>
      </div>

      <div>
        <Label htmlFor="alt">Alt Text</Label>
        <Input
          id="alt"
          value={content.alt}
          onChange={(e) => onChange({ alt: e.target.value })}
          className="mt-1"
          placeholder="Describe the image for accessibility"
        />
      </div>

      <div>
        <Label htmlFor="alignment">Alignment</Label>
        <Select
          value={content.alignment}
          onValueChange={(value) => onChange({ alignment: value })}
        >
          <SelectTrigger id="alignment" className="mt-1">
            <SelectValue placeholder="Select alignment" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="left">Left</SelectItem>
            <SelectItem value="center">Center</SelectItem>
            <SelectItem value="right">Right</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {content.url && (
        <div className="mt-3 border rounded-lg p-4 bg-[#faf7f2]/50">
          <p className="text-xs text-gray-500 mb-2 flex justify-between">
            <span>Preview:</span>
            {previewLoaded && (
              <span className="text-green-600">
                ✓ Image loaded successfully
              </span>
            )}
          </p>

          <AnimatePresence mode="wait">
            {isLoading ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="border border-dashed border-gray-300 rounded-md p-6 bg-gray-50 flex flex-col items-center justify-center"
                key="loading"
              >
                <RefreshCw className="h-8 w-8 text-gray-400 mb-2 animate-spin" />
                <p className="text-sm text-gray-500">Loading image...</p>
              </motion.div>
            ) : previewError ? (
              <motion.div
                key="error"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="border border-dashed border-red-300 rounded-md p-6 bg-red-50 flex flex-col items-center justify-center"
              >
                <ImageOff className="h-8 w-8 text-red-400 mb-2" />
                <p className="text-sm text-red-500">
                  Could not load image from URL
                </p>
                <p className="text-xs text-red-400 mt-2 max-w-full overflow-hidden text-ellipsis">
                  {content.url}
                </p>
                <Button
                  size="sm"
                  variant="outline"
                  className="mt-3"
                  onClick={handleTryFallbackImage}
                >
                  Use Placeholder Image
                </Button>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0 }}
                animate={{ opacity: previewLoaded ? 1 : 0.5 }}
                exit={{ opacity: 0 }}
                className="border rounded-md overflow-hidden"
                style={{ minHeight: "100px" }}
              >
                <img
                  src={content.url}
                  alt={content.alt}
                  className="max-w-full max-h-[200px] object-contain mx-auto"
                  crossOrigin="anonymous"
                  onLoad={() => setPreviewLoaded(true)}
                  onError={() => {
                    setPreviewError(true);
                    setPreviewLoaded(false);
                  }}
                  loading="eager"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

      <div className="mt-2 p-3 bg-blue-50 border border-blue-100 rounded-md">
        <p className="text-xs text-blue-700">
          <strong>Tip:</strong> If you're having trouble with images, try using
          the placeholder button when an image fails to load, or choose a
          different image URL from a reliable source.
        </p>
      </div>
    </div>
  );
};

export default ImageEditor;

import { cn } from "@/lib/utils";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ImageOff } from "lucide-react";

interface ImageBlockProps {
  content: {
    url: string;
    alt: string;
    alignment: "left" | "center" | "right";
  };
}

const ImageBlock = ({ content }: ImageBlockProps) => {
  const { url, alt, alignment } = content;
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [retries, setRetries] = useState(0);
  const imgRef = useRef<HTMLImageElement>(null);

  const MAX_RETRIES = 3;

  useEffect(() => {
    // Reset states when URL changes
    setIsLoaded(false);
    setHasError(false);
    setRetries(0);

    if (!url) return;

    // Enhanced image preloading with more robust error handling
    const img = new Image();

    // Always set crossOrigin to anonymous to avoid CORS issues
    img.crossOrigin = "anonymous";

    // Add cache-busting parameter and unique identifier to prevent browser caching
    const cacheBuster = new Date().getTime();
    const randomId = Math.floor(Math.random() * 1000000);
    const imageUrl = url.includes("?")
      ? `${url}&cb=${cacheBuster}&id=${randomId}`
      : `${url}?cb=${cacheBuster}&id=${randomId}`;

    img.src = imageUrl;

    img.onload = () => {
      setIsLoaded(true);
      setHasError(false);
      // Update the ref's crossOrigin attribute
      if (imgRef.current) {
        imgRef.current.crossOrigin = "anonymous";
        imgRef.current.src = imageUrl;
      }
    };

    img.onerror = () => {
      console.error(`Failed to load image: ${imageUrl}`);
      if (retries < MAX_RETRIES) {
        // Retry loading with exponential backoff
        setTimeout(
          () => {
            setRetries((prev) => prev + 1);
            const newCacheBuster = new Date().getTime();
            const newRandomId = Math.floor(Math.random() * 1000000);
            // Try a different approach on each retry
            let retryUrl = "";

            if (retries === 0) {
              // First retry: Just add new cache busting parameters
              retryUrl = url.includes("?")
                ? `${url}&cb=${newCacheBuster}&retry=1&id=${newRandomId}`
                : `${url}?cb=${newCacheBuster}&retry=1&id=${newRandomId}`;
            } else if (retries === 1) {
              // Second retry: Try a placeholder image service
              retryUrl = `https://placehold.co/900x600/e5e7eb/818cf8?text=Newsletter+Image&font=montserrat&cb=${newCacheBuster}`;
            } else {
              // Third retry: Try another placeholder service
              retryUrl = `https://dummyimage.com/900x600/f3f4f6/6366f1&text=Newsletter+Content&cb=${newCacheBuster}`;
            }

            img.src = retryUrl;
          },
          Math.pow(2, retries) * 500,
        ); // Exponential backoff: 500ms, 1s, 2s, etc.
      } else {
        setHasError(true);
      }
    };

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [url, retries]);

  const alignmentClasses = {
    left: "mr-auto",
    center: "mx-auto",
    right: "ml-auto",
  };

  return (
    <div className="mb-6 transition-all duration-500 hover:shadow-lg rounded-lg overflow-hidden">
      {hasError ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-[#f9f6ef] rounded-lg p-8 flex flex-col items-center justify-center"
          style={{ minHeight: "180px" }}
        >
          <ImageOff className="h-12 w-12 text-lotus-dark/40 mb-3" />
          <p className="text-lotus-dark/60 text-center">
            Image could not be loaded
            <br />
            <span className="text-xs mt-2 block text-lotus-dark/40 max-w-[300px] truncate">
              {url}
            </span>
          </p>
        </motion.div>
      ) : (
        <motion.div
          className={cn("overflow-hidden", alignmentClasses[alignment])}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 10 }}
          transition={{ duration: 0.5 }}
          whileInView={{ scale: [0.98, 1] }}
          viewport={{ once: true }}
        >
          {!isLoaded && (
            <div
              className="bg-gray-100 animate-pulse rounded-lg shimmer-bg"
              style={{ height: "240px", width: "100%", maxWidth: "600px" }}
            >
              <div className="flex items-center justify-center h-full">
                <svg
                  className="w-10 h-10 text-gray-200"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 640 512"
                >
                  <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
                </svg>
              </div>
            </div>
          )}
          <motion.img
            ref={imgRef}
            src={url}
            alt={alt}
            className={cn(
              "max-w-full rounded-lg shadow-md hover:shadow-xl transition-all duration-500",
              isLoaded ? "opacity-100" : "opacity-0",
            )}
            crossOrigin="anonymous"
            loading="eager"
            style={{
              transform: isLoaded ? "none" : "scale(0.98)",
              transition: "transform 0.5s ease, opacity 0.5s ease",
              display: isLoaded ? "block" : "none",
            }}
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          />
        </motion.div>
      )}
    </div>
  );
};

export default ImageBlock;

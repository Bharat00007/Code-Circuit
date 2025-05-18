import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Bold,
  Italic,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Palette,
} from "lucide-react";
import { motion } from "framer-motion";

interface TextEditorProps {
  content: {
    text: string;
    fontFamily?: string;
    fontSize?: string;
    textColor?: string;
    alignment?: "left" | "center" | "right";
    isBold?: boolean;
    isItalic?: boolean;
  };
  onChange: (content: any) => void;
}

const TextEditor = ({ content, onChange }: TextEditorProps) => {
  const [showColorPicker, setShowColorPicker] = useState(false);

  const fontFamilies = [
    { label: "Default", value: "inherit" },
    { label: "Elegant", value: "'Playfair Display', serif" },
    { label: "Handwritten", value: "'Dancing Script', cursive" },
    { label: "Creative", value: "'Comfortaa', cursive" },
    { label: "Sketch", value: "'Architects Daughter', cursive" },
    { label: "Marker", value: "'Permanent Marker', cursive" },
    { label: "Playful", value: "'Fredoka One', cursive" },
    { label: "Desert", value: "'Pacifico', cursive" },
    { label: "Oasis", value: "'Quicksand', sans-serif" },
    { label: "Mirage", value: "'Montserrat Alternates', sans-serif" },
    { label: "Lotus", value: "'Nunito', sans-serif" },
    { label: "Arial", value: "Arial, sans-serif" },
    { label: "Times New Roman", value: "Times New Roman, serif" },
    { label: "Georgia", value: "Georgia, serif" },
  ];

  const fontSizes = [
    { label: "Small", value: "0.875rem" },
    { label: "Default", value: "1rem" },
    { label: "Medium", value: "1.125rem" },
    { label: "Large", value: "1.25rem" },
    { label: "XL", value: "1.5rem" },
    { label: "2XL", value: "1.75rem" },
    { label: "3XL", value: "2rem" },
  ];

  const colors = [
    { label: "Default", value: "#000000" },
    { label: "Gray", value: "#6b7280" },
    { label: "Red", value: "#ef4444" },
    { label: "Blue", value: "#3b82f6" },
    { label: "Green", value: "#10b981" },
    { label: "Purple", value: "#8b5cf6" },
    { label: "Orange", value: "#f97316" },
    { label: "Lotus Primary", value: "#9b87f5" },
    { label: "Lotus Secondary", value: "#7E69AB" },
    { label: "Desert Sunset", value: "#FF7E5F" },
    { label: "Desert Dusk", value: "#FEB47B" },
  ];

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="text">Text Content</Label>
        <Textarea
          id="text"
          value={content.text}
          onChange={(e) => onChange({ ...content, text: e.target.value })}
          className="mt-1 min-h-[120px]"
        />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <Label htmlFor="fontFamily">Font Family</Label>
          <Select
            value={content.fontFamily || "inherit"}
            onValueChange={(value) =>
              onChange({ ...content, fontFamily: value })
            }
          >
            <SelectTrigger id="fontFamily" className="mt-1">
              <SelectValue placeholder="Select font" />
            </SelectTrigger>
            <SelectContent className="max-h-72">
              <div className="grid gap-1">
                {fontFamilies.map((font) => (
                  <SelectItem key={font.value} value={font.value}>
                    <span style={{ fontFamily: font.value }}>{font.label}</span>
                  </SelectItem>
                ))}
              </div>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="fontSize">Font Size</Label>
          <Select
            value={content.fontSize || "1rem"}
            onValueChange={(value) => onChange({ ...content, fontSize: value })}
          >
            <SelectTrigger id="fontSize" className="mt-1">
              <SelectValue placeholder="Select size" />
            </SelectTrigger>
            <SelectContent>
              {fontSizes.map((size) => (
                <SelectItem key={size.value} value={size.value}>
                  {size.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
          <Button
            type="button"
            variant={content.isBold ? "default" : "outline"}
            size="sm"
            className="h-8 w-8 p-0"
            onClick={() => onChange({ ...content, isBold: !content.isBold })}
          >
            <Bold className="h-4 w-4" />
          </Button>
        </motion.div>
        <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
          <Button
            type="button"
            variant={content.isItalic ? "default" : "outline"}
            size="sm"
            className="h-8 w-8 p-0"
            onClick={() =>
              onChange({ ...content, isItalic: !content.isItalic })
            }
          >
            <Italic className="h-4 w-4" />
          </Button>
        </motion.div>
        <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
          <Button
            type="button"
            variant={content.alignment === "left" ? "default" : "outline"}
            size="sm"
            className="h-8 w-8 p-0"
            onClick={() => onChange({ ...content, alignment: "left" })}
          >
            <AlignLeft className="h-4 w-4" />
          </Button>
        </motion.div>
        <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
          <Button
            type="button"
            variant={content.alignment === "center" ? "default" : "outline"}
            size="sm"
            className="h-8 w-8 p-0"
            onClick={() => onChange({ ...content, alignment: "center" })}
          >
            <AlignCenter className="h-4 w-4" />
          </Button>
        </motion.div>
        <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
          <Button
            type="button"
            variant={content.alignment === "right" ? "default" : "outline"}
            size="sm"
            className="h-8 w-8 p-0"
            onClick={() => onChange({ ...content, alignment: "right" })}
          >
            <AlignRight className="h-4 w-4" />
          </Button>
        </motion.div>
        <Popover open={showColorPicker} onOpenChange={setShowColorPicker}>
          <PopoverTrigger asChild>
            <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="h-8 px-2 flex items-center gap-1"
              >
                <Palette className="h-4 w-4" />
                <div
                  className="w-4 h-4 rounded-full border border-gray-300"
                  style={{ backgroundColor: content.textColor || "#000000" }}
                />
              </Button>
            </motion.div>
          </PopoverTrigger>
          <PopoverContent className="w-64">
            <div className="grid grid-cols-3 gap-2">
              {colors.map((color) => (
                <Button
                  key={color.value}
                  type="button"
                  variant="outline"
                  className="h-8 p-0"
                  onClick={() => {
                    onChange({ ...content, textColor: color.value });
                    setShowColorPicker(false);
                  }}
                >
                  <div
                    className="w-full h-full flex items-center justify-center"
                    style={{ color: color.value }}
                  >
                    <div
                      className="w-4 h-4 rounded-full border border-gray-300"
                      style={{ backgroundColor: color.value }}
                    />
                    <span className="ml-1 text-xs">{color.label}</span>
                  </div>
                </Button>
              ))}
            </div>
            <div className="mt-2">
              <Label htmlFor="customColor">Custom</Label>
              <Input
                id="customColor"
                type="color"
                value={content.textColor || "#000000"}
                onChange={(e) =>
                  onChange({ ...content, textColor: e.target.value })
                }
                className="h-8 mt-1"
              />
            </div>
          </PopoverContent>
        </Popover>
      </div>

      <div className="mt-2">
        <p className="text-xs text-gray-500 mb-2">Preview:</p>
        <div
          className="p-3 border rounded"
          style={{
            fontFamily: content.fontFamily || "inherit",
            fontSize: content.fontSize || "1rem",
            color: content.textColor || "inherit",
            textAlign: content.alignment || "left",
            fontWeight: content.isBold ? "bold" : "normal",
            fontStyle: content.isItalic ? "italic" : "normal",
          }}
        >
          {content.text || "Text preview"}
        </div>
      </div>

      <div className="mt-4 pt-3 border-t">
        <p className="text-xs text-gray-500 mb-2 font-medium">Font Gallery:</p>
        <div className="grid grid-cols-2 gap-2">
          <div className="p-2 border rounded text-center">
            <p className="font-elegant">Elegant</p>
          </div>
          <div className="p-2 border rounded text-center">
            <p className="font-handwritten">Handwritten</p>
          </div>
          <div className="p-2 border rounded text-center">
            <p className="font-marker">Marker</p>
          </div>
          <div className="p-2 border rounded text-center">
            <p className="font-sketch">Sketch</p>
          </div>
          <div className="p-2 border rounded text-center">
            <p className="font-desert">Desert</p>
          </div>
          <div className="p-2 border rounded text-center">
            <p className="font-playful">Playful</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextEditor;

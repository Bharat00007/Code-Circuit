import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion } from "framer-motion";
import { Type, AlignLeft, AlignCenter, AlignRight } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

interface HeaderEditorProps {
  content: {
    text: string;
    alignment: string;
    size: string;
  };
  onChange: (content: any) => void;
  isDarkMode?: boolean;
}

const HeaderEditor = ({
  content,
  onChange,
  isDarkMode = false,
}: HeaderEditorProps) => {
  const handleAlignmentChange = (value: string) => {
    if (value) onChange({ alignment: value });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="space-y-4"
    >
      <div className="relative">
        <Label
          htmlFor="text"
          className={`flex items-center text-sm font-medium ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
        >
          <Type className="h-4 w-4 mr-2" />
          Heading Text
        </Label>
        <Input
          id="text"
          value={content.text}
          onChange={(e) => onChange({ text: e.target.value })}
          className={`mt-1 transition-all ${
            isDarkMode
              ? "bg-gray-800 border-gray-700 text-white focus:ring-violet-500 focus:border-violet-500"
              : "focus:ring-violet-500 focus:border-violet-500"
          }`}
          placeholder="Enter heading text..."
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label
            htmlFor="size"
            className={`block text-sm font-medium mb-1 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
          >
            Size
          </Label>
          <Select
            value={content.size}
            onValueChange={(value) => onChange({ size: value })}
          >
            <SelectTrigger
              id="size"
              className={`${
                isDarkMode
                  ? "bg-gray-800 border-gray-700 text-white ring-offset-gray-900"
                  : ""
              }`}
            >
              <SelectValue placeholder="Select size" />
            </SelectTrigger>
            <SelectContent
              className={
                isDarkMode ? "bg-gray-800 border-gray-700 text-white" : ""
              }
            >
              <SelectItem value="small">Small</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="large">Large</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label
            htmlFor="alignment"
            className={`block text-sm font-medium mb-1 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
          >
            Alignment
          </Label>
          <ToggleGroup
            type="single"
            value={content.alignment}
            onValueChange={handleAlignmentChange}
            className={`flex justify-between border ${isDarkMode ? "border-gray-700 bg-gray-800" : "border-gray-200"} rounded-md p-1`}
          >
            <ToggleGroupItem
              value="left"
              aria-label="Left aligned"
              className={`flex-1 h-8 ${isDarkMode ? "data-[state=on]:bg-gray-700" : "data-[state=on]:bg-violet-100"}`}
            >
              <AlignLeft className="h-4 w-4" />
            </ToggleGroupItem>

            <ToggleGroupItem
              value="center"
              aria-label="Center aligned"
              className={`flex-1 h-8 ${isDarkMode ? "data-[state=on]:bg-gray-700" : "data-[state=on]:bg-violet-100"}`}
            >
              <AlignCenter className="h-4 w-4" />
            </ToggleGroupItem>

            <ToggleGroupItem
              value="right"
              aria-label="Right aligned"
              className={`flex-1 h-8 ${isDarkMode ? "data-[state=on]:bg-gray-700" : "data-[state=on]:bg-violet-100"}`}
            >
              <AlignRight className="h-4 w-4" />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>

      <div className="pt-2">
        <div
          className={`p-3 mt-2 rounded-md ${isDarkMode ? "bg-gray-700/50" : "bg-gray-50"}`}
        >
          <p className="text-sm text-center font-medium mb-1">Preview</p>
          <div
            className={`border-dashed border-2 ${isDarkMode ? "border-gray-600" : "border-gray-200"} p-3 rounded-md`}
          >
            <div
              className={`
                ${content.alignment === "left" ? "text-left" : content.alignment === "right" ? "text-right" : "text-center"}
                ${content.size === "small" ? "text-lg" : content.size === "medium" ? "text-xl" : "text-2xl"}
                ${isDarkMode ? "text-white" : "text-gray-900"}
                font-bold
              `}
            >
              {content.text || "Header Preview"}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HeaderEditor;

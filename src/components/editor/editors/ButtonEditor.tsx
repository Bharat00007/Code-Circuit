import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ButtonEditorProps {
  content: {
    text: string;
    url: string;
    backgroundColor: string;
    textColor: string;
    alignment: string;
  };
  onChange: (content: any) => void;
}

const ButtonEditor = ({ content, onChange }: ButtonEditorProps) => {
  const colorOptions = [
    { label: "Blue", bgValue: "#3b82f6", textValue: "#ffffff" },
    { label: "Green", bgValue: "#10b981", textValue: "#ffffff" },
    { label: "Red", bgValue: "#ef4444", textValue: "#ffffff" },
    { label: "Purple", bgValue: "#8b5cf6", textValue: "#ffffff" },
    { label: "Orange", bgValue: "#f97316", textValue: "#ffffff" },
    { label: "Gray", bgValue: "#6b7280", textValue: "#ffffff" },
    { label: "White", bgValue: "#ffffff", textValue: "#000000" },
    { label: "Black", bgValue: "#000000", textValue: "#ffffff" },
  ];

  return (
    <div className="space-y-3">
      <div>
        <Label htmlFor="text">Button Text</Label>
        <Input
          id="text"
          value={content.text}
          onChange={(e) => onChange({ text: e.target.value })}
          className="mt-1"
        />
      </div>
      <div>
        <Label htmlFor="url">Button URL</Label>
        <Input
          id="url"
          value={content.url}
          onChange={(e) => onChange({ url: e.target.value })}
          className="mt-1"
        />
      </div>
      <div>
        <Label htmlFor="color">Button Color</Label>
        <Select
          value={`${content.backgroundColor}-${content.textColor}`}
          onValueChange={(value) => {
            const [bgColor, textColor] = value.split("-");
            onChange({
              backgroundColor: bgColor,
              textColor: textColor,
            });
          }}
        >
          <SelectTrigger id="color" className="mt-1">
            <SelectValue placeholder="Select color" />
          </SelectTrigger>
          <SelectContent>
            {colorOptions.map((option) => (
              <SelectItem
                key={option.label}
                value={`${option.bgValue}-${option.textValue}`}
              >
                <div className="flex items-center">
                  <div
                    className="w-4 h-4 mr-2 rounded-full"
                    style={{ backgroundColor: option.bgValue }}
                  />
                  {option.label}
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
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
      <div className="mt-2">
        <p className="text-xs text-gray-500 mb-2">Preview:</p>
        <div
          className={`flex justify-${content.alignment === "center" ? "center" : content.alignment === "right" ? "end" : "start"}`}
        >
          <button
            className="px-4 py-2 rounded"
            style={{
              backgroundColor: content.backgroundColor,
              color: content.textColor,
            }}
          >
            {content.text || "Button"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ButtonEditor;

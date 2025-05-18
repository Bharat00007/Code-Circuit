import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface DividerEditorProps {
  content: {
    style: string;
    color: string;
    spacing: string;
  };
  onChange: (content: any) => void;
}

const DividerEditor = ({ content, onChange }: DividerEditorProps) => {
  const colorOptions = [
    { label: "Gray", value: "#e5e7eb" },
    { label: "Blue", value: "#dbeafe" },
    { label: "Green", value: "#dcfce7" },
    { label: "Red", value: "#fee2e2" },
    { label: "Purple", value: "#ede9fe" },
    { label: "Orange", value: "#ffedd5" },
    { label: "Dark Gray", value: "#9ca3af" },
    { label: "Black", value: "#000000" },
  ];

  return (
    <div className="space-y-3">
      <div>
        <Label htmlFor="style">Divider Style</Label>
        <Select
          value={content.style}
          onValueChange={(value) => onChange({ style: value })}
        >
          <SelectTrigger id="style" className="mt-1">
            <SelectValue placeholder="Select style" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="solid">Solid</SelectItem>
            <SelectItem value="dashed">Dashed</SelectItem>
            <SelectItem value="dotted">Dotted</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="color">Divider Color</Label>
        <Select
          value={content.color}
          onValueChange={(value) => onChange({ color: value })}
        >
          <SelectTrigger id="color" className="mt-1">
            <SelectValue placeholder="Select color" />
          </SelectTrigger>
          <SelectContent>
            {colorOptions.map((option) => (
              <SelectItem key={option.label} value={option.value}>
                <div className="flex items-center">
                  <div
                    className="w-4 h-4 mr-2 rounded-full"
                    style={{ backgroundColor: option.value }}
                  />
                  {option.label}
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="spacing">Spacing</Label>
        <Select
          value={content.spacing}
          onValueChange={(value) => onChange({ spacing: value })}
        >
          <SelectTrigger id="spacing" className="mt-1">
            <SelectValue placeholder="Select spacing" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="small">Small</SelectItem>
            <SelectItem value="medium">Medium</SelectItem>
            <SelectItem value="large">Large</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="mt-2">
        <p className="text-xs text-gray-500 mb-2">Preview:</p>
        <hr
          style={{
            borderStyle: content.style,
            borderColor: content.color,
          }}
        />
      </div>
    </div>
  );
};

export default DividerEditor;

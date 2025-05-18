import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SpacerEditorProps {
  content: {
    height: string;
  };
  onChange: (content: any) => void;
}

const SpacerEditor = ({ content, onChange }: SpacerEditorProps) => {
  const heightOptions = [
    { label: "Small", value: "small", px: "16px" },
    { label: "Medium", value: "medium", px: "32px" },
    { label: "Large", value: "large", px: "64px" },
  ];

  return (
    <div className="space-y-3">
      <div>
        <Label htmlFor="height">Spacer Height</Label>
        <Select
          value={content.height}
          onValueChange={(value) => onChange({ height: value })}
        >
          <SelectTrigger id="height" className="mt-1">
            <SelectValue placeholder="Select height" />
          </SelectTrigger>
          <SelectContent>
            {heightOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label} ({option.px})
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="mt-2">
        <p className="text-xs text-gray-500 mb-2">Preview:</p>
        <div
          style={{
            height:
              content.height === "small"
                ? "16px"
                : content.height === "medium"
                  ? "32px"
                  : "64px",
            backgroundColor: "#f3f4f6",
            borderRadius: "4px",
          }}
        />
      </div>
    </div>
  );
};

export default SpacerEditor;

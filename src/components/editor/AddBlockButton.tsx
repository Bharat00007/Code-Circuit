import { BlockType } from "@/types/newsletter";
import { Button } from "@/components/ui/button";
import { PlusCircle, Type, Image, Link2, Minus, Square } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface AddBlockButtonProps {
  onAddBlock: (type: BlockType) => void;
  isDarkMode?: boolean;
}

const AddBlockButton = ({
  onAddBlock,
  isDarkMode = false,
}: AddBlockButtonProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className={`flex items-center ${isDarkMode ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-500 hover:bg-blue-600"}`}
        >
          <PlusCircle className="h-4 w-4 mr-2" />
          Add Block
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className={`w-48 ${isDarkMode ? "bg-gray-800 text-white border-gray-700" : ""}`}
      >
        <DropdownMenuItem
          onClick={() => onAddBlock("header")}
          className={isDarkMode ? "hover:bg-gray-700" : ""}
        >
          <Type className="h-4 w-4 mr-2" />
          <span>Heading</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => onAddBlock("text")}
          className={isDarkMode ? "hover:bg-gray-700" : ""}
        >
          <Type className="h-4 w-4 mr-2" />
          <span>Text</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => onAddBlock("image")}
          className={isDarkMode ? "hover:bg-gray-700" : ""}
        >
          <Image className="h-4 w-4 mr-2" />
          <span>Image</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => onAddBlock("button")}
          className={isDarkMode ? "hover:bg-gray-700" : ""}
        >
          <Link2 className="h-4 w-4 mr-2" />
          <span>Button</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => onAddBlock("divider")}
          className={isDarkMode ? "hover:bg-gray-700" : ""}
        >
          <Minus className="h-4 w-4 mr-2" />
          <span>Divider</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => onAddBlock("spacer")}
          className={isDarkMode ? "hover:bg-gray-700" : ""}
        >
          <Square className="h-4 w-4 mr-2" />
          <span>Spacer</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AddBlockButton;

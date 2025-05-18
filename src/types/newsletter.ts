export type BlockType =
  | "header"
  | "text"
  | "image"
  | "button"
  | "divider"
  | "spacer";

export interface NewsletterBlock {
  id: string;
  type: BlockType;
  content: any;
  styles?: {
    padding?: string;
    margin?: string;
    backgroundColor?: string;
  };
}

export interface NewsletterTemplate {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
  blocks: NewsletterBlock[];
  theme?: {
    primaryColor?: string;
    backgroundColor?: string;
    textColor?: string;
    fontFamily?: string;
  };
}

export interface TextBlockContent {
  text: string;
  fontFamily?: string;
  fontSize?: string;
  textColor?: string;
  alignment?: "left" | "center" | "right";
  isBold?: boolean;
  isItalic?: boolean;
}

export interface HeaderBlockContent {
  text: string;
  alignment: "left" | "center" | "right";
  size: "small" | "medium" | "large";
  color?: string;
  fontFamily?: string;
}

export interface ImageBlockContent {
  url: string;
  alt: string;
  alignment: "left" | "center" | "right";
  width?: string;
  height?: string;
  borderRadius?: string;
}

export interface ButtonBlockContent {
  text: string;
  url: string;
  backgroundColor: string;
  textColor: string;
  alignment: "left" | "center" | "right";
  borderRadius?: string;
  padding?: string;
}

export interface DividerBlockContent {
  style: "solid" | "dashed" | "dotted";
  color: string;
  spacing: "small" | "medium" | "large";
  width?: string;
}

export interface SpacerBlockContent {
  height: "small" | "medium" | "large" | "custom";
  customHeight?: string;
}

import { NewsletterTemplate } from "@/types/newsletter";

export const creativeTemplate: NewsletterTemplate = {
  id: "creative-portfolio",
  name: "Creative Portfolio",
  description: "Showcase your creative work with this artistic template",
  thumbnail:
    "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&q=80&w=2074",
  blocks: [
    {
      id: "header-1",
      type: "header",
      content: {
        text: "Creative Showcase • Summer 2025",
        alignment: "center",
        size: "large",
      },
    },
    {
      id: "text-1",
      type: "text",
      content: {
        text: "Exploring the intersection of design, art, and inspiration through vibrant, expressive works.",
        fontSize: "1.1rem",
        alignment: "center",
        isItalic: true,
      },
    },
    {
      id: "spacer-1",
      type: "spacer",
      content: {
        height: "medium",
      },
    },
    {
      id: "header-2",
      type: "header",
      content: {
        text: "Featured Project: Desert Dreams",
        alignment: "left",
        size: "medium",
      },
    },
    {
      id: "image-1",
      type: "image",
      content: {
        url: "https://images.unsplash.com/photo-1517016006573-0c278c121860?auto=format&fit=crop&w=800",
        alt: "Abstract desert art",
        alignment: "center",
      },
    },
    {
      id: "text-2",
      type: "text",
      content: {
        text: "This collection explores the ethereal beauty of desert landscapes through mixed media and digital techniques, capturing the shifting colors and textures of sand dunes at different times of day.",
        alignment: "left",
      },
    },
    {
      id: "button-1",
      type: "button",
      content: {
        text: "View Full Gallery",
        url: "#",
        backgroundColor: "#FF7E5F",
        textColor: "#ffffff",
        alignment: "left",
      },
    },
    {
      id: "divider-1",
      type: "divider",
      content: {
        style: "solid",
        color: "#FEB47B",
        spacing: "medium",
      },
    },
    {
      id: "header-3",
      type: "header",
      content: {
        text: "Recent Recognition",
        alignment: "left",
        size: "medium",
      },
    },
    {
      id: "text-3",
      type: "text",
      content: {
        text: "• Winner, International Digital Arts Competition 2025\n• Featured Artist, Modern Desert Gallery, June Exhibition\n• Cover Feature, Creative Design Magazine, Spring Issue\n• Selected for the Annual Contemporary Arts Showcase",
        alignment: "left",
      },
    },
    {
      id: "spacer-2",
      type: "spacer",
      content: {
        height: "medium",
      },
    },
    {
      id: "image-2",
      type: "image",
      content: {
        url: "https://images.unsplash.com/photo-1511406361295-0a1ff814c0ce?auto=format&fit=crop&w=800",
        alt: "Art gallery space",
        alignment: "center",
      },
    },
    {
      id: "header-4",
      type: "header",
      content: {
        text: "Upcoming Exhibition",
        alignment: "center",
        size: "medium",
      },
    },
    {
      id: "text-4",
      type: "text",
      content: {
        text: 'Join us for the opening night of "Mirages & Memories" at the Contemporary Gallery on August 15th, 7-10pm. RSVP for a complimentary drink and artist-led tour.',
        alignment: "center",
      },
    },
    {
      id: "button-2",
      type: "button",
      content: {
        text: "RSVP for Opening Night",
        url: "#",
        backgroundColor: "#FEB47B",
        textColor: "#ffffff",
        alignment: "center",
      },
    },
  ],
};

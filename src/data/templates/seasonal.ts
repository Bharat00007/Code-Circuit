import { NewsletterTemplate } from "@/types/newsletter";

export const seasonalTemplate: NewsletterTemplate = {
  id: "seasonal-collection",
  name: "Seasonal Collection",
  description: "Showcase seasonal products or content with elegant imagery",
  thumbnail:
    "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=2071",
  blocks: [
    {
      id: "header-1",
      type: "header",
      content: {
        text: "Summer Essentials Collection ☀️",
        alignment: "center",
        size: "large",
      },
    },
    {
      id: "image-1",
      type: "image",
      content: {
        url: "https://images.unsplash.com/photo-1500835556837-99ac94a94552?auto=format&fit=crop&w=800",
        alt: "Summer beach scene with palm trees",
        alignment: "center",
      },
    },
    {
      id: "text-1",
      type: "text",
      content: {
        text: "Embrace the season with our curated selection of summer must-haves, designed to elevate your warm-weather experience.",
        fontSize: "1.1rem",
        alignment: "center",
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
        text: "Featured Products",
        alignment: "left",
        size: "medium",
      },
    },
    {
      id: "image-2",
      type: "image",
      content: {
        url: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800",
        alt: "Summer clothing collection",
        alignment: "center",
      },
    },
    {
      id: "text-2",
      type: "text",
      content: {
        text: "Linen Breeze Collection",
        alignment: "center",
        isBold: true,
        fontSize: "1.1rem",
      },
    },
    {
      id: "text-3",
      type: "text",
      content: {
        text: "Our lightweight, breathable linen pieces are perfect for those hot summer days. Available in six earth-inspired colors.",
        alignment: "center",
      },
    },
    {
      id: "button-1",
      type: "button",
      content: {
        text: "Shop Collection",
        url: "#",
        backgroundColor: "#D6BCFA",
        textColor: "#4A5568",
        alignment: "center",
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
      id: "image-3",
      type: "image",
      content: {
        url: "https://images.unsplash.com/photo-1556229172-52fed396a8e3?auto=format&fit=crop&w=800",
        alt: "Summer accessories",
        alignment: "center",
      },
    },
    {
      id: "text-4",
      type: "text",
      content: {
        text: "Coastal Accessories",
        alignment: "center",
        isBold: true,
        fontSize: "1.1rem",
      },
    },
    {
      id: "text-5",
      type: "text",
      content: {
        text: "Complete your summer look with our handcrafted accessories, from woven straw hats to shell-inspired jewelry.",
        alignment: "center",
      },
    },
    {
      id: "button-2",
      type: "button",
      content: {
        text: "View Accessories",
        url: "#",
        backgroundColor: "#D6BCFA",
        textColor: "#4A5568",
        alignment: "center",
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
      id: "header-3",
      type: "header",
      content: {
        text: "Limited Time Offer",
        alignment: "center",
        size: "medium",
      },
    },
    {
      id: "text-6",
      type: "text",
      content: {
        text: "Enjoy 20% off your purchase with code SUMMER25 at checkout. Valid until July 31st.",
        alignment: "center",
        isBold: true,
      },
    },
    {
      id: "button-3",
      type: "button",
      content: {
        text: "Shop Now",
        url: "#",
        backgroundColor: "#FF7E5F",
        textColor: "#ffffff",
        alignment: "center",
      },
    },
  ],
};

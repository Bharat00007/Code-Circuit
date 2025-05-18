import { NewsletterTemplate } from "@/types/newsletter";

export const fashionTemplate: NewsletterTemplate = {
  id: "fashion-newsletter",
  name: "Fashion Trends",
  description: "Showcase the latest fashion trends with this stylish template",
  thumbnail:
    "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=2670",
  blocks: [
    {
      id: "header-1",
      type: "header",
      content: {
        text: "Style Guide: Summer 2025 ✨",
        alignment: "center",
        size: "large",
      },
    },
    {
      id: "image-1",
      type: "image",
      content: {
        url: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800",
        alt: "Summer fashion collection",
        alignment: "center",
      },
    },
    {
      id: "text-1",
      type: "text",
      content: {
        text: "Explore this season's hottest trends, must-have pieces, and styling tips for your perfect summer look.",
        fontSize: "1.1rem",
        alignment: "center",
      },
    },
    {
      id: "divider-1",
      type: "divider",
      content: {
        style: "solid",
        color: "#F48FB1",
        spacing: "medium",
      },
    },
    {
      id: "header-2",
      type: "header",
      content: {
        text: "Trend Alert: Sunset Hues",
        alignment: "center",
        size: "medium",
      },
    },
    {
      id: "image-2",
      type: "image",
      content: {
        url: "https://images.unsplash.com/photo-1545291730-faff8ca1d4b0?auto=format&fit=crop&w=800",
        alt: "Fashion model in sunset colors",
        alignment: "center",
      },
    },
    {
      id: "text-2",
      type: "text",
      content: {
        text: "This season's color palette draws inspiration from stunning sunset skies. Think warm corals, rich ambers, and soft lavenders - all perfectly complementing sun-kissed summer skin.",
        alignment: "left",
      },
    },
    {
      id: "text-3",
      type: "text",
      content: {
        text: "Key pieces to look for:\n• Coral slip dresses\n• Amber statement earrings\n• Gradient pattern maxi skirts\n• Lavender linen blazers",
        alignment: "left",
      },
    },
    {
      id: "button-1",
      type: "button",
      content: {
        text: "Shop the Sunset Collection",
        url: "#",
        backgroundColor: "#F06292",
        textColor: "#ffffff",
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
      id: "header-3",
      type: "header",
      content: {
        text: "Styling Tip of the Month",
        alignment: "left",
        size: "medium",
      },
    },
    {
      id: "text-4",
      type: "text",
      content: {
        text: "The Art of Layering for Unpredictable Summer Weather",
        alignment: "center",
        isBold: true,
        fontSize: "1.05rem",
      },
    },
    {
      id: "image-3",
      type: "image",
      content: {
        url: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&w=800",
        alt: "Summer layered outfit",
        alignment: "center",
      },
    },
    {
      id: "text-5",
      type: "text",
      content: {
        text: "Master the perfect balance between staying cool during hot days and warm during chilly evenings. Light fabrics, removable layers, and versatile pieces are your best friends.",
        alignment: "left",
      },
    },
    {
      id: "text-6",
      type: "text",
      content: {
        text: '"I never leave home without a lightweight scarf in summer - it\'s the perfect accessory for both style and practicality when temperatures drop in the evening." - Emma Stone, Fashion Editor',
        alignment: "left",
        isItalic: true,
      },
    },
    {
      id: "divider-2",
      type: "divider",
      content: {
        style: "solid",
        color: "#F48FB1",
        spacing: "medium",
      },
    },
    {
      id: "header-4",
      type: "header",
      content: {
        text: "Exclusive Offer",
        alignment: "center",
        size: "medium",
      },
    },
    {
      id: "text-7",
      type: "text",
      content: {
        text: "Use code SUMMER25 for 25% off your next purchase. Valid until July 31st.",
        alignment: "center",
        isBold: true,
      },
    },
    {
      id: "button-2",
      type: "button",
      content: {
        text: "Shop Now",
        url: "#",
        backgroundColor: "#EC407A",
        textColor: "#ffffff",
        alignment: "center",
      },
    },
  ],
};

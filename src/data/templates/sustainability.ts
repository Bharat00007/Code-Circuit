import { NewsletterTemplate } from "@/types/newsletter";

export const sustainabilityTemplate: NewsletterTemplate = {
  id: "sustainability-newsletter",
  name: "Eco-Friendly Living",
  description:
    "Perfect for sharing sustainability tips, eco news, and green initiatives",
  thumbnail:
    "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=2813",
  blocks: [
    {
      id: "header-1",
      type: "header",
      content: {
        text: "Green Living Journal 🌿",
        alignment: "center",
        size: "large",
      },
    },
    {
      id: "image-1",
      type: "image",
      content: {
        url: "https://images.unsplash.com/photo-1516571748831-5d81767b788d?auto=format&fit=crop&w=800",
        alt: "Lush green forest with sunlight",
        alignment: "center",
      },
    },
    {
      id: "text-1",
      type: "text",
      content: {
        text: "Discover sustainable living tips, environmental news, and ways to reduce your carbon footprint.",
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
        text: "This Month's Eco Challenge",
        alignment: "center",
        size: "medium",
      },
    },
    {
      id: "text-2",
      type: "text",
      content: {
        text: "Join our Plastic-Free July challenge! Each week, we'll focus on replacing single-use plastic items with sustainable alternatives.",
        alignment: "center",
        isBold: true,
      },
    },
    {
      id: "image-2",
      type: "image",
      content: {
        url: "https://images.unsplash.com/photo-1605600659868-205313527d51?auto=format&fit=crop&w=800",
        alt: "Reusable eco-friendly products",
        alignment: "center",
      },
    },
    {
      id: "button-1",
      type: "button",
      content: {
        text: "Accept the Challenge",
        url: "#",
        backgroundColor: "#2E7D32",
        textColor: "#ffffff",
        alignment: "center",
      },
    },
    {
      id: "divider-1",
      type: "divider",
      content: {
        style: "solid",
        color: "#66BB6A",
        spacing: "medium",
      },
    },
    {
      id: "header-3",
      type: "header",
      content: {
        text: "Sustainable Swap of the Month",
        alignment: "left",
        size: "medium",
      },
    },
    {
      id: "text-3",
      type: "text",
      content: {
        text: "Replace conventional cleaning products with these natural alternatives:",
        alignment: "left",
      },
    },
    {
      id: "text-4",
      type: "text",
      content: {
        text: "• White vinegar + water for windows and mirrors\n• Baking soda for scrubbing sinks and tubs\n• Castile soap for general cleaning\n• Lemon juice to remove stains and odors\n• Essential oils for natural fragrance",
        alignment: "left",
      },
    },
    {
      id: "image-3",
      type: "image",
      content: {
        url: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800",
        alt: "Natural cleaning ingredients",
        alignment: "center",
      },
    },
    {
      id: "text-5",
      type: "text",
      content: {
        text: "These alternatives are not only better for the environment but also safer for your home and family.",
        alignment: "center",
        isItalic: true,
      },
    },
    {
      id: "divider-2",
      type: "divider",
      content: {
        style: "solid",
        color: "#66BB6A",
        spacing: "medium",
      },
    },
    {
      id: "header-4",
      type: "header",
      content: {
        text: "Community Spotlight",
        alignment: "left",
        size: "medium",
      },
    },
    {
      id: "text-6",
      type: "text",
      content: {
        text: "This month, we're highlighting the amazing work of Urban Harvest, a community garden initiative that has transformed vacant lots into productive food gardens.",
        alignment: "left",
      },
    },
    {
      id: "button-2",
      type: "button",
      content: {
        text: "Learn More & Volunteer",
        url: "#",
        backgroundColor: "#388E3C",
        textColor: "#ffffff",
        alignment: "left",
      },
    },
  ],
};

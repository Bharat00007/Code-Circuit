import { NewsletterTemplate } from "@/types/newsletter";

export const productTemplate: NewsletterTemplate = {
  id: "product-launch",
  name: "Product Launch",
  description: "Announce your new product with style and drive conversions",
  thumbnail:
    "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&q=80&w=2787",
  blocks: [
    {
      id: "header-1",
      type: "header",
      content: {
        text: "Introducing Our Game-Changing Product",
        alignment: "center",
        size: "large",
      },
    },
    {
      id: "image-1",
      type: "image",
      content: {
        url: "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=800",
        alt: "Product showcase",
        alignment: "center",
      },
    },
    {
      id: "text-1",
      type: "text",
      content: {
        text: "We're excited to announce the launch of our revolutionary new product that's going to transform the way you work.",
        fontSize: "1.1rem",
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
      id: "header-2",
      type: "header",
      content: {
        text: "Key Features",
        alignment: "left",
        size: "medium",
      },
    },
    {
      id: "text-2",
      type: "text",
      content: {
        text: "• 2x faster performance than competitors\n• Intuitive interface designed for productivity\n• Smart automation to save you hours every week\n• Seamless integration with your existing tools",
        alignment: "left",
      },
    },
    {
      id: "image-2",
      type: "image",
      content: {
        url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800",
        alt: "Product features",
        alignment: "center",
      },
    },
    {
      id: "text-3",
      type: "text",
      content: {
        text: "Early adopters are already seeing amazing results with our product:",
        alignment: "center",
        isBold: true,
      },
    },
    {
      id: "text-4",
      type: "text",
      content: {
        text: '"This has completely transformed our workflow. We\'re saving 15 hours per week!"',
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
      id: "button-1",
      type: "button",
      content: {
        text: "Pre-order Now (25% Off)",
        url: "#",
        backgroundColor: "#FF7E5F",
        textColor: "#ffffff",
        alignment: "center",
      },
    },
  ],
};

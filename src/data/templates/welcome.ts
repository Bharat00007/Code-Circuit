import { NewsletterTemplate } from "@/types/newsletter";

export const welcomeTemplate: NewsletterTemplate = {
  id: "modern-welcome",
  name: "Modern Welcome",
  description:
    "A sleek, modern welcome email with bold typography and vibrant accents",
  thumbnail:
    "https://images.unsplash.com/photo-1587614387466-0a72ca909e16?auto=format&fit=crop&q=80&w=2787",
  blocks: [
    {
      id: "header-1",
      type: "header",
      content: {
        text: "Welcome to Our Community! 👋",
        alignment: "center",
        size: "large",
      },
    },
    {
      id: "image-1",
      type: "image",
      content: {
        url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800",
        alt: "Team collaboration",
        alignment: "center",
      },
    },
    {
      id: "text-1",
      type: "text",
      content: {
        text: "We're thrilled to have you join our growing community. You're now part of something special, and we can't wait to share our journey with you.",
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
      id: "text-2",
      type: "text",
      content: {
        text: "Here's what you can expect from us:",
        fontSize: "1.1rem",
        alignment: "left",
        isBold: true,
      },
    },
    {
      id: "text-3",
      type: "text",
      content: {
        text: "• Weekly updates on new features and improvements\n• Exclusive content and resources\n• Tips and tricks to get the most out of our platform\n• Community spotlights and success stories",
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
      id: "button-1",
      type: "button",
      content: {
        text: "Get Started Now",
        url: "#",
        backgroundColor: "#FF7E5F",
        textColor: "#ffffff",
        alignment: "center",
      },
    },
  ],
};

import { NewsletterTemplate } from "@/types/newsletter";

export const techTemplate: NewsletterTemplate = {
  id: "tech-newsletter",
  name: "Tech Newsletter",
  description: "Perfect for tech updates, product launches, and industry news",
  thumbnail:
    "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=2670",
  blocks: [
    {
      id: "header-1",
      type: "header",
      content: {
        text: "Tech Insider Weekly 🚀",
        alignment: "center",
        size: "large",
      },
    },
    {
      id: "image-1",
      type: "image",
      content: {
        url: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800",
        alt: "Tech devices on desk",
        alignment: "center",
      },
    },
    {
      id: "text-1",
      type: "text",
      content: {
        text: "Your weekly roundup of the most important tech news, product launches, and industry insights.",
        fontSize: "1.1rem",
        alignment: "center",
      },
    },
    {
      id: "divider-1",
      type: "divider",
      content: {
        style: "solid",
        color: "#6366F1",
        spacing: "medium",
      },
    },
    {
      id: "header-2",
      type: "header",
      content: {
        text: "This Week's Highlights",
        alignment: "left",
        size: "medium",
      },
    },
    {
      id: "text-2",
      type: "text",
      content: {
        text: "• Apple announces breakthrough AI features for next-gen devices\n• Google Cloud launches new serverless database solutions\n• Tesla achieves record quarterly deliveries\n• Microsoft releases major Windows update with enhanced security",
        alignment: "left",
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
        text: "Featured Article",
        alignment: "left",
        size: "medium",
      },
    },
    {
      id: "image-2",
      type: "image",
      content: {
        url: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800",
        alt: "Person using laptop with graphs",
        alignment: "center",
      },
    },
    {
      id: "text-3",
      type: "text",
      content: {
        text: "The Future of AI-Powered Development: How Machine Learning is Transforming Software Engineering",
        alignment: "center",
        isBold: true,
        fontSize: "1.05rem",
      },
    },
    {
      id: "text-4",
      type: "text",
      content: {
        text: "Artificial intelligence is revolutionizing how developers build and maintain software. From automated code generation to intelligent debugging tools, we explore how these technologies are changing the development landscape.",
        alignment: "left",
      },
    },
    {
      id: "button-1",
      type: "button",
      content: {
        text: "Read the Full Article",
        url: "#",
        backgroundColor: "#6366F1",
        textColor: "#ffffff",
        alignment: "center",
      },
    },
    {
      id: "divider-2",
      type: "divider",
      content: {
        style: "solid",
        color: "#6366F1",
        spacing: "medium",
      },
    },
    {
      id: "header-4",
      type: "header",
      content: {
        text: "Upcoming Tech Events",
        alignment: "left",
        size: "medium",
      },
    },
    {
      id: "text-5",
      type: "text",
      content: {
        text: "• DevCon 2025 - June 15-17, San Francisco\n• AI Summit - July 8-10, New York\n• Global Tech Forum - August 22-25, Berlin\n• Cybersecurity Conference - September 5-7, London",
        alignment: "left",
      },
    },
    {
      id: "button-2",
      type: "button",
      content: {
        text: "View All Events",
        url: "#",
        backgroundColor: "#4F46E5",
        textColor: "#ffffff",
        alignment: "left",
      },
    },
  ],
};

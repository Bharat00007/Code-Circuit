import { NewsletterTemplate } from "@/types/newsletter";

export const eventTemplate: NewsletterTemplate = {
  id: "event-invitation",
  name: "Event Invitation",
  description:
    "Drive attendance with this engaging event announcement template",
  thumbnail:
    "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=2940",
  blocks: [
    {
      id: "header-1",
      type: "header",
      content: {
        text: "You're Invited! 🎉",
        alignment: "center",
        size: "large",
      },
    },
    {
      id: "image-1",
      type: "image",
      content: {
        url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800",
        alt: "Event banner",
        alignment: "center",
      },
    },
    {
      id: "header-2",
      type: "header",
      content: {
        text: "Annual Developer Conference 2025",
        alignment: "center",
        size: "medium",
      },
    },
    {
      id: "text-1",
      type: "text",
      content: {
        text: "Join us for two days of inspiring talks, hands-on workshops, and networking opportunities with the best minds in tech.",
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
        text: "📆 June 15-16, 2025\n🕒 9:00 AM - 5:00 PM\n📍 Tech Convention Center, San Francisco",
        alignment: "center",
        isBold: true,
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
        text: "Featured Speakers",
        alignment: "left",
        size: "medium",
      },
    },
    {
      id: "text-3",
      type: "text",
      content: {
        text: "• Jane Smith - CEO of TechGiants\n• John Doe - AI Researcher\n• Sarah Johnson - UX Design Expert\n• Michael Wong - Security Specialist",
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
        text: "Reserve Your Spot",
        url: "#",
        backgroundColor: "#845EC2",
        textColor: "#ffffff",
        alignment: "center",
      },
    },
    {
      id: "text-4",
      type: "text",
      content: {
        text: "Limited seats available. Early bird pricing ends May 1st.",
        fontSize: "0.9rem",
        alignment: "center",
      },
    },
  ],
};

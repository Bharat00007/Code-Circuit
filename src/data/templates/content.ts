import { NewsletterTemplate } from "@/types/newsletter";

export const contentTemplate: NewsletterTemplate = {
  id: "content-newsletter",
  name: "Content Newsletter",
  description:
    "Share your latest articles, videos and updates with your audience",
  thumbnail:
    "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=2940",
  blocks: [
    {
      id: "header-1",
      type: "header",
      content: {
        text: "Weekly Insights & Updates",
        alignment: "center",
        size: "large",
      },
    },
    {
      id: "text-1",
      type: "text",
      content: {
        text: "Your curated roundup of this week's best content, insights, and inspiration.",
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
        text: "📚 Latest Articles",
        alignment: "left",
        size: "medium",
      },
    },
    {
      id: "image-1",
      type: "image",
      content: {
        url: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&w=800",
        alt: "Person writing",
        alignment: "center",
      },
    },
    {
      id: "header-3",
      type: "header",
      content: {
        text: "10 Productivity Tips That Actually Work",
        alignment: "left",
        size: "small",
      },
    },
    {
      id: "text-2",
      type: "text",
      content: {
        text: "Discover science-backed techniques to boost your productivity and achieve more in less time, without burning out.",
        alignment: "left",
      },
    },
    {
      id: "button-1",
      type: "button",
      content: {
        text: "Read Article",
        url: "#",
        backgroundColor: "#FF7E5F",
        textColor: "#ffffff",
        alignment: "left",
      },
    },
    {
      id: "divider-2",
      type: "divider",
      content: {
        style: "solid",
        color: "#FEB47B",
        spacing: "medium",
      },
    },
    {
      id: "header-4",
      type: "header",
      content: {
        text: "🎧 Featured Podcast",
        alignment: "left",
        size: "medium",
      },
    },
    {
      id: "image-2",
      type: "image",
      content: {
        url: "https://images.unsplash.com/photo-1589903308904-1010c2294adc?auto=format&fit=crop&w=800",
        alt: "Podcast recording",
        alignment: "center",
      },
    },
    {
      id: "text-3",
      type: "text",
      content: {
        text: "Listen to our latest interview with industry expert Jane Doe on the future of remote work and building high-performing distributed teams.",
        alignment: "left",
      },
    },
    {
      id: "button-2",
      type: "button",
      content: {
        text: "Listen Now",
        url: "#",
        backgroundColor: "#FF7E5F",
        textColor: "#ffffff",
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
      id: "text-4",
      type: "text",
      content: {
        text: "We hope you enjoyed this week's newsletter. Have feedback or suggestions? Reply directly to this email!",
        alignment: "center",
        fontSize: "0.9rem",
      },
    },
  ],
};

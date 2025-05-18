import { NewsletterTemplate } from "@/types/newsletter";

export const mindfulnessTemplate: NewsletterTemplate = {
  id: "lotus-mindfulness",
  name: "Lotus Mindfulness",
  description:
    "Perfect for wellness retreats, yoga studios, and mindfulness practices",
  thumbnail:
    "https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&q=80&w=2064",
  blocks: [
    {
      id: "header-1",
      type: "header",
      content: {
        text: "Find Your Inner Peace 🧘‍♀️",
        alignment: "center",
        size: "large",
      },
    },
    {
      id: "image-1",
      type: "image",
      content: {
        url: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800",
        alt: "Lotus flower on water",
        alignment: "center",
      },
    },
    {
      id: "text-1",
      type: "text",
      content: {
        text: "Welcome to our monthly mindfulness newsletter, where we share techniques to cultivate calm, clarity, and compassion in your everyday life.",
        fontSize: "1.1rem",
        alignment: "center",
      },
    },
    {
      id: "divider-1",
      type: "divider",
      content: {
        style: "solid",
        color: "#9b87f5",
        spacing: "medium",
      },
    },
    {
      id: "header-2",
      type: "header",
      content: {
        text: "This Month's Focus: Breathing Techniques",
        alignment: "center",
        size: "medium",
      },
    },
    {
      id: "text-2",
      type: "text",
      content: {
        text: "Conscious breathing is a powerful tool that can help you manage stress, improve focus, and connect with the present moment. Here are three techniques to try this month:",
        alignment: "left",
      },
    },
    {
      id: "text-3",
      type: "text",
      content: {
        text: "1. Box Breathing: Inhale for 4 counts, hold for 4, exhale for 4, hold for 4. Repeat.\n\n2. 4-7-8 Technique: Inhale for 4 counts, hold for 7, exhale for 8. Repeat 3-4 times.\n\n3. Alternate Nostril Breathing: Using your right thumb, close your right nostril and inhale through the left. Then close the left with your ring finger, release your thumb, and exhale through the right nostril.",
        alignment: "left",
      },
    },
    {
      id: "image-2",
      type: "image",
      content: {
        url: "https://images.unsplash.com/photo-1474418397713-2f1091953b8b?auto=format&fit=crop&w=800",
        alt: "Person meditating by the ocean",
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
        text: "Upcoming Retreat",
        alignment: "center",
        size: "medium",
      },
    },
    {
      id: "text-4",
      type: "text",
      content: {
        text: "Join us for a weekend of restoration and renewal at our upcoming Lotus Garden Retreat. Disconnect from technology and reconnect with yourself through guided meditation, yoga, and mindful walking.",
        alignment: "center",
      },
    },
    {
      id: "text-5",
      type: "text",
      content: {
        text: "📆 August 12-14, 2025\n🕒 Check-in Friday at 4:00 PM\n📍 Lotus Valley Retreat Center",
        alignment: "center",
        isBold: true,
      },
    },
    {
      id: "button-1",
      type: "button",
      content: {
        text: "Reserve Your Spot",
        url: "#",
        backgroundColor: "#9b87f5",
        textColor: "#ffffff",
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
      id: "text-6",
      type: "text",
      content: {
        text: '"The quieter you become, the more you can hear." — Ram Dass',
        alignment: "center",
        isItalic: true,
        fontSize: "0.95rem",
      },
    },
  ],
};

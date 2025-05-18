import { NewsletterTemplate } from "@/types/newsletter";

export const healthTemplate: NewsletterTemplate = {
  id: "health-wellness",
  name: "Health & Wellness",
  description: "Perfect for fitness programs, wellness tips, and health advice",
  thumbnail:
    "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=2620",
  blocks: [
    {
      id: "header-1",
      type: "header",
      content: {
        text: "Wellness Wednesday 🧘‍♀️",
        alignment: "center",
        size: "large",
      },
    },
    {
      id: "image-1",
      type: "image",
      content: {
        url: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800",
        alt: "Yoga at sunrise",
        alignment: "center",
      },
    },
    {
      id: "text-1",
      type: "text",
      content: {
        text: "Your weekly dose of health tips, workout inspiration, and mindfulness practices to help you live your best life.",
        fontSize: "1.1rem",
        alignment: "center",
      },
    },
    {
      id: "divider-1",
      type: "divider",
      content: {
        style: "solid",
        color: "#81C784",
        spacing: "medium",
      },
    },
    {
      id: "header-2",
      type: "header",
      content: {
        text: "This Week's Featured Workout",
        alignment: "left",
        size: "medium",
      },
    },
    {
      id: "image-2",
      type: "image",
      content: {
        url: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800",
        alt: "Person doing HIIT workout",
        alignment: "center",
      },
    },
    {
      id: "text-2",
      type: "text",
      content: {
        text: "15-Minute HIIT Workout: Maximum Results in Minimum Time",
        alignment: "center",
        isBold: true,
        fontSize: "1.05rem",
      },
    },
    {
      id: "text-3",
      type: "text",
      content: {
        text: "This high-intensity interval training workout requires no equipment and can be done anywhere. Perfect for busy days when you need an efficient fitness boost.",
        alignment: "left",
      },
    },
    {
      id: "text-4",
      type: "text",
      content: {
        text: "The Workout:\n• 30 seconds jumping jacks\n• 30 seconds mountain climbers\n• 30 seconds push-ups\n• 30 seconds plank\n• 30 seconds high knees\n\nRepeat 3 times with 15 seconds rest between exercises.",
        alignment: "left",
      },
    },
    {
      id: "button-1",
      type: "button",
      content: {
        text: "Full Workout Video",
        url: "#",
        backgroundColor: "#4CAF50",
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
      id: "header-3",
      type: "header",
      content: {
        text: "Nutrition Corner",
        alignment: "left",
        size: "medium",
      },
    },
    {
      id: "text-5",
      type: "text",
      content: {
        text: "Super Smoothie Recipe: Green Power Boost",
        alignment: "center",
        isBold: true,
      },
    },
    {
      id: "image-3",
      type: "image",
      content: {
        url: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?auto=format&fit=crop&w=800",
        alt: "Green smoothie",
        alignment: "center",
      },
    },
    {
      id: "text-6",
      type: "text",
      content: {
        text: "Ingredients:\n• 1 cup spinach\n• 1/2 banana\n• 1/4 avocado\n• 1 tbsp chia seeds\n• 1 cup almond milk\n• 1/2 cup ice\n• 1 tbsp honey (optional)\n\nBlend all ingredients until smooth. Enjoy immediately for maximum nutrient benefits.",
        alignment: "left",
      },
    },
    {
      id: "text-7",
      type: "text",
      content: {
        text: "This nutrient-packed smoothie is rich in vitamins, healthy fats, and antioxidants - perfect for a post-workout recovery or energizing breakfast.",
        alignment: "left",
        isItalic: true,
      },
    },
    {
      id: "divider-2",
      type: "divider",
      content: {
        style: "solid",
        color: "#81C784",
        spacing: "medium",
      },
    },
    {
      id: "header-4",
      type: "header",
      content: {
        text: "Wellness Challenge",
        alignment: "center",
        size: "medium",
      },
    },
    {
      id: "text-8",
      type: "text",
      content: {
        text: "This week, we challenge you to meditate for 5 minutes each morning. Set your alarm 5 minutes earlier, find a quiet space, and focus on your breath to start your day with clarity and calm.",
        alignment: "center",
      },
    },
    {
      id: "button-2",
      type: "button",
      content: {
        text: "Download Meditation Guide",
        url: "#",
        backgroundColor: "#388E3C",
        textColor: "#ffffff",
        alignment: "center",
      },
    },
  ],
};

import { NewsletterTemplate } from "@/types/newsletter";

export const culinaryTemplate: NewsletterTemplate = {
  id: "culinary-delights",
  name: "Culinary Delights",
  description: "Perfect for food blogs, recipes, and culinary adventures",
  thumbnail:
    "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&q=80&w=1980",
  blocks: [
    {
      id: "header-1",
      type: "header",
      content: {
        text: "Desert Cuisine: Flavors of the Southwest 🌵",
        alignment: "center",
        size: "large",
      },
    },
    {
      id: "image-1",
      type: "image",
      content: {
        url: "https://images.unsplash.com/photo-1559622214-f8a9850965bb?auto=format&fit=crop&w=800",
        alt: "Southwest cuisine table spread",
        alignment: "center",
      },
    },
    {
      id: "text-1",
      type: "text",
      content: {
        text: "Explore our new collection of sun-drenched recipes inspired by the rich culinary traditions of desert regions around the world.",
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
        text: "Recipe of the Month: Cactus & Citrus Salad",
        alignment: "left",
        size: "medium",
      },
    },
    {
      id: "image-2",
      type: "image",
      content: {
        url: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800",
        alt: "Vibrant salad plate",
        alignment: "center",
      },
    },
    {
      id: "text-2",
      type: "text",
      content: {
        text: "This refreshing summer dish combines tender nopalitos (cactus paddles) with bright citrus segments, avocado, and a honey-lime dressing for the perfect balance of tangy, sweet and savory flavors.",
        alignment: "left",
      },
    },
    {
      id: "text-3",
      type: "text",
      content: {
        text: "Ingredients:\n• 2 cups cleaned, diced nopalitos (cactus paddles)\n• 1 orange, segmented\n• 1 grapefruit, segmented\n• 1 avocado, diced\n• 1/4 cup red onion, thinly sliced\n• 3 tbsp fresh cilantro, chopped\n• 2 tbsp fresh lime juice\n• 1 tbsp honey\n• 3 tbsp olive oil\n• Salt and pepper to taste",
        alignment: "left",
      },
    },
    {
      id: "button-1",
      type: "button",
      content: {
        text: "View Full Recipe",
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
      id: "header-3",
      type: "header",
      content: {
        text: "Upcoming Culinary Workshop",
        alignment: "center",
        size: "medium",
      },
    },
    {
      id: "text-4",
      type: "text",
      content: {
        text: "Join Chef Maria Rodriguez for an interactive virtual cooking class exploring the traditional ingredients and techniques of Sonoran Desert cuisine.",
        alignment: "center",
      },
    },
    {
      id: "text-5",
      type: "text",
      content: {
        text: "📆 July 12, 2025\n🕒 6:00 PM - 8:00 PM (PST)\n💻 Zoom - Link provided upon registration",
        alignment: "center",
        isBold: true,
      },
    },
    {
      id: "button-2",
      type: "button",
      content: {
        text: "Register Now",
        url: "#",
        backgroundColor: "#FEB47B",
        textColor: "#ffffff",
        alignment: "center",
      },
    },
  ],
};

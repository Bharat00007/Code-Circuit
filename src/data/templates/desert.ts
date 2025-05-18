import { NewsletterTemplate } from "@/types/newsletter";

export const desertTemplate: NewsletterTemplate = {
  id: "desert-promotion",
  name: "Desert Adventure",
  description:
    "Promote desert adventures and experiences with this stunning template",
  thumbnail:
    "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&q=80&w=2076",
  blocks: [
    {
      id: "header-1",
      type: "header",
      content: {
        text: "Discover the Magic of Desert Adventures ✨",
        alignment: "center",
        size: "large",
      },
    },
    {
      id: "image-1",
      type: "image",
      content: {
        url: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800",
        alt: "Desert sunset with camels",
        alignment: "center",
      },
    },
    {
      id: "text-1",
      type: "text",
      content: {
        text: "Experience breathtaking landscapes, golden dunes, and unforgettable adventures in our exclusive desert retreat packages.",
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
        text: "This Month's Special Offer",
        alignment: "center",
        size: "medium",
      },
    },
    {
      id: "text-2",
      type: "text",
      content: {
        text: "Book any 3-day desert expedition before July 30th and receive a complimentary luxury tent upgrade and traditional dinner experience under the stars.",
        alignment: "center",
        isBold: true,
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
        text: "Popular Experiences",
        alignment: "left",
        size: "medium",
      },
    },
    {
      id: "image-2",
      type: "image",
      content: {
        url: "https://images.unsplash.com/photo-1515962187632-8d7d5ca8e2a8?auto=format&fit=crop&w=800",
        alt: "Hot air balloon over desert",
        alignment: "center",
      },
    },
    {
      id: "text-3",
      type: "text",
      content: {
        text: "• Hot Air Balloon Sunrise Tours\n• Desert Safari & Wildlife Encounters\n• Traditional Bedouin Camping Experience\n• Night Sky Astronomy Tours\n• Ancient Historical Site Visits",
        alignment: "left",
      },
    },
    {
      id: "button-1",
      type: "button",
      content: {
        text: "Explore All Experiences",
        url: "#",
        backgroundColor: "#FF7E5F",
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
      id: "text-4",
      type: "text",
      content: {
        text: '"The desert sunset tour exceeded all our expectations. It was truly a magical experience that we\'ll never forget." - Sarah M., April 2025',
        alignment: "center",
        isItalic: true,
        fontSize: "0.95rem",
      },
    },
    {
      id: "button-2",
      type: "button",
      content: {
        text: "Book Your Adventure Now",
        url: "#",
        backgroundColor: "#FEB47B",
        textColor: "#ffffff",
        alignment: "center",
      },
    },
  ],
};

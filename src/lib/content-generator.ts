import { v4 as uuidv4 } from "uuid";

// Enhanced function to generate realistic text content instead of lorem ipsum
const generateRealContent = (type = "general", paragraphs = 1) => {
  const contentOptions = {
    general: [
      "Our newsletter brings you the latest updates and insights from our community. Stay informed with our carefully curated content designed to inspire and educate.",
      "We're excited to share this month's highlights with you. From thoughtful analysis to practical tips, we've got everything you need to stay ahead.",
      "Thank you for being part of our growing community. This issue features exclusive content and special announcements you won't want to miss.",
      "We've prepared an exceptional selection of articles and resources for you this month. Dive in to discover valuable insights and inspiration.",
      "Welcome to our latest edition! We've gathered the most relevant information and compelling stories to keep you informed and engaged.",
    ],
    business: [
      "Discover powerful strategies to grow your business in today's competitive landscape. Our experts share actionable insights that drive results.",
      "This quarter's business forecast looks promising with new opportunities on the horizon. Learn how industry leaders are navigating these changes.",
      "Market trends are shifting rapidly. Stay ahead with our analysis of emerging patterns and expert predictions for the coming months.",
      "Effective leadership requires constant adaptation. Explore our featured case studies of successful business transformations and key lessons learned.",
      "Building resilient business models is more important than ever. Our latest research reveals what successful companies are doing differently.",
    ],
    creative: [
      "Creativity flourishes when we embrace new perspectives. This month we showcase innovative projects that challenge conventional thinking.",
      "The intersection of art and technology continues to produce fascinating results. Explore how creators are pushing boundaries in unexpected ways.",
      "Finding inspiration in everyday moments can transform your creative practice. Our featured artists share their sources of everyday inspiration.",
      "Color, form, and texture combine to create powerful emotional responses. Discover how top designers are using these elements in revolutionary ways.",
      "Creative expression speaks across cultural barriers. This issue celebrates diverse voices and their unique artistic contributions.",
    ],
    technology: [
      "Technology continues to evolve at an unprecedented pace. Stay informed about the latest advancements that are shaping our digital future.",
      "AI integration is revolutionizing how we approach everyday problems. Learn how these tools can enhance your productivity and decision-making.",
      "Digital security concerns affect everyone. Our security experts provide essential tips to protect your data and privacy online.",
      "The future of work is being redefined by technological innovation. Discover the skills that will remain relevant in an increasingly automated world.",
      "Sustainable technology is no longer optional. See how companies are balancing innovation with environmental responsibility.",
    ],
    health: [
      "Maintaining physical and mental wellbeing requires a holistic approach. Our health experts share practical advice for balanced living.",
      "Nutritional science continues to evolve. Learn about the latest research that might change how you think about your dietary choices.",
      "Movement is medicine. Explore simple ways to incorporate more physical activity into your daily routine for lasting health benefits.",
      "Sleep quality dramatically affects overall health. Discover evidence-based strategies for improving your sleep habits starting tonight.",
      "Mindfulness practices offer powerful benefits for stress management. Try these accessible techniques to center yourself during busy days.",
    ],
  };

  const selectedType = contentOptions[type] || contentOptions.general;
  const result = [];

  for (let i = 0; i < paragraphs; i++) {
    const randomIndex = Math.floor(Math.random() * selectedType.length);
    result.push(selectedType[randomIndex]);
  }

  return result.join("\n\n");
};


const generateReliableImageUrl = () => {
 
  const imageServices = [
   
    () =>
      `https://picsum.photos/seed/${Date.now()}${Math.floor(Math.random() * 1000)}/900/600`,
    
    () =>
      `https://placehold.co/900x600/e5e7eb/818cf8?text=Newsletter+Image&font=montserrat`,
  
    () =>
      `https://dummyimage.com/900x600/f3f4f6/6366f1&text=Newsletter+Content`,
  ];

  
  const serviceIndex = Math.floor(Math.random() * imageServices.length);
  return imageServices[serviceIndex]();
};


export const generateRandomBlock = (type: string) => {
  const contentTypes = [
    "general",
    "business",
    "creative",
    "technology",
    "health",
  ];
  const randomContentType =
    contentTypes[Math.floor(Math.random() * contentTypes.length)];

  const blockTypes: Record<string, any> = {
    header: {
      content: {
        text: [
          "Your Journey Begins Here",
          "Welcome to Our Community",
          "Discover What's New",
          "Insights & Inspiration",
          "The Innovation Quarterly",
          "Connecting Ideas & People",
          "Beyond the Horizon",
        ][Math.floor(Math.random() * 7)],
        level: "h1",
        alignment: ["left", "center", "right"][Math.floor(Math.random() * 3)],
      },
    },
    text: {
      content: {
        text: generateRealContent(
          randomContentType,
          Math.floor(Math.random() * 2) + 1,
        ),
        alignment: ["left", "center", "right", "justify"][
          Math.floor(Math.random() * 4)
        ],
      },
    },
    image: {
      content: {
        url: generateReliableImageUrl(),
        alt: [
          "Featured image",
          "Team collaboration",
          "Innovative technology",
          "Creative design",
          "Strategic planning",
          "Growth concept",
        ][Math.floor(Math.random() * 6)],
        alignment: ["left", "center", "right"][Math.floor(Math.random() * 3)],
      },
    },
    divider: {
      content: {
        style: ["solid", "dashed", "dotted"][Math.floor(Math.random() * 3)],
        width: ["25%", "50%", "75%", "100%"][Math.floor(Math.random() * 4)],
        color: ["#9b87f5", "#333333", "#666666", "#CCCCCC"][
          Math.floor(Math.random() * 4)
        ],
      },
    },
    button: {
      content: {
        text: [
          "Learn More",
          "Explore Now",
          "Subscribe Today",
          "Join Us",
          "Get Started",
        ][Math.floor(Math.random() * 5)],
        url: "#",
        style: ["primary", "secondary", "outline"][
          Math.floor(Math.random() * 3)
        ],
        alignment: ["left", "center", "right"][Math.floor(Math.random() * 3)],
      },
    },
    spacer: {
      content: {
        height: `${Math.floor(Math.random() * 4) + 1}rem`,
      },
    },
  };

  if (!blockTypes[type]) {
    console.error(`Unknown block type: ${type}`);
    return {
      id: uuidv4(),
      type: "text",
      content: { text: "Error: Invalid block type", alignment: "left" },
    };
  }

  return { id: uuidv4(), type, ...blockTypes[type] };
};

// Enhanced function to generate a complete newsletter structure with real content
export const generateNewsletterStructure = () => {
  return [
    {
      type: "header",
      content: {
        text: "Your Essential Newsletter",
        level: "h1",
        alignment: "center",
      },
    },
    { type: "spacer", content: { height: "1rem" } },
    {
      type: "text",
      content: {
        text: generateRealContent("general", 1),
        alignment: "center",
      },
    },
    { type: "spacer", content: { height: "1.5rem" } },
    {
      type: "image",
      content: {
        url: generateReliableImageUrl(),
        alt: "Featured content image",
        alignment: "center",
      },
    },
    { type: "spacer", content: { height: "1.5rem" } },
    {
      type: "header",
      content: {
        text: "This Month's Highlights",
        level: "h2",
        alignment: "left",
      },
    },
    {
      type: "text",
      content: {
        text: generateRealContent("business", 2),
        alignment: "justify",
      },
    },
    { type: "spacer", content: { height: "1rem" } },
    {
      type: "divider",
      content: {
        style: "solid",
        width: "75%",
        color: "#9b87f5",
      },
    },
    { type: "spacer", content: { height: "1rem" } },
    {
      type: "button",
      content: {
        text: "Read Full Article",
        url: "#",
        style: "primary",
        alignment: "center",
      },
    },
  ];
};

// Enhanced function to generate a magic structure animation with better visual feedback
export const applyMagicStructure = async (
  setBlocks: React.Dispatch<React.SetStateAction<any[]>>,
) => {
  // First add a loading animation class to the preview panel
  const previewPanel = document.querySelector(".preview-panel");
  if (previewPanel) {
    previewPanel.classList.add("magic-structure-animation");
  }

  // Generate a structured newsletter with multiple blocks using real content
  const contentTypes = ["business", "creative", "technology"];
  const randomType =
    contentTypes[Math.floor(Math.random() * contentTypes.length)];

  const magicStructure = [
    {
      id: uuidv4(),
      type: "header",
      content: {
        text: [
          "Monthly Insights",
          "Industry Perspectives",
          "Creative Showcase",
        ][Math.floor(Math.random() * 3)],
        level: "h1",
        alignment: "center",
      },
    },
    {
      id: uuidv4(),
      type: "spacer",
      content: { height: "1rem" },
    },
    {
      id: uuidv4(),
      type: "text",
      content: {
        text: generateRealContent(randomType, 1),
        alignment: "center",
      },
    },
    {
      id: uuidv4(),
      type: "spacer",
      content: { height: "1.5rem" },
    },
    {
      id: uuidv4(),
      type: "image",
      content: {
        url: generateReliableImageUrl(),
        alt: "Featured section image",
        alignment: "center",
      },
    },
    {
      id: uuidv4(),
      type: "spacer",
      content: { height: "1.5rem" },
    },
    {
      id: uuidv4(),
      type: "header",
      content: {
        text: ["Key Developments", "Latest Trends", "Expert Analysis"][
          Math.floor(Math.random() * 3)
        ],
        level: "h2",
        alignment: "left",
      },
    },
    {
      id: uuidv4(),
      type: "text",
      content: {
        text: generateRealContent(randomType, 2),
        alignment: "justify",
      },
    },
    {
      id: uuidv4(),
      type: "spacer",
      content: { height: "1rem" },
    },
    {
      id: uuidv4(),
      type: "button",
      content: {
        text: ["Read More", "Learn More", "Explore Now"][
          Math.floor(Math.random() * 3)
        ],
        url: "#",
        style: "primary",
        alignment: "center",
      },
    },
  ];

  // Simulate loading to show animation
  await new Promise((resolve) => setTimeout(resolve, 1200));

  // Update the blocks
  setBlocks(magicStructure);

  // Remove the animation class after a short delay
  setTimeout(() => {
    if (previewPanel) {
      previewPanel.classList.remove("magic-structure-animation");
    }
  }, 500);

  return magicStructure;
};

export default generateRandomBlock;

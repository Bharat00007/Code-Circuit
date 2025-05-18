import { NewsletterTemplate } from "@/types/newsletter";
import { blankTemplate } from "./blank";
import { welcomeTemplate } from "./welcome";
import { productTemplate } from "./product";
import { eventTemplate } from "./event";
import { contentTemplate } from "./content";
import { desertTemplate } from "./desert";
import { creativeTemplate } from "./creative";
import { culinaryTemplate } from "./culinary";
import { mindfulnessTemplate } from "./mindfulness";
import { seasonalTemplate } from "./seasonal";
import { techTemplate } from "./tech";
import { sustainabilityTemplate } from "./sustainability";
import { fashionTemplate } from "./fashion";
import { healthTemplate } from "./health";

// Combine all templates into one array
export const newsletterTemplates: NewsletterTemplate[] = [
  blankTemplate,
  welcomeTemplate,
  productTemplate,
  eventTemplate,
  contentTemplate,
  desertTemplate,
  creativeTemplate,
  culinaryTemplate,
  mindfulnessTemplate,
  seasonalTemplate,
  techTemplate, // New template
  sustainabilityTemplate, // New template
  fashionTemplate, // New template
  healthTemplate, // New template
];

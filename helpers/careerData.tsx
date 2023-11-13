type DescriptionText = string;
type FeatureList = { id: number; title: string; description: string };

export const FormDescription: DescriptionText = `Don't miss your opportunity! Fill out the form right now and join our team!`;
export const MainDescription: DescriptionText =
  "Your chance to join our passionate team in Carpathian tourism. Seeking talented professionals to share our common mission.";

export const featureList: FeatureList[] = [
  {
    id: 1,
    title: "Professional development",
    description:
      "We offer growth opportunities and a creative environment to nurture your talents.",
  },
  {
    id: 2,
    title: "Teamwork",
    description:
      "Join our close-knit family, where support and inspiration abound.",
  },
  {
    id: 3,
    title: "Stimulating work environment",
    description: "Flexibility and remote options for a comfortable experience.",
  },
  {
    id: 4,
    title: "Exciting challenges",
    description:
      "Unleash your potential through unforgettable projects showcasing Carpathian beauty.",
  },
];

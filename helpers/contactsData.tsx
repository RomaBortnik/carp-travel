type Phone = { id: number; text: string; number: string };
type SocialNetworks = { id: number; text: string; url: string };

export const phones: Phone[] = [
  { id: 1, text: "+38 (098) 12 34 567", number: "+380981234567" },
  { id: 2, text: "+38 (073) 12 34 567", number: "+380731234567" },
];

export const socialNetworks: SocialNetworks[] = [
  { id: 1, text: "facebook", url: "https://www.facebook.com/" },
  { id: 2, text: "instagram", url: "https://www.instagram.com/" },
  { id: 3, text: "youtube", url: "https://www.youtube.com/" },
  { id: 4, text: "tiktok", url: "https://www.tiktok.com/" },
];

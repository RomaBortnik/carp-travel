// import Image from "next/image";

import { Header } from "@/components/Header/Header";
import { SectionAbout } from "@/components/SectionAbout/SectionAbout";
import { SectionCareer } from "@/components/SectionCareer/SectionCareer";
import { SectionContacts } from "@/components/SectionContacts/SectionContacts";
import { SectionGallery } from "@/components/SectionGallery/SectionGallery";
import { SectionHero } from "@/components/SectionHero/SectionHero";
import { SectionServices } from "@/components/SectionServices/SectionServices";

export default function Home() {
  return (
    <main>
      <Header />
      <SectionHero />
      <SectionAbout />
      <SectionServices />
      <SectionCareer />
      <SectionGallery />
      <SectionContacts />
    </main>
  );
}

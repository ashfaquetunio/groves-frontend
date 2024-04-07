
import AboutSection from "@/components/home/about-section";
import BookTicketSection from "@/components/home/book-ticket-section";
import CuisineSection from "@/components/home/cuisine-section";
import ExperienceSection from "@/components/home/experience-section";
import Hero from "@/components/home/hero";
import NavigationSection from "@/components/home/navigation-section";

export default function Home() {
  return (
    <main className="min-w-0 -mt-[110px] lg:-mt-[150px]">
      <Hero />
      <AboutSection />
      <BookTicketSection />
      <CuisineSection />
      <ExperienceSection />
      <NavigationSection />
    </main>
  );
}

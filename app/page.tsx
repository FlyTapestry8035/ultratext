import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ProductDemo from "@/components/ProductDemo";
import Trust from "@/components/Trust";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import UseCases from "@/components/UseCases";
import Capabilities from "@/components/Capabilities";
import Vision from "@/components/Vision";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Ultra Text",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Ultra Text connects your emails, documents, meetings, chats, financial systems, and business tools into a living context layer that every AI can understand.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <main>
        <Hero />
        <ProductDemo />
        <Trust />
        <Problem />
        <Solution />
        <UseCases />
        <Capabilities />
        <Vision />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

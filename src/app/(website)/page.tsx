import Brand from "@/components/sections/brand";
import FAQ from "@/components/sections/faq";
import Featured from "@/components/sections/featured";
import Hero from "@/components/sections/hero";
import Ingredients from "@/components/sections/ingredients";
import News from "@/components/sections/news";

export default function Home() {
  return (
    <div>
      <Hero />
      <Featured />
      <Ingredients />
      <News />
      <Brand />
      <FAQ />
    </div>
  );
}

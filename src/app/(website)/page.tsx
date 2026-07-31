import Featured from "@/components/sections/featured";
import Hero from "@/components/sections/hero";
import Ingredients from "@/components/sections/ingredients";
import News from "@/components/sections/news";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <Featured />
      <Ingredients />
      <News />
    </div>
  );
}

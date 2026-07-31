import Button from "../ui/button";

const faqs = [
  { text: "Sind ipalat® Halspastillen vegan?" },
  {
    text: "Sind ipalat® Halspastillen für Diabetiker:innen geeignet?",
  },
  { text: "Sind ipalat® Halspastillen für Kinder geeignet?" },
  {
    text: "Wie viele ipalat® Halspastillen darf ich am Tag lutschen?",
  },
  {
    text: "Können ipalat® Halspastillen in der Schwangerschaft oder während der Stillzeit eingenommen werden?",
  },
];

export default function FAQ() {
  return (
    <section className="custom-container px-5 md:px-10 py-27 md:py-52">
      <div className="border-b border-primary py-7.5 md:py-16.25">
        <div className="text-primary text-[60px] leading-17.5 font-[950]">
          ipalat<sup>®</sup>
        </div>
        <div className="text-primary text-[30px] md:text-[40px] leading-10 md:leading-11.25 font-extrabold pt-8.75">
          Wo kann ich ipalat<sup>®</sup> Halspastillen kaufen?
        </div>
        <div className="text-text-primary text-[20px] md:text-[30px] leading-7.5 md:leading-11">
          ipalat<sup>®</sup> Halspastillen sind in Apotheken erhältlich. Dort
          bekommst du nicht nur ein qualitativ hochwertiges Produkt, sondern
          auch kompetente Beratung zu den einzelnen Varianten und
          Geschmacksrichtungen.
        </div>
        <div className="flex justify-end">
          <div className="h-1.25 bg-primary w-[30%]"></div>
        </div>
      </div>
      <div className="flex flex-col gap-7.5 md:gap-15 py-7.5 md:py-15">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-primary">
            <div className="text-[30px] md:text-[40px] leading-10 md:leading-11.25 text-primary font-extrabold">
              {faq.text}
            </div>
            <div className="flex justify-end">
              <Button variant="red">
                <span className="text-[40px] md:text-[60px] leading-10 md:leading-17.5">
                  mehr...
                </span>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

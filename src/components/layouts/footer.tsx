import Image from "next/image";
import Typography from "../typography/typography";
import Link from "next/link";

const links = [
  { label: "Kontakt", href: "/" },
  { label: "Impressum", href: "/" },
  { label: "Datenschutz", href: "/" },
];

const socialLinks = [
  { icon: "/footer/linkdin.png", href: "/" },
  { icon: "/footer/instagram.png", href: "/" },
];
export default function Footer() {
  return (
    <div className="bg-primary">
      <div className="container custom-container px-5.25 md:px-11.25 py-5 md:py-26.75 flex justify-between gap-5">
        <div className="flex flex-col gap-0.75 md:gap-2.5 max-w-29 md:max-w-90">
          <span className="text-[10px] md:text-[15px] lg:text-[20px] font-normal text-white leading-3.75">
            Ein Produkt von
          </span>
          <Image
            src="/footer/footer-logo.png"
            alt="footer logo"
            height={87}
            width={360}
          />
        </div>
        <div className="flex items-center gap-5.5 md:gap-8.25">
          {socialLinks.map((link, index) => (
            <Link href={link.href} key={index}>
              <Image src={link.icon} alt="icon" height={88} width={88} className="max-w-9.75 md:max-w-22"/>
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-0 md:gap-7.5">
          {links.map((link, index) => (
            <Link href={link.href} key={index}>
              <span className="text-[12px] md:text-[21px] lg:text-[30px] leading-7.5 md:leading-10 font-[950] text-white underline">{link.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

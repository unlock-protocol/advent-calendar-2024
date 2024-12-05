// components/Footer.tsx
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CreditsModal from "./CreditsModal";

type FooterLink = {
  text: string;
  url: string;
  onClick?: () => void;
};

const Footer = () => {
  const [showCredits, setShowCredits] = useState(false);
  const footerLinks: FooterLink[] = [
    {
      text: "Keychain",
      url: "#",
    },
    {
      text: "ETH Bolivia",
      url: "https://www.ethereumbolivia.org/",
    },
    {
      text: "Raffle",
      url: "#",
    },
    {
      text: "Unlock Help",
      url: "https://unlock-protocol.com",
    },
    {
      text: "ALANA Project",
      url: "https://the-alana-project.xyz/",
    },
    {
      text: "Credits",
      url: "#",
      onClick: () => setShowCredits(true),
    },
  ];
  return (
    <>
      {showCredits && <CreditsModal setShowCredits={setShowCredits} />}
      <footer className='relative mt-24 py-8 text-white font-semibold w-full bg-tertiary/60'>
        <div className='container mx-auto px-4 lg:px-16 xl:px-40 flex flex-col md:flex-row justify-between items-start gap-4'>
          <div className='flex self-center md:ml-8'>
            <Link href='https://unlock-protocol.com' target='_blank'>
              <Image
                src='/images/unlock.svg'
                alt='Unlock DAO'
                width='147'
                height='32'
              />
            </Link>
          </div>

          <div className='self-center mt-4 grid grid-cols-3 grid-rows-2 gap-4 text-sm'>
            {footerLinks.map((link) => (
              <Link
                key={link.text}
                href={link.url}
                target={link.url.startsWith("http") ? "_blank" : undefined}
                className='text-center md:text-left hover:text-cream transition-colors'
                onClick={link.onClick ? link.onClick : () => {}}
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
};

/* const creators = [
  {
    role: "Project Lead",
    name: "Ceci Sakura",
    nameLink: "https://www.linkedin.com/in/cecilia-contreras-castro/",
  },
  {
    role: "Project Lead & Design",
    name: "Stella Achenbach",
    nameLink: "https://www.linkedin.com/in/stella-achenbach-9a57722b/",
  },
  {
    role: "3D Renderings",
    name: "The ALANA Project",
    nameLink: "https://www.linkedin.com/company/93306418/admin/dashboard/",
  },
  {
    role: "Tech Lead",
    name: "Julien Genestoux",
    nameLink: "https://www.linkedin.com/in/juliengenestoux/",
  },
  {
    role: "Backend Developer",
    name: "Manuel Elias",
    nameLink: "https://www.linkedin.com/in/juan-manuel-elias-soria/",
  },
  {
    role: "Frontend Developer",
    name: "TomAtomic",
    nameLink: "https://www.linkedin.com/in/tomatomicdev/",
  },
];
 */
export default Footer;

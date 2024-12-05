// components/CreditsModal.tsx
import Link from "next/link";
import { Hurricane } from "next/font/google";
const hurricane = Hurricane({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
interface Creator {
  role: string;
  name: string;
  nameLink: string;
}

interface CreditsModalProps {
  setShowCredits: (show: boolean) => void;
}

const creators = [
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
    name: "Tom Atomic",
    nameLink: "https://www.linkedin.com/in/tomatomicdev/",
  },
];

const CreditsModal = ({ setShowCredits }: CreditsModalProps) => {
  return (
    <>
      <div
        className='backdrop-blur-sm flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none p-5'
        onClick={() => setShowCredits(false)}
      >
        <div
          className='relative w-auto mx-auto max-w-2xl bg-cream rounded-lg'
          onClick={(e) => e.stopPropagation()}
        >
          <div className='rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none p-8'>
            <h1
              className={`${hurricane.className} text-6xl font-bold text-center mb-8`}
            >
              Thank You
            </h1>

            <div className='grid grid-cols-2 gap-4'>
              {creators.map((creator) => (
                <>
                  <p className='text-end'>{creator.role}</p>
                  <Link
                    href={creator.nameLink}
                    target='_blank'
                    className='ml-4 font-semibold text-primary hover:text-primary/80 font-bold'
                  >
                    {creator.name}
                  </Link>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='opacity-50 fixed inset-0 z-40 bg-black'></div>
    </>
  );
};

export default CreditsModal;

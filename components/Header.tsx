import Link from "next/link";
import { toast } from "react-hot-toast";
import { useAuth } from "../hooks/useAuth";
import Image from "next/image";

function truncate(text = "", startChars = 5, endChars = 3, maxLength = 11) {
  if (text.length > maxLength) {
    var start = text.substring(0, startChars);
    var end = text.substring(text.length - endChars, text.length);
    while (start.length + end.length < maxLength) {
      start = start + ".";
    }
    return start + end;
  }
  return text;
}

const Header = () => {
  const { login, logout, wallet } = useAuth();

  return (
    <nav className='container relative'>
      <div className='flex space-x-4 sm:space-x-8 h-16 items-center mb-8'>
        <span className='grow flex'>
          <Link
            href='https://unlock-protocol.com'
            target='_blank'
            className='pl-0 md:pl-8'
          >
            <Image
              src='/images/unlock-dao.svg'
              alt='Unlock DAO'
              width='147'
              height='32'
            />
          </Link>
        </span>
        {wallet ? (
          <button
            className='cursor-pointer bg-cream text-primary font-bold p-2 rounded-full text-center'
            onClick={() => {
              logout();
            }}
          >
            Logout{" "}
            <span className='hidden md:inline'>({truncate(wallet)})</span>
          </button>
        ) : (
          <button
            className='cursor-pointer bg-cream text-primary font-bold px-1 md:p-2 rounded-full text-center uppercase'
            onClick={() => {
              toast("Loading Privy to log in you in...");
              login();
            }}
          >
            Connect wallet
          </button>
        )}
      </div>
    </nav>
  );
};

export default Header;

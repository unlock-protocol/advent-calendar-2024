import Link from 'next/link';
import { toast } from 'react-hot-toast';
import { useAuth } from '../hooks/useAuth';

function truncate(text = '', startChars = 5, endChars = 3, maxLength = 11) {
  if (text.length > maxLength) {
    var start = text.substring(0, startChars);
    var end = text.substring(text.length - endChars, text.length);
    while (start.length + end.length < maxLength) {
      start = start + '.';
    }
    return start + end;
  }
  return text;
}

const Header = () => {
  const { login, logout, wallet } = useAuth();

  return (
    <nav className='container relative'>
      <div className='pr-4 flex space-x-4 sm:space-x-8 h-16 items-center mb-8'>
        <span className='grow'></span>
        <Link
          className='text-white hidden sm:inline-flex hover:underline'
          target='_blank'
          href='https://app.unlock-protocol.com/keychain'
        >
          Keychain
        </Link>
        <Link
          className='text-white hidden sm:inline-flex hover:underline'
          target='_blank'
          href='https://twitter.com/unlockProtocol'
        >
          Twitter
        </Link>
        <Link
          className='text-white hidden sm:inline-flex hover:underline'
          target='_blank'
          href='https://discord.com/invite/Ah6ZEJyTDp'
        >
          Discord
        </Link>
        {wallet?.address ? (
          <button
            className='w-48 cursor-pointer text-white font-bold py-2 px-4 rounded-full whitespace-nowrap '
            onClick={() => {
              logout();
            }}
          >
            Logout{' '}
            <span className='hidden md:inline'>
              ({truncate(wallet?.address)})
            </span>
          </button>
        ) : (
          <button
            className='w-48 cursor-pointer text-white font-bold py-2 px-4 rounded-full whitespace-nowrap '
            onClick={() => {
              toast('Loading Privy to log in you in...');
              login();
            }}
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Header;

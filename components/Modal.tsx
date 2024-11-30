/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import useClipboard from 'react-use-clipboard';
import days from '../lib/days';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { BsTwitter } from 'react-icons/bs';
import { FiExternalLink } from 'react-icons/fi';
import { SlMagnifier } from 'react-icons/sl';
import { SiOpensea } from 'react-icons/si';
import { FaClipboard, FaClipboardCheck } from 'react-icons/fa';
import Image from 'next/image';
import { AppConfig } from '../lib/AppConfig';
import toast from 'react-hot-toast';
interface Content {
  title?: string;
  description?: string;
  image?: string;
  role?: string;
  link?: string;
}
interface ModalProps {
  user: any;
  day: number;
  setShowModal: (show: boolean) => void;
  network: number;
  lock: string;
  tokenId: string;
}

const Modal = ({ network, lock, tokenId, day, setShowModal }: ModalProps) => {
  const [content, setContent] = useState<Content | null>(null);
  const shareUrl = `${AppConfig.siteUrl}?d=${day}&r=${tokenId}`;

  const [isCopied, setCopied] = useClipboard(shareUrl);
  const tweetIntent = new URL('https://x.com/intent/tweet');
  tweetIntent.searchParams.set(
    'text',
    `🎁 I have just unlocked Day ${day} of the @UnlockProtocol advent calendar!`
  );
  tweetIntent.searchParams.set('url', shareUrl);

  const openSeaLink =
    network === 8453
      ? `https://opensea.io/assets/base/${lock}`
      : `https://testnets.opensea.io/assets/goerli/${lock}`;

  useEffect(() => {
    setContent(days[day - 1]);
  }, [day]);

  if (!content) {
    return <></>;
  }

  const copyToClipboard = () => {
    setCopied();
    toast.success('Copied URL to clipboard! Share away!');
  };

  return (
    <>
      <div
        className='backdrop-blur-sm justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none p-5'
        onClick={() => setShowModal(false)}
      >
        <div
          className='relative w-auto mx-auto max-w-sm  bg-cream rounded-lg'
          onClick={(e) => e.stopPropagation()}
        >
          <div className='rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none p-4'>
            {/*body*/}
            <div className='relative flex-auto'>
              <div className='rounded-lg border-2 border-primary overflow-hidden'>
                {content.image && (
                  <>
                    <Link
                      href={openSeaLink}
                      target='_blank'
                      className='absolute top-0 right-0 p-2 rounded-bl-lg z-10'
                    >
                      <FiExternalLink className='text-primary text-2xl' />
                    </Link>
                    <div className='aspect-w-1 aspect-h-1'>
                      <Image fill alt='Unlock NFT' src={content.image} />
                    </div>
                  </>
                )}
              </div>
              <h4 className='text-xl mt-4 font-bold uppercase'>
                {content.title}
              </h4>
              <h5 className='text-sm font-semibold'>{content.role}</h5>

              <div className='my-4 text-xs'>
                <ReactMarkdown className='markdown' skipHtml={false}>
                  {content.description!}
                </ReactMarkdown>
              </div>
            </div>
            <div className='flex justify-end rounded-b gap-2'>
              <Link
                target='_blank'
                className='bg-primary text-white font-bold py-2 px-4 rounded-full text-center uppercase '
                href={tweetIntent.toString()}
              >
                Tweet this
              </Link>
              {content.link && (
                <Link
                  className='bg-primary text-white font-bold py-2 px-4 rounded-full text-center uppercase '
                  href={content.link!}
                  target='_blank'
                >
                  Learn more
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className='opacity-50 fixed inset-0 z-40 bg-black '></div>
    </>
  );
};

export default Modal;

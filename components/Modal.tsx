/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import useClipboard from 'react-use-clipboard';
import days from '../lib/days';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { BsTwitter } from 'react-icons/bs';
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
  youtube?: string;
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
  const tweetIntent = new URL('https://twitter.com/intent/tweet');
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
      <div className='backdrop-blur-sm justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none p-5'>
        <div className="relative w-auto mx-auto max-w-3xl  bg-[url('/images/modal-background.png')] rounded-2xl border-8">
          <div className='rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none p-8 '>
            {/*body*/}
            <div className='relative flex-auto text-white'>
              <div className='rounded-2xl overflow-hidden'>
                {content.image && (
                  <div className='aspect-w-16 aspect-h-9'>
                    <Image
                      width='1080'
                      height='768'
                      alt='money'
                      src={content.image}
                    />
                  </div>
                )}
                {content.youtube && (
                  <div className='aspect-w-16 aspect-h-9'>
                    <iframe
                      src={content.youtube}
                      frameBorder='0'
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                      allowFullScreen
                    ></iframe>
                  </div>
                )}
              </div>
              <h3 className='text-3xl mt-8 font-semibold'>{content.title}</h3>
              <div className='my-4 text-lg leading-relaxed'>
                <ReactMarkdown className='markdown' skipHtml={false}>
                  {content.description!}
                </ReactMarkdown>
              </div>
            </div>
            <div className='container min-w-full sm:flex-row flex items-center justify-center rounded-b flex-col gap-4'>
              {content.link && (
                <Link
                  className='border whitespace-nowrap bg-white text-black font-bold py-2 px-4 mt-3 rounded  w-full text-center'
                  href={content.link!}
                  target='_blank'
                >
                  <SlMagnifier className='inline-block mr-2' />
                  Learn more
                </Link>
              )}

              {day == 8 && (
                <button
                  className='border whitespace-nowrap bg-white text-black font-bold py-2 px-4 mt-3 rounded  w-full text-center'
                  onClick={copyToClipboard}
                >
                  {isCopied ? (
                    <FaClipboardCheck className='inline-block mr-2' />
                  ) : (
                    <FaClipboard className='inline-block mr-2' />
                  )}
                  Copy URL to share!
                </button>
              )}

              <Link
                target='_blank'
                className='border whitespace-nowrap bg-white text-black font-bold py-2 px-4 mt-3 rounded  w-full text-center'
                href={tweetIntent.toString()}
              >
                <BsTwitter className='inline-block mr-2' />
                Tweet this
              </Link>

              <Link
                target='_blank'
                className='border whitespace-nowrap bg-white text-black font-bold py-2 px-4 mt-3 rounded  w-full text-center'
                href={openSeaLink}
              >
                <SiOpensea className='inline-block mr-2' />
                Check your NFT
              </Link>
            </div>
          </div>

          <div className='container space-x-2 min-w-full flex-row flex items-center justify-center my-8'>
            <span
              onClick={() => setShowModal(false)}
              className='text-lg text-white cursor-pointer'
            >
              Close
            </span>
          </div>
        </div>
      </div>
      <div className='opacity-50 fixed inset-0 z-40 bg-black '></div>
    </>
  );
};

export default Modal;

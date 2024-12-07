import { Analytics } from "@vercel/analytics/react";
import Snowfall from "react-snowfall";
import Head from "next/head";
import Header from "../components/Header";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Calendar } from "../components/Calendar";
import { AppConfig } from "../lib/AppConfig";
import { GetTokens } from "../components/GetTokens";
import { Hurricane } from "next/font/google";
import Image from "next/image";
import Footer from "../components/Footer";

const hurricane = Hurricane({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
export default function Home() {
  const start = 1;
  const days = new Array(24).fill(0).map((d, i) => i + start);
  const searchParams = useSearchParams();

  return (
    <>
      <Head>
        <title>2024 Unlock Advent Calendar</title>
        <meta property='og:title' content={AppConfig.name} key='title' />
        <meta
          property='og:description'
          content={AppConfig.description}
          key='description'
        />
        <meta
          property='og:image'
          content={`${AppConfig.siteUrl}/images/unlock-protocol-advent-calendar.png`}
        />
        <meta property='og:url' content={AppConfig.siteUrl} />
        <meta property='og:type' content='website' />

        <meta property='eth:nft:collection' content={AppConfig.name} />
        <meta
          property='eth:nft:creator_address'
          content='unlock-protocol.eth'
        />
        <meta property='eth:nft:mint_url' content={AppConfig.siteUrl} />
        <meta property='eth:nft:mint_status' content='live' />
        <meta property='eth:nft:schema' content='erc721' />
        <meta property='eth:nft:chain' content='base' />
        <FcFrame />
        <link rel='shortcut icon' href='/favicon.ico' type='image/png' />
      </Head>
      <div className="bg-[#141b26] bg-[url('/images/light-blur-background.svg')] bg-no-repeat bg-center bg-cover relative min-h-screen">
        <Snowfall
          style={{
            position: "fixed",
            width: "100vw",
            height: "100vh",
          }}
        />
        <div className='flex flex-col'>
          <div className=''>
            <Header />
            <main className='container mx-auto px-4 lg:px-16 xl:px-40 relative flex-1 flex flex-col gap-4'>
              <div className='text-white'>
                <h1 className={`${hurricane.className} text-8xl text-white`}>
                  Your Advent Calendar 2024
                </h1>
                <p className='mt-4 ml-2 text-xl font-semibold'>
                  Brought to you by{" "}
                  <Link target='_blank' href='https://unlock-protocol.com'>
                    Unlock DAO
                  </Link>
                  ,{" "}
                  <Link target='_blank' href='https://www.ethereumbolivia.org/'>
                    ETH Bolivia
                  </Link>{" "}
                  &{" "}
                  <Link target='_blank' href='https://the-alana-project.xyz/'>
                    The ALANA Project
                  </Link>
                </p>
              </div>
              <GetTokens />
              <Calendar />
            </main>
            <Footer />
          </div>
        </div>
      </div>

      <Analytics />
    </>
  );
}

function FcFrame() {
  return (
    <>
      <meta property="fc:frame"
      content="vNext" /><meta property="fc:frame:image:aspect_ratio"
      content="1.91:1" /><meta property="fc:frame:image"
      content="https://unlock-protocol-calendar.vercel.app/api/start-image" /><meta
      property="og:image"
      content="https://unlock-protocol-calendar.vercel.app/api/start-image" /><meta
      property="og:title" content="Unlock Protocol Advent Calendar" /><meta
      property="fc:frame:post_url"
      content="https://unlock-protocol-calendar.vercel.app/api?initialPath=%252Fapi&amp;previousButtonValues=%2523A_" /><meta
      property="fc:frame:button:1" content="Start" /><meta
      property="fc:frame:button:1:action" content="post" /><meta
      property="fc:frame:button:1:target"
      content="https://unlock-protocol-calendar.vercel.app/api/calendar?initialPath=%252Fapi&amp;previousButtonValues=%2523A_" /><meta
      property="frog:version" content="0.18.2" />
    </>
  );
}

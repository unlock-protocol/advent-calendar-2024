import { Analytics } from "@vercel/analytics/react";
import Snowfall from "react-snowfall";
import Head from "next/head";
import Header from "../components/Header";
import Link from "next/link";
import { Calendar } from "../components/Calendar";
import { AppConfig } from "../lib/AppConfig";
import { GetTokens } from "../components/GetTokens";
import { Hurricane } from "next/font/google";
import Footer from "../components/Footer";

const hurricane = Hurricane({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
export default function Home() {
  return (
    <>
      <Head>
        <title>2024 Unlock Advent Calendar</title>
       {/* ----- FRAME START ------ */}

{/* Using App directory you don't need to manually create the meta tags
./app/page.tsx

import { getFrameMetadata } from 'frog/web'

export async function generateMetadata(): Promise<Metadata> {
  const frameTags = await getFrameMetadata(
    `${process.env.VERCEL_URL || 'http://localhost:3000'}/frame`,
  )
  return {
    other: frameTags,
  }
} 
  
  */}

  <meta property="fc:frame"
  content="vNext" />
<meta property="fc:frame:image:aspect_ratio"
  content="1.91:1" />
<meta property="fc:frame:image"
  content={`${AppConfig.siteUrl}/frame/start-image`} />
<meta
property="og:image"
  content={`${AppConfig.siteUrl}/frame/start-image`} />
<meta 
  property="og:title" content="Unlock Protocol Advent Calendar" />
<meta
property="fc:frame:post_url"
  content={`${AppConfig.siteUrl}/frame?initialPath=%252Fframe&amp;previousButtonValues=%2523A_`} />
<meta
  property="fc:frame:button:1" content="Start" />
<meta
  property="fc:frame:button:1:action" content="post" />
<meta
property="fc:frame:button:1:target"
  content={`${AppConfig.siteUrl}/frame/calendar?initialPath=%252Fframe&amp;previousButtonValues=%2523A_`} />
<meta
property="frog:version" content="0.18.2" />

        {/* ----- FRAME END ------ */}
        
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

import type { NextPage } from "next";
import {
  Layout,
  Landing,
  WhyCloudax,
  EcoSystem,
  Team,
  Blog,
  FAQSection,
  Roadmap,
  Tokenomics,
  Join,
  CloudaxRoadmap,
} from "../components";

import { LandingFooter } from "../components/Utilities";

const Home: NextPage = () => {
  return (
    <Layout>
      <Landing />
      {/* <LandingFooter /> */}
      <WhyCloudax />
      <Join />
      <Tokenomics />
      <CloudaxRoadmap />
      {/* <EcoSystem /> */}
      {/* <div className="relative">
        <Roadmap
          icon="/icon-images/IMG_0842.PNG"
          h1="Wallet"
          p="Easy-to-use wallet built to protect your digital assets with industry-leading security mechanisms.  It is designed to support thousands of tokens and store your crypto and NFTs safely. The Cloudax wallet is simple and user-friendly."
          image="/background/wallet.JPG"
          left={true}
        />

        <Roadmap
          icon="/icon-images/IMG_0846.PNG"
          h1="NFT marketplace"
          p="A Native marketplace to serve as the secondary exchange of Non-Fungible Tokens launched within the Cloudax ecosystem. Cloudax NFT is a market for digital collectibles and artworks of all kinds. In this marketplace, users may purchase, sell, and search for unique digital content."
          image="/background/NFT Illus.png"
          left={false}
        />

        <Roadmap
          icon="/icon-images/IMG_0848.PNG"
          h1="Launchpad"
          p="Top tier incubator for the next generation of user-friendly blockchain applications and products, especially one that  promote, publish or offer faith-based and/or wholesome utility. The DEX-based Launchpad will allow investors to participate in early crypto projects before they are publicly listed."
          image="/background/luunch.JPG"
          left={true}
        />

        <Roadmap
          icon="/icon-images/IMG_0850.PNG"
          h1="Exchange"
          p="Cloudax Deccentralized Exchange (DEX) will enable users trade cryptocurrencies with low transaction fees. It will be integrated with the Cloudax wallet. Users of the exchange will have the ability to earn interests by staking and lending their tokens."
          image="/background/IMG_0865.JPG"
          left={false}
        />

        <Roadmap
          icon="/icon-images/IMG_0852.PNG"
          h1="E-commerce"
          p="Cloudax's E-commerce feature will serve as a bridge between physical items and digital assets. The CLDX tokens will be used to purchase everyday items thereby providing more liquidity for your favourite cryptocurrency."
          image="/background/commerce.JPG"
          left={true}
        />
      </div> */}
      <Team />
      <Blog />
      <FAQSection />
    </Layout>
  );
};

export default Home;

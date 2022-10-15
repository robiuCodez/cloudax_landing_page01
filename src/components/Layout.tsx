import Head from "next/head";
import React, { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
import ReactFullpage from "@fullpage/react-fullpage";

interface ILayout {
  children: ReactNode;
  title?: string;
}

// anchors
const anchors = [
  "about",
  "token_info",
  "ecosystem",
  "team",
  "faqs",
  "community",
];

const Layout = ({ children, title = "Home - Cloudax" }: ILayout) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <meta name="ttitle" content="Cloudax" />
        <meta name="description" content="Cloudax..." />
        {/* <meta
          name="twitter:image"
          content="https://nextjs-typescript-react-stripe-js.now.sh/social_card.png"
        /> */}
      </Head>
      <main className="font-lexend relative">
        <Header />
        {children}
        <Footer />
      </main>
    </>
  );
};

// const Fullpage = () => (
//   <ReactFullpage
//   render={({ state, fullpageApi }) => {
//     return (
//       <ReactFullpage.Wrapper>
//         <main className="font-lexend relative">
//           <Header />
//           {children}
//           <Footer />

//         </main>
//       </ReactFullpage.Wrapper>
//     );
//   }}
//    />
// )

export default Layout;

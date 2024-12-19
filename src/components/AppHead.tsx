import React from "react";
import NextHead from "next/head";

// TODO: Update these for your university!
const defaultDescription =
  "We are a nonprofit org of student engineers, designers, activists, and humanitarians. We build powerful, impactful software as a tool for social good";
const defaultOGURL = "https://youth-lighthouse.vercel.app";
const defaultOGImage =
  "https://static.logiqbits.com/cms/temp/as25fbu5psftkuoqmz2mob8hvm5ucm-1734605633924-631141466youth-lighthouse.jpg";
const title = "Youth LightHouse";

export const AppHead = () => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>Youth LightHouse</title>
    <meta name="description" content={defaultDescription} />
    {/* Global Site Tag (gtag.js) - Google Analytics */}
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=UA-124593378-1"
    />
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <link
      rel="apple-touch-icon"
      sizes="200x200"
      href="/icons/favicon-200.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/icons/favicon-32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="100x100"
      href="/icons/favicon-100.png"
    />

    <link rel="stylesheet" type="text/css" href="/style.css" />
    <link rel="stylesheet" type="text/css" href="/react-toast.css" />
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
      integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
      crossOrigin="anonymous"
    />

    <link rel="mask-icon" href="/favicon-mask.svg" color="#49B882" />
    <meta property="og:url" content={defaultOGURL} />
    <meta property="og:title" content={title ?? ""} />
    <meta property="og:description" content={defaultDescription} />
    <meta name="twitter:site" content={defaultOGURL} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={defaultOGImage} />
    <meta property="og:image" content={defaultOGImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
  </NextHead>
);

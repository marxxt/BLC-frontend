// components/layout/Head.tsx
import Head from "next/head";

export default function CustomHead() {
  return (
    <Head>
      <title>Blue Ledger Capital - Financial Solutions</title>
      <meta
        name="description"
        content="Transform your financial landscape with innovative solutions designed to accelerate your business growth and maximize opportunities."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Favicons */}
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/images/icons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/images/icons/favicon-16x16.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#2563eb" />
      <meta name="msapplication-TileColor" content="#2563eb" />
      <meta name="theme-color" content="#ffffff" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://blueledgercapital.com/" />
      <meta
        property="og:title"
        content="Blue Ledger Capital - Financial Solutions"
      />
      <meta
        property="og:description"
        content="Transform your financial landscape with innovative solutions designed to accelerate your business growth and maximize opportunities."
      />
      <meta property="og:image" content="/og-image.png" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://blueledgercapital.com/" />
      <meta
        property="twitter:title"
        content="Blue Ledger Capital - Financial Solutions"
      />
      <meta
        property="twitter:description"
        content="Transform your financial landscape with innovative solutions designed to accelerate your business growth and maximize opportunities."
      />
      <meta property="twitter:image" content="/og-image.png" />
    </Head>
  );
}

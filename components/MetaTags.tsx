import Head from "next/head";
import { memo } from "react";

export type MetaTagsProps = Partial<{
  title: string;
  description: string;
  canonical: string;
  image: string;
}>;

function MetaTags(props: MetaTagsProps) {
  const {
    title,
    description = "Compre seu NTF",
    canonical,
    image = "https://www.propernoun.co/static/images/proper-noun-social.png",
  } = props;

  const pageTitle = title ? `${title} | CodersNTF` : "CodersNTF";

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="og:title" property="og:title" content={pageTitle} />
      <meta
        name="og:description"
        property="og:description"
        content={description}
      />
      <meta
        property="og:site_name"
        content="CodersNTF - Plataforma de Marketplace"
      />
      <meta property="og:url" content={`${canonical}`} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:site" content="eventify" />
      <meta name="twitter:creator" content="XCode Tecnologia" />
      <meta property="og:image" content={image} />
      {image && <meta name="twitter:image" content={image} />}
      {canonical && <link rel="canonical" href={canonical} />}
      <link rel="shortcut icon" href="logo.svg" type="image/x-icon" />
    </Head>
  );
}

export default memo(MetaTags);

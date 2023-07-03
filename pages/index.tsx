import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { Heading } from "@chakra-ui/react";

import i18nConfig from "../next-i18next.config";

export default function Home() {
  return (
    <>
      <Heading>Hello</Heading>
    </>
  );
}

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"], i18nConfig as any)),
      // Will be passed to the page component as props
    },
  };
}

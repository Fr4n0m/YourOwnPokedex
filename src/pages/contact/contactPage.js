import React from "react";
import { useRouter } from "next/navigation";
import PortfolioHeader from "@/components/portfolioComponents/PortfolioHeader";
import PortfolioFooter from "@/components/portfolioComponents/PortfolioFooter";
import { Helmet } from "react-helmet";
import BackButton from "@/components/BackButtonComponent";

export default function contact() {
  const router = useRouter;
  return (
    <>
      <Helmet>
        <title>Francisco Rodríguez</title>
        <link rel="icon" href="/assets/icons/logo.ico"></link>
      </Helmet>

      <PortfolioHeader />
      <PortfolioFooter />
    </>
  );
}

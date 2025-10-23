"use client";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { Header } from "@gloireondongo/d-via-design-system";

function HeaderModern() {
  const router = useRouter();
  const pathname = usePathname();
  const isOnArtisanPage = pathname === "/artisans";

  const handleClick = () => {
    if (isOnArtisanPage) {
      router.push("/coming");
    } else {
      router.push("/dashboard/clients");
    }
  };

  const handleClickHome = () => {
    router.push("/");
  };

  const navigation = [
    { label: "Pour les clients", href: "/", active: pathname === "/" },
    { label: "Pour les artisans", href: "/artisans", active: pathname === "/artisans" },
    ...(pathname !== "/artisans" ? [{
      label: "Tarifs",
      href: "/pricing",
      active: pathname === "/pricing",
    }] : []),
    ...(pathname === "/artisans" ? [{
      label: "Abonnements",
      href: "/coming",
      active: false,
    }] : []),
  ];

  return (
    <Header
      logo={{
        src: "/logos/logo.png",
        alt: "Logo D-Via",
        width: 120,
        height: 40,
      }}
      navigation={navigation}
      ctaButton={{
        label: isOnArtisanPage
          ? "Commencer en tant qu'artisan"
          : "Commencer en tant que client",
        onClick: handleClick,
        variant: "primary",
      }}
      variant="default"
      showMobileMenu={true}
    />
  );
}

export default HeaderModern;


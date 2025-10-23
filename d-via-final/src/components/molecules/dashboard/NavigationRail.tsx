"use client";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { NavigationRail } from "@gloireondongo/d-via-design-system";

function NavigationRailDvia() {
  const pathname = usePathname();
  const router = useRouter();
  
  const handleClickHome = () => {
    router.push("/");
  };

  const navigationItems = [
    {
      id: 'analysis',
      label: 'Analyse de devis',
      icon: '/dashboard/quick_reference_all.svg',
      activeIcon: '/dashboard/active/quick_reference_all.svg',
      href: '/dashboard/clients',
      onClick: () => router.push("/dashboard/clients"),
    },
    {
      id: 'artisans',
      label: 'Artisans',
      icon: '/dashboard/search.svg',
      activeIcon: '/dashboard/active/search.svg',
      href: '/dashboard/clients/search',
      onClick: () => router.push("/dashboard/clients/search"),
    },
    {
      id: 'articles',
      label: 'Articles',
      icon: '/dashboard/articles.svg',
      activeIcon: '/dashboard/active/articles.svg',
      href: '/coming',
      onClick: () => router.push("/coming"),
    },
  ];

  const getActiveItem = () => {
    if (pathname === "/dashboard/clients") return 'analysis';
    if (pathname === "/dashboard/clients/search") return 'artisans';
    if (pathname === "/dashboard/articles") return 'articles';
    return 'analysis';
  };

  return (
    <NavigationRail
      items={navigationItems}
      activeItem={getActiveItem()}
      logo={{
        src: "/logos/Picto.png",
        alt: "Logo",
        width: 48,
        height: 48,
        onClick: handleClickHome,
      }}
      variant="default"
      expandOnHover={true}
    />
  );
}

export default NavigationRailDvia;

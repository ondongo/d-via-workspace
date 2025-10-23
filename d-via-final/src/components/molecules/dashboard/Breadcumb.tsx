"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { Breadcrumb } from "@gloireondongo/d-via-design-system";

interface BreadcumbProps {
  title?: string;
}

function Breadcumb({ title }: BreadcumbProps) {
  const pathname = usePathname();

  const getBreadcrumbTitle = () => {
    switch (pathname) {
      case "/dashboard/clients":
        return "Analyse de devis";
      case "/dashboard/clients/search":
        return "Trouver des artisans";
      case "/dashboard/clients/blog":
        return "Articles et Blog";
      default:
        return "Analyse de devis";
    }
  };

  return (
    <div className="px-6">
      <Breadcrumb
        title={title || getBreadcrumbTitle()}
        variant="simple"
      />
    </div>
  );
}

export default Breadcumb;

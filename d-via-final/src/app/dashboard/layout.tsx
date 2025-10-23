"use client";
import Breadcumb from "@/components/molecules/dashboard/Breadcumb";
import NavigationRailDvia from "@/components/molecules/dashboard/NavigationRail";
import { BottomNavigation } from "@d-via/design-system";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="hidden md:block">
          <NavigationRailDvia />
        </div>

        <div className="mb-[100px] md:mb-[0px] md:ml-[100px] transition-all duration-300">
          <div className="mt-5">
            <Breadcumb />
            <div className="w-full flex justify-center items-center mt-4">
              {children}
            </div>
          </div>
        </div>

        <div className="block md:hidden">
          <BottomNavigation
            items={[
              {
                id: 'analysis',
                label: 'Analyse de devis',
                icon: '/dashboard/quick_reference_all.svg',
                activeIcon: '/dashboard/active/quick_reference_all.svg',
                href: '/dashboard/clients',
              },
              {
                id: 'artisans',
                label: 'Artisans',
                icon: '/dashboard/search.svg',
                activeIcon: '/dashboard/active/search.svg',
                href: '/dashboard/clients/search',
              },
              {
                id: 'articles',
                label: 'Articles',
                icon: '/dashboard/articles.svg',
                activeIcon: '/dashboard/active/articles.svg',
                href: '/coming',
              },
            ]}
            activeItem="analysis"
            variant="dashboard"
          />
        </div>
      </body>
    </html>
  );
}

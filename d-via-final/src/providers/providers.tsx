"use client";

import React from "react";
import { GlobalStateProvider } from "./globalState";
import { LocationProvider } from "./LocationProvider";

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <LocationProvider>
      <GlobalStateProvider defaultCity="Paris">{children}</GlobalStateProvider>
    </LocationProvider>
  );
};

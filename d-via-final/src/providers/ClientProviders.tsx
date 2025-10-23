"use client";

import React from "react";
import { GlobalStateProvider } from "./globalState";
import { LocationProvider } from "./LocationProvider";

interface ClientProvidersProps {
  children: React.ReactNode;
}

export function ClientProviders({ children }: ClientProvidersProps) {
  return (
    <LocationProvider>
      <GlobalStateProvider defaultCity="Paris">{children}</GlobalStateProvider>
    </LocationProvider>
  );
}

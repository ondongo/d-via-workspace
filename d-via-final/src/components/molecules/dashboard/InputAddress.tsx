"use client";
import React from "react";
import { AddressInput } from "@d-via/design-system";

type NominatimResult = {
  display_name: string;
  lat: string;
  lon: string;
};

function InputAddress() {
  return (
    <div className="min-w-[250px] max-w-[250px] p-4 flex flex-col rounded-xl px-16 md:px-4">
      <AddressInput
        placeholder="Où êtes-vous situé ?"
        onChange={(value) => console.log('Address changed:', value)}
        onSelect={(address) => console.log('Address selected:', address)}
      />
    </div>
  );
}

export default InputAddress;

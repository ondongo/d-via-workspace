"use client";
import { PricingCard } from "@d-via/design-system";

const tiers = [
  {
    name: "Pack découverte",
    id: "pack-5",
    href: "/coming",
    price: "8.99",
    description: "Créditez votre compte pour analyser 10 devis avec l'IA.",
    features: ["10 crédits d'analyse de devis", "Utilisable à tout moment"],
    featured: false,
  },
  {
    name: "Pack pro",
    id: "pack-20",
    href: "/coming",
    price: "29.99",
    description: "Idéal pour un usage plus régulier ou professionnel.",
    features: [
      "30 crédits d'analyse de devis",
      "Utilisable à tout moment",
      "Sans expiration",
    ],
    featured: true,
  },
];

export default function Pricing() {
  return (
    <div className="relative isolate px-6 py-12 sm:py-32 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="mx-auto aspect-1155/678 w-288.75 bg-linear-to-tr from-[#e5451d] to-[#f97c27] opacity-30"
        />
      </div>
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-base/7 font-semibold text-dviaprimary-40">
          Tarifs
        </h2>
        <p className="mt-2 hidden md:block text-[54px] font-bold leading-display-large tracking-display-large text-dvianeutral-10 text-center">
          Achetez des crédits pour <br />
          <span className="text-dviaprimary-40">analyser vos devis</span>
        </p>
      </div>

      <p className="mt-4 font-normal text-title-small leading-title-small tracking-title-small gap-5 md:text-[20px] text-dvianeutral-10 md:leading-headline-small  md:tracking-headline-small md:mb-10 text-center">
        Des packs de crédits à utiliser à votre rythme. <br /> Chaque crédit
        correspond à une analyse complète de devis par notre IA
      </p>
      
      <div className="mx-auto mt-8 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
        {tiers.map((tier, tierIdx) => (
          <PricingCard
            key={tier.id}
            id={tier.id}
            name={tier.name}
            price={tier.price}
            description={tier.description}
            features={tier.features}
            href={tier.href}
            featured={tier.featured}
            buttonText="Acheter maintenant"
            currency="€"
            tierIdx={tierIdx}
            isMultiple={true}
            onSelect={(id) => console.log(`Plan sélectionné: ${id}`)}
          />
        ))}
      </div>
    </div>
  );
}

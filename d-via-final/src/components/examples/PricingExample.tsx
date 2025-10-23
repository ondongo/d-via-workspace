import React from "react";
import { PricingCard } from "@d-via/design-system";

export function PricingExample() {
  const pricingPlans = [
    {
      id: "pack-5",
      name: "Pack découverte",
      price: "8.99",
      description: "Créditez votre compte pour analyser 10 devis avec l'IA.",
      features: [
        "10 crédits d'analyse de devis",
        "Utilisable à tout moment",
        "Support par email",
        "Rapports PDF simples",
      ],
      href: "/coming",
      buttonText: "Commencer",
    },
    {
      id: "pack-20",
      name: "Pack pro",
      price: "29.99",
      description: "Idéal pour un usage plus régulier ou professionnel.",
      features: [
        "30 crédits d'analyse de devis",
        "Utilisable à tout moment",
        "Sans expiration",
        "Support prioritaire",
        "Rapports détaillés",
        "Export Excel",
      ],
      href: "/coming",
      featured: true,
      popular: true,
      buttonText: "Choisir ce plan",
    },
    {
      id: "pack-50",
      name: "Pack entreprise",
      price: "79.99",
      description: "Pour les entreprises qui ont besoin de plus de fonctionnalités.",
      features: [
        "100 crédits d'analyse de devis",
        "Utilisable à tout moment",
        "Sans expiration",
        "Support dédié 24/7",
        "Rapports personnalisés",
        "API complète",
        "Formation en ligne",
        "Gestion multi-utilisateurs",
      ],
      href: "/coming",
      buttonText: "Nous contacter",
    },
  ];

  return (
    <div className="py-12">
      <div className="mx-auto max-w-4xl text-center mb-12">
        <h2 className="text-3xl font-bold text-dvianeutral-80 mb-4">
          Tarifs
        </h2>
        <p className="text-lg text-dvianeutral-60">
          Choisissez le plan qui correspond à vos besoins
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {pricingPlans.map((plan) => (
          <PricingCard
            key={plan.id}
            {...plan}
            currency="€"
            period=""
            onSelect={(id) => console.log(`Plan sélectionné: ${id}`)}
          />
        ))}
      </div>
    </div>
  );
}

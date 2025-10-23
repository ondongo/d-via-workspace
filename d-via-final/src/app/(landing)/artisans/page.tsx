"use client";
import { CardGridScroll } from "@d-via/design-system";
import { LeftSection } from "@/components/molecules/landing-artisan/LeftSection";
import { StepsSection } from "@/components/molecules/StepsSection";
import MapComponent from "@/components/molecules/landing-artisan/Maps";
import React from "react";
import { FaqsSection } from "@/components/molecules/FaqsSection";

function page() {
  return (
    <div className="flex flex-col h-auto gap-12 lg:gap-[90px] py-10 sm:py-12 lg:py-14 px-4 sm:px-8 lg:px-16 overflow-hidden">
      <div className="flex flex-col md:flex-row  gap-12">
        <div className="w-full md:w-1/2">
          <LeftSection />
        </div>
        <div className="w-full md:w-1/2">
          <MapComponent />
        </div>
      </div>
      <StepsSection
        title="Gagner du temps avec D-VIA,"
        highlight="c’est facile !"
        subtitle="Découvrez comment simplifier la gestion de vos demandes clients en trois étapes simples."
        steps={[
          {
            icon: "/icons/iconuser.svg",
            text: "Créez votre profil en quelques étapes",
          },
          {
            icon: "/icons/iconsuccess.svg",
            text: "Faites valider votre expertise",
          },
          {
            icon: "/icons/add_chart.svg",
            text: "Recevez des demandes de clients qualifiés",
          },
        ]}
      />
      <CardGridScroll 
        artisans={[
          {
            id: '1',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
            name: 'Jean Dupont',
            location: 'Rennes',
            job: 'Plombier',
            rating: 5,
            completed: 127,
          },
          {
            id: '2',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
            name: 'Marie Martin',
            location: 'Nantes',
            job: 'Électricienne',
            rating: 4,
            completed: 89,
          },
          {
            id: '3',
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
            name: 'Pierre Durand',
            location: 'Brest',
            job: 'Maçon',
            rating: 5,
            completed: 203,
          },
        ]}
        title="Nos artisans partenaires"
        subtitle="Découvrez les professionnels qualifiés de votre région"
      />
      <FaqsSection
        title="Questions fréquentes"
        subtitle="Voici les questions les plus fréquentes que se posent nos artisans."
        faqs={[
          {
            question: "Combien coûte l'inscription sur la plateforme ?",
            answer: `L'inscription de base est gratuite. 
        Nous proposons aussi des formules premium à partir de 29€/mois, avec des fonctionnalités avancées pour vous aider à décrocher plus de missions. 
        Vous ne payez que lorsque vous recevez des demandes qualifiées.`,
          },
          {
            question: "Comment sont vérifiés les profils des artisans ?",
            answer: `Tous les profils sont vérifiés manuellement par notre équipe. 
        Nous nous assurons que chaque artisan respecte nos critères de qualité pour garantir des prestations fiables aux clients.`,
          },
          {
            question: "Puis-je choisir ma zone d'intervention ?",
            answer: `Oui, vous pouvez définir vos zones d’intervention préférées directement dans votre espace personnel. 
        Cela vous permet de recevoir uniquement des demandes correspondant à votre secteur géographique.`,
          },
        ]}
        isArtisan={true}
      />
    </div>
  );
}

export default page;

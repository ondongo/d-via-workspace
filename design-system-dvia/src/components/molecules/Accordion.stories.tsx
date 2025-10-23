import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from './Accordion';

const meta: Meta<typeof Accordion> = {
  title: 'Molecules/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Le composant Accordion respecte exactement le design de d-via avec des éléments `<details>` stylisés, des icônes de toggle personnalisées et une gestion des états ouverts/fermés.',
      },
    },
  },
  argTypes: {
    items: {
      control: 'object',
      description: 'Liste des éléments de l\'accordion',
    },
    className: {
      control: 'text',
      description: 'Classes CSS supplémentaires',
    },
    defaultOpen: {
      control: 'object',
      description: 'Index des éléments ouverts par défaut',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const faqItems = [
  {
    question: "Comment fonctionne la plateforme D-Via ?",
    answer: "D-Via connecte les clients avec des artisans qualifiés pour tous types de travaux. Vous pouvez rechercher des professionnels près de chez vous, consulter leurs profils, leurs avis et leurs tarifs, puis les contacter directement pour obtenir des devis personnalisés."
  },
  {
    question: "Comment puis-je m'inscrire en tant qu'artisan ?",
    answer: "L'inscription est simple et gratuite. Rendez-vous sur notre page d'inscription, remplissez vos informations professionnelles, téléchargez vos justificatifs (certificats, assurances) et notre équipe validera votre profil sous 24-48h."
  },
  {
    question: "Quels sont les tarifs des services ?",
    answer: "Les tarifs varient selon le type de service et la complexité du projet. Chaque artisan fixe ses propres prix, mais vous pouvez consulter les fourchettes de prix sur leurs profils. Nous ne prenons aucune commission sur les devis."
  },
  {
    question: "Comment sont vérifiés les artisans ?",
    answer: "Tous nos artisans sont vérifiés : nous contrôlons leurs qualifications, assurances, et références. Ils doivent fournir des justificatifs officiels et passer un entretien de validation avant d'être acceptés sur la plateforme."
  },
  {
    question: "Puis-je annuler un devis ?",
    answer: "Oui, vous pouvez annuler un devis à tout moment avant la signature du contrat. Pour les devis acceptés, les conditions d'annulation dépendent du type de contrat signé avec l'artisan."
  }
];

const serviceItems = [
  {
    question: "Plomberie",
    answer: "Réparation de fuites, installation de sanitaires, rénovation de salles de bain, maintenance de chauffe-eau, débouchage de canalisations, et tous travaux de plomberie résidentielle et commerciale."
  },
  {
    question: "Électricité",
    answer: "Installation électrique, mise aux normes, dépannage, éclairage, domotique, installation de prises et interrupteurs, et tous travaux électriques sécurisés par des professionnels certifiés."
  },
  {
    question: "Chauffage",
    answer: "Installation et maintenance de systèmes de chauffage, chaudières, radiateurs, pompes à chaleur, climatisation, et optimisation énergétique de votre habitat."
  },
  {
    question: "Rénovation",
    answer: "Rénovation complète, rénovation énergétique, aménagement d'espaces, transformation de pièces, et tous projets de rénovation sur mesure selon vos besoins et votre budget."
  }
];

const pricingItems = [
  {
    question: "Quels sont les tarifs de la plateforme ?",
    answer: "L'inscription et l'utilisation de base sont gratuites. Nous proposons des abonnements premium pour les artisans avec des fonctionnalités avancées : visibilité renforcée, statistiques détaillées, et outils de gestion."
  },
  {
    question: "Y a-t-il des frais cachés ?",
    answer: "Non, nous sommes transparents sur nos tarifs. Aucun frais caché, aucune commission sur les devis. Vous payez uniquement l'abonnement choisi, sans surprise."
  },
  {
    question: "Puis-je changer d'abonnement ?",
    answer: "Oui, vous pouvez modifier votre abonnement à tout moment depuis votre espace personnel. Les changements prennent effet immédiatement et les tarifs sont ajustés au prorata."
  }
];

export const Default: Story = {
  args: {
    items: faqItems.slice(0, 3),
  },
};

export const FAQSection: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-[24px] md:text-[40px] leading-display-small tracking-display-small md:leading-display-medium md:tracking-display-medium font-bold text-dvianeutral-10 mb-4">
          Questions fréquentes
        </h2>
        <p className="text-dvianeutralvariant-60 text-center max-w-2xl mx-auto">
          Trouvez des réponses à vos questions les plus courantes sur notre plateforme et nos services.
        </p>
      </div>
      
      <div className="space-y-4 max-w-[300px] md:min-w-[722px] md:max-w-[722px]">
        <Accordion items={faqItems} />
      </div>
    </div>
  ),
};

export const ServicesAccordion: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-[24px] md:text-[40px] leading-display-small tracking-display-small md:leading-display-medium md:tracking-display-medium font-bold text-dvianeutral-10 mb-4">
          Nos services
        </h2>
        <p className="text-dvianeutralvariant-60 text-center max-w-2xl mx-auto">
          Découvrez tous les services que nous proposons pour vos projets.
        </p>
      </div>
      
      <div className="space-y-4 max-w-[300px] md:min-w-[722px] md:max-w-[722px]">
        <Accordion items={serviceItems} />
      </div>
    </div>
  ),
};

export const PricingAccordion: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-[24px] md:text-[40px] leading-display-small tracking-display-small md:leading-display-medium md:tracking-display-medium font-bold text-dvianeutral-10 mb-4">
          Tarifs et abonnements
        </h2>
        <p className="text-dvianeutralvariant-60 text-center max-w-2xl mx-auto">
          Comprenez nos tarifs et choisissez l'abonnement qui vous convient.
        </p>
      </div>
      
      <div className="space-y-4 max-w-[300px] md:min-w-[722px] md:max-w-[722px]">
        <Accordion items={pricingItems} />
      </div>
    </div>
  ),
};

export const SingleItem: Story = {
  args: {
    items: [faqItems[0]],
  },
};

export const MultipleOpen: Story = {
  args: {
    items: faqItems.slice(0, 3),
    defaultOpen: [0, 2],
  },
};

export const WithCustomContent: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-[24px] md:text-[40px] leading-display-small tracking-display-small md:leading-display-medium md:tracking-display-medium font-bold text-dvianeutral-10 mb-4">
          Guide d'utilisation
        </h2>
      </div>
      
      <div className="space-y-4 max-w-[300px] md:min-w-[722px] md:max-w-[722px]">
        <Accordion 
          items={[
            {
              question: "Comment commencer ?",
              answer: "Créez votre compte, complétez votre profil, et commencez à rechercher des artisans ou à proposer vos services.",
              customContent: (
                <div className="flex flex-col gap-4 items-start mb-6 mx-2">
                  <p className="px-4 pt-4 text-dvianeutral-10 text-start text-sm md:text-title-medium-size">
                    Créez votre compte, complétez votre profil, et commencez à rechercher des artisans ou à proposer vos services.
                  </p>
                  <button className="flex items-center gap-2 text-dviaprimary-40 hover:bg-dviaprimary-87 py-1 text-label-large leading-label-large tracking-label-large bg-transparent px-4 hover:rounded-full text-sm font-medium cursor-pointer">
                    <img
                      src="/icons/error.svg"
                      alt="Icône guide"
                      className="w-4 h-4"
                    />
                    Voir le guide complet
                  </button>
                </div>
              )
            },
            {
              question: "Besoin d'aide ?",
              answer: "Notre équipe support est là pour vous accompagner dans l'utilisation de la plateforme.",
              customContent: (
                <div className="flex flex-col gap-4 items-start mb-6 mx-2">
                  <p className="px-4 pt-4 text-dvianeutral-10 text-start text-sm md:text-title-medium-size">
                    Notre équipe support est là pour vous accompagner dans l'utilisation de la plateforme.
                  </p>
                  <button className="flex items-center gap-2 text-dviaprimary-40 hover:bg-dviaprimary-87 py-1 text-label-large leading-label-large tracking-label-large bg-transparent px-4 hover:rounded-full text-sm font-medium cursor-pointer">
                    <img
                      src="/icons/error.svg"
                      alt="Icône support"
                      className="w-4 h-4"
                    />
                    Contacter le support
                  </button>
                </div>
              )
            }
          ]} 
        />
      </div>
    </div>
  ),
};

export const Responsive: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-[16px] md:text-headline-large leading-headline-large tracking-headline-large font-bold text-dvianeutral-10 mb-4">
          Version responsive
        </h2>
        <p className="font-normal text-title-small md:text-[20px] text-dvianeutral-10 md:leading-headline-small tracking-headline-small mb-2">
          L'accordion s'adapte parfaitement aux différentes tailles d'écran.
        </p>
      </div>
      
      <div className="space-y-4 max-w-[300px] md:min-w-[722px] md:max-w-[722px]">
        <Accordion items={faqItems.slice(0, 2)} />
      </div>
      
      <button className="text-white text-[12px] md:text-label-large leading-label-large tracking-label-large bg-dviaprimary-40 px-4 py-2 shadow-lg border rounded-8px border-transparent text-sm font-medium hover:shadow-sm transition-shadow duration-300 cursor-pointer max-w-[220px]">
        Nous contacter
      </button>
    </div>
  ),
};

export const Interactive: Story = {
  args: {
    items: faqItems.slice(0, 3),
  },
};

export const CodeExample: Story = {
  render: () => (
    <div className="p-4">
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>{`import { Accordion } from '@design-system-dvia/components';

// Accordion basique
const items = [
  {
    question: "Comment fonctionne la plateforme ?",
    answer: "D-Via connecte les clients avec des artisans qualifiés..."
  },
  {
    question: "Quels sont les tarifs ?",
    answer: "Les tarifs varient selon le type de service..."
  }
];

<Accordion items={items} />

// Avec contenu personnalisé
const itemsWithCustomContent = [
  {
    question: "Comment commencer ?",
    answer: "Créez votre compte...",
    customContent: (
      <div className="flex flex-col gap-4 items-start mb-6 mx-2">
        <p className="px-4 pt-4 text-dvianeutral-10 text-start text-sm md:text-title-medium-size">
          Créez votre compte, complétez votre profil...
        </p>
        <button className="flex items-center gap-2 text-dviaprimary-40 hover:bg-dviaprimary-87 py-1 text-label-large leading-label-large tracking-label-large bg-transparent px-4 hover:rounded-full text-sm font-medium cursor-pointer">
          <img src="/icons/error.svg" alt="Icône" className="w-4 h-4" />
          Voir le guide complet
        </button>
      </div>
    )
  }
];

<Accordion items={itemsWithCustomContent} />

// Avec plusieurs éléments ouverts
<Accordion 
  items={items}
  defaultOpen={[0, 2]}
/>

// Section FAQ complète (style d-via)
<div className="space-y-6">
  <div className="text-center">
    <h2 className="text-[24px] md:text-[40px] leading-display-small tracking-display-small md:leading-display-medium md:tracking-display-medium font-bold text-dvianeutral-10 mb-4">
      Questions fréquentes
    </h2>
    <p className="text-dvianeutralvariant-60 text-center max-w-2xl mx-auto">
      Trouvez des réponses à vos questions...
    </p>
  </div>
  
  <div className="space-y-4 max-w-[300px] md:min-w-[722px] md:max-w-[722px]">
    <Accordion items={faqItems} />
  </div>
  
  <h4 className="text-[16px] md:text-headline-large leading-headline-large tracking-headline-large font-bold text-dvianeutral-10 mt-4">
    Vous avez encore des questions ?
  </h4>
  <p className="font-normal text-title-small md:text-[20px] text-dvianeutral-10 md:leading-headline-small tracking-headline-small mb-2">
    Trouvez des réponses à vos questions auprès de nous.
  </p>
  <button className="text-white text-[12px] md:text-label-large leading-label-large tracking-label-large bg-dviaprimary-40 px-4 py-2 shadow-lg border rounded-8px border-transparent text-sm font-medium hover:shadow-sm transition-shadow duration-300 cursor-pointer max-w-[220px]">
    Nous contacter
  </button>
</div>`}</code>
      </pre>
    </div>
  ),
};
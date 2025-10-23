import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "./Modal";
import { Button } from "../atoms/Button";
import { Typography } from "../atoms/Typography";
import { useState } from "react";

const meta: Meta<typeof Modal> = {
  title: "Molecules/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `

Un composant modal pour afficher du contenu dans une superposition avec différentes tailles et variantes.


        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    isOpen: {
      control: { type: "boolean" },
      description: "État d'ouverture du modal",
    },
    onClose: {
      action: "closed",
      description: "Callback de fermeture",
    },
    title: {
      control: { type: "text" },
      description: "Titre du modal",
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg", "xl", "full"],
      description: "Taille du modal",
    },
    variant: {
      control: { type: "select" },
      options: ["default", "centered", "bottom-sheet"],
      description: "Style du modal",
    },
    showCloseButton: {
      control: { type: "boolean" },
      description: "Afficher le bouton de fermeture",
    },
    closeOnOverlayClick: {
      control: { type: "boolean" },
      description: "Fermer au clic sur l'overlay",
    },
    closeOnEscape: {
      control: { type: "boolean" },
      description: "Fermer avec la touche Escape",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

const ModalWrapper = ({ children, ...props }: any) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
      <Button onClick={() => setIsOpen(true)} className="mb-4">
        Ouvrir le modal
      </Button>
      <Modal {...props} isOpen={isOpen} onClose={() => setIsOpen(false)}>
        {children}
      </Modal>
    </div>
  );
};

export const Default: Story = {
  render: (args) => (
    <ModalWrapper {...args}>
      <Typography variant="body-medium" className="mb-4">
        Ceci est un modal par défaut avec du contenu simple.
      </Typography>
      <div className="flex gap-2">
        <Button onClick={() => {}}>Annuler</Button>
        <Button variant="primary">Confirmer</Button>
      </div>
    </ModalWrapper>
  ),
  args: {
    title: "Modal par défaut",
    size: "md",
    variant: "default",
  },
  parameters: {
    docs: {
      source: {
        code: `
<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Modal par défaut"
  size="md"
  variant="default"
>
  <Typography variant="body-medium" className="mb-4">
    Ceci est un modal par défaut avec du contenu simple.
  </Typography>
  <div className="flex gap-2">
    <Button onClick={() => setIsOpen(false)}>Annuler</Button>
    <Button variant="primary">Confirmer</Button>
  </div>
</Modal>
        `,
      },
    },
  },
};

export const Small: Story = {
  render: (args) => (
    <ModalWrapper {...args}>
      <Typography variant="body-medium">Modal de petite taille.</Typography>
    </ModalWrapper>
  ),
  args: {
    title: "Modal petit",
    size: "sm",
  },
  parameters: {
    docs: {
      source: {
        code: `
<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Modal petit"
  size="sm"
>
  <Typography variant="body-medium">
    Modal de petite taille.
  </Typography>
</Modal>
        `,
      },
    },
  },
};

export const Large: Story = {
  render: (args) => (
    <ModalWrapper {...args}>
      <Typography variant="body-medium" className="mb-4">
        Ceci est un modal de grande taille avec plus d'espace pour le contenu.
      </Typography>
      <div className="space-y-4">
        <div className="p-4 bg-dvianeutral-90 rounded-8px">
          <Typography variant="body-small">
            Section de contenu avec fond coloré
          </Typography>
        </div>
        <div className="p-4 bg-dvianeutral-90 rounded-8px">
          <Typography variant="body-small">Autre section de contenu</Typography>
        </div>
      </div>
    </ModalWrapper>
  ),
  args: {
    title: "Modal large",
    size: "lg",
  },
  parameters: {
    docs: {
      source: {
        code: `
<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Modal large"
  size="lg"
>
  <Typography variant="body-medium" className="mb-4">
    Ceci est un modal de grande taille avec plus d'espace pour le contenu.
  </Typography>
  <div className="space-y-4">
    <div className="p-4 bg-dvianeutral-90 rounded-8px">
      <Typography variant="body-small">
        Section de contenu avec fond coloré
      </Typography>
    </div>
  </div>
</Modal>
        `,
      },
    },
  },
};

export const BottomSheet: Story = {
  render: (args) => (
    <ModalWrapper {...args}>
      <div className="space-y-4">
        <div className="flex items-center gap-3 p-3 hover:bg-dvianeutral-90 rounded-8px cursor-pointer">
          <div>
            <Typography variant="body-medium" weight="500">
              Option 1
            </Typography>
            <Typography variant="body-small" color="dvianeutralvariant-60">
              Description de l'option 1
            </Typography>
          </div>
        </div>
        <div className="flex items-center gap-3 p-3 hover:bg-dvianeutral-90 rounded-8px cursor-pointer">
          <div>
            <Typography variant="body-medium" weight="500">
              Option 2
            </Typography>
            <Typography variant="body-small" color="dvianeutralvariant-60">
              Description de l'option 2
            </Typography>
          </div>
        </div>
        <div className="flex items-center gap-3 p-3 hover:bg-dvianeutral-90 rounded-8px cursor-pointer">
          <div>
            <Typography variant="body-medium" weight="500">
              Option 3
            </Typography>
            <Typography variant="body-small" color="dvianeutralvariant-60">
              Description de l'option 3
            </Typography>
          </div>
        </div>
      </div>
    </ModalWrapper>
  ),
  args: {
    title: "Options",
    variant: "bottom-sheet",
    size: "full",
  },
  parameters: {
    docs: {
      source: {
        code: `
<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Options"
  variant="bottom-sheet"
  size="full"
>
  <div className="space-y-4">
    <div className="flex items-center gap-3 p-3 hover:bg-dvianeutral-90 rounded-8px cursor-pointer">
      <div className="w-10 h-10 bg-dviaprimary-40 rounded-full flex items-center justify-center">
        <span className="text-white text-sm">📱</span>
      </div>
      <div>
        <Typography variant="body-medium" weight="500">
          Option 1
        </Typography>
        <Typography variant="body-small" color="dvianeutralvariant-60">
          Description de l'option 1
        </Typography>
      </div>
    </div>
  </div>
</Modal>
        `,
      },
    },
  },
};

export const WithoutCloseButton: Story = {
  render: (args) => (
    <ModalWrapper {...args}>
      <Typography variant="body-medium" className="mb-4">
        Ce modal n'a pas de bouton de fermeture. Utilisez Escape ou cliquez sur
        l'overlay.
      </Typography>
      <Button variant="primary" onClick={() => {}}>
        Fermer
      </Button>
    </ModalWrapper>
  ),
  args: {
    title: "Modal sans bouton de fermeture",
    showCloseButton: false,
  },
  parameters: {
    docs: {
      source: {
        code: `
<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Modal sans bouton de fermeture"
  showCloseButton={false}
>
  <Typography variant="body-medium" className="mb-4">
    Ce modal n'a pas de bouton de fermeture.
  </Typography>
  <Button variant="primary" onClick={() => setIsOpen(false)}>
    Fermer
  </Button>
</Modal>
        `,
      },
    },
  },
};

export const FormModal: Story = {
  render: (args) => (
    <ModalWrapper {...args}>
      <form className="space-y-4">
        <div>
          <Typography variant="body-medium" className="mb-2">
            Nom
          </Typography>
          <input
            type="text"
            className="w-full p-2 border border-dvianeutral-50 rounded-8px"
            placeholder="Votre nom"
          />
        </div>
        <div>
          <Typography variant="body-medium" className="mb-2">
            Email
          </Typography>
          <input
            type="email"
            className="w-full p-2 border border-dvianeutral-50 rounded-8px"
            placeholder="votre@email.com"
          />
        </div>
        <div className="flex gap-2 pt-4">
          <Button variant="outline" onClick={() => {}}>
            Annuler
          </Button>
          <Button variant="primary" onClick={() => {}}>
            Enregistrer
          </Button>
        </div>
      </form>
    </ModalWrapper>
  ),
  args: {
    title: "Formulaire",
    size: "md",
  },
  parameters: {
    docs: {
      source: {
        code: `
<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Formulaire"
  size="md"
>
  <form className="space-y-4">
    <div>
      <Typography variant="body-medium" className="mb-2">
        Nom
      </Typography>
      <input
        type="text"
        className="w-full p-2 border border-dvianeutral-50 rounded-8px"
        placeholder="Votre nom"
      />
    </div>
    <div className="flex gap-2 pt-4">
      <Button variant="outline" onClick={() => setIsOpen(false)}>
        Annuler
      </Button>
      <Button variant="primary">
        Enregistrer
      </Button>
    </div>
  </form>
</Modal>
        `,
      },
    },
  },
};

export const CodeExample: Story = {
  args: {
    isOpen: true,
    title: "Exemple de Code",
    size: "md",
  },
  parameters: {
    docs: {
      description: {
        story: `
## Exemple de code

## Utilisation

\`\`\`tsx
import { Modal } from '@dvia/design-system';
import { useState } from 'react';

const [isOpen, setIsOpen] = useState(false);

<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Titre du modal"
  size="md"
  variant="default"
>
  <p>Contenu du modal</p>
</Modal>
\`\`\`
        `,
      },
    },
  },
};

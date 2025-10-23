import React from "react";
import { Typography, Accordion, Button } from "@gloireondongo/d-via-design-system";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqsSectionProps = {
  title: string;
  subtitle: string;
  faqs: FaqItem[];
  contactTitle?: string;
  contactSubtitle?: string;
  isArtisan?: boolean;
};

export function FaqsSection({
  title,
  subtitle,
  faqs,
  contactTitle = "Vous avez encore des questions ?",
  contactSubtitle = "Trouvez des réponses à vos questions auprès de nous.",
  isArtisan ,
}: FaqsSectionProps) {
  return (
    <section>
      <div className="text-center flex flex-col items-center justify-center gap-4">
        <Typography 
          variant="headline-large" 
          weight="700" 
          className="text-dvianeutral-80"
        >
          {title}
        </Typography>
        <Typography 
          variant="body-large" 
          className="text-dvianeutral-80 mb-5"
        >
          {subtitle}
        </Typography>

        <div className="max-w-[300px] md:min-w-[722px] md:max-w-[722px]">
          <Accordion
            items={faqs.map((faq, index) => ({
              id: `faq-${index}`,
              question: faq.question,
              answer: faq.answer,
              action: index === 0 ? {
                label: isArtisan ? "Voir les conditions d'inscription" : "Voir les tarifs",
                onClick: () => console.log('Action clicked')
              } : undefined
            }))}
          />
        </div>

        <Typography 
          variant="title-large" 
          weight="700" 
          className="text-dvianeutral-80 mt-4"
        >
          {contactTitle}
        </Typography>
        <Typography 
          variant="body-large" 
          className="text-dvianeutral-80 mb-2"
        >
          {contactSubtitle}
        </Typography>
        <Button 
          variant="primary" 
          size="md"
          className="max-w-[220px]"
        >
          Nous contacter
        </Button>
      </div>
    </section>
  );
}


import React from "react";
import { Typography, Image } from "@d-via/design-system";

type Step = {
  icon: string;
  text: string;
};

type StepsSectionProps = {
  title: string;
  highlight: string;
  subtitle: string;
  imageSrc?: string;
  steps: Step[];
};

export function StepsSection({
  title,
  highlight,
  subtitle,
  imageSrc = "/illustrations/phone.png",
  steps,
}: StepsSectionProps) {
  return (
    <section>
      <div className="mx-auto text-center">
        <Typography 
          variant="headline-large" 
          weight="700" 
          className="text-dvianeutral-80 mb-2"
        >
          {title} <span className="text-dviaprimary-40">{highlight}</span>
        </Typography>
        <Typography 
          variant="body-large" 
          className="text-dvianeutral-80 mb-5 md:mb-10 text-center"
        >
          {subtitle}
        </Typography>

        <div className="flex justify-center mb-10">
          <Image
            src={imageSrc}
            alt="Phone Desktop"
            width={1296}
            height={543}
            className="hidden md:block w-[1296px] h-[543px] z-10 relative"
          />
          <Image
            src="/illustrations/IllustrationMobile.png"
            alt="Phone Mobile"
            width={634}
            height={270}
            className="block md:hidden w-[634px] h-[270px] z-10 relative"
          />
        </div>

        {/* Étapes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {steps.map((step, index) => (
            <StepCard key={index} icon={step.icon} text={step.text} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StepCard({ icon, text }: { icon: string; text: string }) {
  return (
    <div className="bg-dvianeutral-20 border border-dvianeutral-30 rounded-lg px-4 py-6 text-center inline-flex flex-col items-center max-h-[170px]">
      <Image 
        src={icon} 
        alt="Step icon" 
        width={45}
        height={45}
        className="w-[35px] h-[30px] md:w-[45px] md:h-[45px] mb-3" 
      />
      <Typography 
        variant="body-medium" 
        className="text-dvianeutral-60"
      >
        {text}
      </Typography>
    </div>
  );
}

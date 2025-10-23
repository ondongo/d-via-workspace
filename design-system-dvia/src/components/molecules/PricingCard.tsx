"use client";
import React from 'react';
import { cn } from '../../utils/cn';
import { BiCheck } from "react-icons/bi";

export interface PricingCardProps {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  href: string;
  featured?: boolean;
  popular?: boolean;
  className?: string;
  onSelect?: (id: string) => void;
  buttonText?: string;
  currency?: string;
  period?: string;
  tierIdx?: number;
  isMultiple?: boolean;
}

function classNames(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export const PricingCard: React.FC<PricingCardProps> = ({
  id,
  name,
  price,
  description,
  features,
  featured = false,
  className,
  onSelect,
  buttonText = "Acheter maintenant",
  href,
  tierIdx = 0,
  isMultiple = false,
  currency = "€",
}) => {
  const handleClick = () => {
    onSelect?.(id);
  };

  return (
    <div
      className={cn(
        classNames(
          featured
            ? "relative bg-dvianeutral-10 shadow-2xl"
            : "bg-white/60 sm:mx-8 lg:mx-0",
          featured
            ? "rounded-3xl"
            : isMultiple && tierIdx === 0
            ? "rounded-t-3xl sm:rounded-b-none lg:rounded-tr-none lg:rounded-bl-3xl"
            : isMultiple && tierIdx === 1
            ? "sm:rounded-t-none lg:rounded-tr-3xl lg:rounded-bl-none"
            : "rounded-3xl",
          "p-8 ring-1 ring-gray-900/10 sm:p-10"
        ),
        className
      )}
    >
      <h3
        id={id}
        className={classNames(
          featured ? "text-dviaprimary-30" : "text-dviaprimary-40",
          "text-base/7 font-semibold"
        )}
      >
        {name}
      </h3>
      <p className="mt-4 flex items-baseline gap-x-2">
        <span
          className={classNames(
            featured ? "text-white" : "text-dvianeutralvariant-30",
            "text-5xl font-semibold tracking-tight"
          )}
        >
          {price}{currency}
        </span>
      </p>
      <p
        className={classNames(
          featured ? "text-gray-300" : "text-gray-600",
          "mt-6 text-base/7"
        )}
      >
        {description}
      </p>
      <ul
        role="list"
        className={classNames(
          featured ? "text-gray-300" : "text-gray-600",
          "mt-8 space-y-3 text-sm/6 sm:mt-10"
        )}
      >
        {features.map((feature) => (
          <li key={feature} className="flex gap-x-3">
            <BiCheck
              aria-hidden="true"
              className={classNames(
                featured ? "text-white" : "text-dviaprimary-40",
                "h-6 w-5 flex-none"
              )}
            />
            {feature}
          </li>
        ))}
      </ul>
      <a
        href={href}
        aria-describedby={id}
        onClick={(e) => {
          e.preventDefault();
          handleClick();
        }}
        className={classNames(
          featured
            ? "bg-dviaprimary-40 text-white shadow-xs hover:bg-dviaprimary-30 focus-visible:outline-dviaprimary-50"
            : "text-dviaprimary-40 ring-1 ring-dvianeutral-50 ring-inset hover:ring-dvianeutral-60 focus-visible:outline-dviaprimary-60",
          "mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10"
        )}
      >
        {buttonText}
      </a>
    </div>
  );
};
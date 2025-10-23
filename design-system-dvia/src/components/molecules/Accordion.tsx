import React from 'react';
import { cn } from '../../utils/cn';

export interface AccordionItem {
  question: string;
  answer: string;
  customContent?: React.ReactNode;
}

export interface AccordionProps {
  items: AccordionItem[];
  defaultOpen?: number[];
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  defaultOpen = [],
  className,
}) => {
  return (
    <div className={cn('space-y-4 max-w-[300px] md:min-w-[722px] md:max-w-[722px]', className)}>
      {items.map((item, index) => (
        <details
          key={index}
          className="group [&_summary::-webkit-details-marker]:hidden rounded-md border border-dvianeutralvariant-50 bg-transparent open:bg-dvianeutral-94 open:border-dvianeutralvariant-50"
          open={defaultOpen.includes(index)}
        >
          <summary className="cursor-pointer flex items-center justify-between gap-1.5 p-2 md:p-4 text-dvianeutral-10 mx-2">
            <h2 className="text-sm md:text-lg font-medium text-start md:text-center">{item.question}</h2>
            <ToggleIcon />
          </summary>

          <div className="flex flex-col gap-4 items-start mb-6 mx-2">
            {item.customContent ? (
              item.customContent
            ) : (
              <p className="px-4 pt-4 text-dvianeutral-10 text-start text-sm md:text-title-medium-size">{item.answer}</p>
            )}
          </div>
        </details>
      ))}
    </div>
  );
};

function ToggleIcon() {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="block size-5 shrink-0 group-open:hidden"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="hidden size-5 shrink-0 group-open:block"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </>
  );
}
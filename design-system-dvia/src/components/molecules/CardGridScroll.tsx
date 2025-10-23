"use client";
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '../../utils/cn';

export interface Artisan {
  id: string;
  image: string;
  name: string;
  location: string;
  job: string;
  rating: number;
  completed: number;
}

export interface CardGridScrollProps {
  artisans: Artisan[];
  title?: string;
  subtitle?: string;
  className?: string;
  enableMarquee?: boolean;
  enableFadeEffect?: boolean;
}

export const CardGridScroll: React.FC<CardGridScrollProps> = ({
  artisans,
  title = "Rejoignez notre communauté d'artisans d'excellence",
  subtitle,
  className,
  enableMarquee = true,
  enableFadeEffect = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [opacities, setOpacities] = useState<number[]>(Array(artisans.length).fill(1));

  useEffect(() => {
    if (!enableFadeEffect) return;

    const fadeDistance = 100;

    const updateOpacities = () => {
      if (!containerRef.current) return;

      const cards = containerRef.current.querySelectorAll('.artisan-card');
      const containerLeft = containerRef.current.getBoundingClientRect().left;
      const newOpacities = Array(cards.length).fill(1);

      cards.forEach((card, idx) => {
        const cardLeft = card.getBoundingClientRect().left;
        const distanceFromLeftEdge = cardLeft - containerLeft;

        if (distanceFromLeftEdge < fadeDistance) {
          const opacity = Math.max(0.4, distanceFromLeftEdge / fadeDistance);
          newOpacities[idx] = opacity;
        } else {
          newOpacities[idx] = 1;
        }
      });

      setOpacities(newOpacities);
      requestAnimationFrame(updateOpacities);
    };

    updateOpacities();
  }, [enableFadeEffect, artisans.length]);

  return (
    <section className={cn('relative py-12', className)}>
      <div className="text-center flex flex-col items-center justify-center gap-4">
        <h4 className="text-[24px] md:text-[40px] leading-display-small tracking-display-small md:leading-display-medium md:tracking-display-medium font-bold text-dvianeutral-10">
          {title}
        </h4>
        {subtitle && (
          <p className="text-dvianeutralvariant-60 text-center">
            {subtitle}
          </p>
        )}

        <div className="relative w-full mt-8" ref={containerRef}>
          <div className={cn(
            'flex w-max space-x-4',
            enableMarquee && 'animate-marqueeGrid'
          )}>
            {artisans.map((artisan, idx) => (
              <div
                key={artisan.id}
                className="mx-2 transition-opacity duration-300 ease-in-out artisan-card"
                style={{
                  opacity: enableFadeEffect ? opacities[idx] : 1,
                  transition: "opacity 0.3s ease-in-out",
                }}
              >
                <ArtisanCard {...artisan} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ArtisanCard: React.FC<Artisan> = ({
  image,
  name,
  location,
  job,
  rating,
  completed,
}) => {
  return (
    <div className="rounded-12px shadow-md bg-white p-4 w-64 flex-shrink-0">
      <div className="flex flex-col items-center">
        <div className="bg-dvianeutral-96 w-40 h-40 flex items-center justify-center rounded-lg overflow-hidden mb-4">
          <img
            src={image}
            alt={`Portrait de ${name}`}
            className="object-cover w-full h-full"
          />
        </div>
        <p className="text-lg font-semibold">{name}</p>
        <p className="text-sm text-dvianeutralvariant-30">
          {location} · {job}
        </p>

        <div className="bg-dvianeutral-90 p-2 rounded-8px mt-4 w-full text-center">
          <div className="flex items-center justify-center space-x-1 text-dviaprimary-40 mb-1">
            {"★".repeat(rating)}
            {"☆".repeat(5 - rating)}{" "}
            <span className="text-black ml-1">{rating}</span>
          </div>
          <p className="text-dviasecondary-40 font-bold text-sm">
            {completed} chantiers réalisés
          </p>
        </div>
      </div>
    </div>
  );
};
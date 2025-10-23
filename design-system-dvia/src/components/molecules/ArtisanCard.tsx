import React from 'react';
import { cn } from '../../utils/cn';

export interface ArtisanCardProps {
  id?: string;
  name: string;
  company?: string;
  description?: string;
  image: string;
  rating: number;
  reviews?: number;
  verified?: boolean;
  location: string;
  distance?: string;
  availability?: string;
  certifications?: string[];
  job?: string;
  completed?: number;
  onContactClick?: () => void;
  onCallClick?: () => void;
  onOptionsClick?: () => void;
  className?: string;
  variant?: 'dashboard' | 'grid';
  opacity?: number;
}

export const ArtisanCard: React.FC<ArtisanCardProps> = ({
  id: _id,
  name,
  company,
  description,
  image,
  rating,
  reviews,
  verified,
  location,
  distance,
  availability,
  certifications = [],
  job,
  completed,
  onContactClick,
  onCallClick,
  onOptionsClick,
  className,
  variant = 'dashboard',
  opacity = 1,
}) => {
  if (variant === 'grid') {
    return (
      <div
        className="rounded-12px shadow-md bg-white p-4 w-64 flex-shrink-0"
        style={{ opacity, transition: "opacity 0.3s ease-in-out" }}
      >
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
  }

  return (
    <div className={cn('border border-dvianeutral-50 rounded-2xl px-4 pb-4 w-full md:max-w-xs min-h-[450px] flex flex-col', className)}>
      {/* Header */}
      <div className="flex items-center justify-between py-4 rounded-xl">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-dviaprimary-90 flex items-center justify-center text-dviaprimary-10 font-semibold">
            A
          </div>
          <div>
            <div className="text-sm text-gray-800 font-medium">
              {company || 'Rénovation Habitat'}
            </div>
            <div className="text-xs text-gray-500 max-w-[150px] truncate overflow-hidden whitespace-nowrap">
              {description || 'Entreprise générale de rénovation'}
            </div>
          </div>
        </div>

        <img
          src="/dashboard/card/threePoints.svg"
          alt="Options"
          className="w-4 h-4 cursor-pointer"
          onClick={onOptionsClick}
        />
      </div>

      {/* Image */}
      <img
        src={image}
        alt="Artisan work"
        className="rounded-xl mb-3 h-40 w-full object-cover"
      />

      {/* Content Area - grows to fill space */}
      <div className="flex-1 flex flex-col min-h-0">
        {/* Rating and Verification */}
        <div className="flex items-center text-sm mb-1">
          <span className="text-dviaprimary-40">★ {rating}</span>
          <span className="text-gray-400 ml-1">({reviews})</span>
          {verified && (
            <div className="ml-auto border border-dvianeutralvariant-50 text-xs px-2 py-1 rounded flex flex-row gap-2 justify-content-center items-center">
              <img
                src="/dashboard/card/check.svg"
                alt="loc"
                className="w-3 h-3"
              />
              Vérifié
            </div>
          )}
        </div>

        {/* Location and Availability */}
        <div className="text-xs text-gray-500 mb-2 flex flex-row gap-2 justify-content-center items-center mt-6">
          <img
            src="/dashboard/card/location.svg"
            alt="loc"
            className="w-4 h-4"
          />
          <span>{location}</span>
          {distance && <span>({distance})</span>}
        </div>

        {availability && (
          <div className="text-xs text-gray-500 mb-2 flex flex-row gap-2 justify-content-center items-center">
            <img
              src="/dashboard/card/clock.svg"
              alt="time"
              className="w-4 h-4"
            />
            <span>{availability}</span>
          </div>
        )}

        {/* Certifications */}
        {certifications.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {certifications.map((cert, index) => (
              <span
                key={index}
                className="border border-dvianeutral-50 text-xs px-2 py-1 rounded-8px"
              >
                {cert}
              </span>
            ))}
          </div>
        )}

        {/* Spacer to push buttons to bottom */}
        <div className="flex-1"></div>

        {/* Actions - always at bottom with margin */}
        <div className="flex gap-2 mt-4">
          <button
            onClick={onContactClick}
            className="flex-1 border border-dvianeutral-50 bg-dvianeutral-94 text-sm px-4 py-3 rounded-8px cursor-pointer flex items-center justify-center gap-2"
          >
            <img
              src="/dashboard/card/mail.svg"
              alt="mail"
              className="w-4 h-4"
            />
            Contacter
          </button>
          <button
            onClick={onCallClick}
            className="border border-dvianeutral-50 bg-dvianeutral-94 text-sm px-4 py-3 rounded-8px cursor-pointer"
          >
            <img
              src="/dashboard/card/call.svg"
              alt="call"
              className="w-4 h-4"
            />
          </button>
        </div>
      </div>
    </div>
  );
};
"use client";
import React, { useState } from 'react';
import { cn } from '../../utils/cn';

export interface AddressInputProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  onSelect?: (address: { display_name: string; lat: string; lon: string }) => void;
  className?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  suggestions?: Array<{ display_name: string; lat: string; lon: string }>;
  showSuggestions?: boolean;
}

export const AddressInput: React.FC<AddressInputProps> = ({
  placeholder = "Où êtes-vous situé ?",
  value = '',
  onChange,
  onSelect,
  className,
  disabled = false,
  icon,
  suggestions = [],
  showSuggestions = true,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState(value);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    onChange?.(newValue);
    setIsOpen(newValue.length > 0 && showSuggestions);
  };

  const handleSuggestionClick = (suggestion: { display_name: string; lat: string; lon: string }) => {
    setInputValue(suggestion.display_name);
    onChange?.(suggestion.display_name);
    onSelect?.(suggestion);
    setIsOpen(false);
  };

  const handleClear = () => {
    setInputValue('');
    onChange?.('');
    setIsOpen(false);
  };

  const defaultIcon = (
    <img 
      src="/icons/LocationBlue.svg" 
      alt="location" 
      className="w-4 h-4" 
    />
  );

  const hasResults = isOpen && suggestions.length > 0;

  return (
    <div className={cn('relative', className)}>
      <div
        className={`border px-4 py-3 flex items-center gap-2 ${
          hasResults
            ? "rounded-t-28px border-dvianeutral-50 bg-dvianeutral-96"
            : "rounded-full border-dvianeutralvariant-30 bg-white"
        }`}
      >
        {icon || defaultIcon}
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder={placeholder}
          disabled={disabled}
          className="flex-1 text-sm font-bold text-dvianeutralvariant-30 outline-none placeholder:text-dvianeutralvariant-30 placeholder:text-sm placeholder:font-normal bg-transparent"
        />
        {inputValue && (
          <button
            className="cursor-pointer"
            onClick={handleClear}
            type="button"
          >
            ✕
          </button>
        )}
      </div>

      {/* Suggestions dropdown - collé à l'input */}
      {hasResults && (
        <div className="bg-white border border-dvianeutral-50 overflow-hidden rounded-b-28px">
          {suggestions.map((suggestion, index) => (
            <button
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className={`flex items-center gap-2 px-4 py-3 text-sm text-dvianeutralvariant-30 hover:bg-red-100 cursor-pointer w-full text-left ${
                index !== suggestions.length - 1
                  ? "border-b border-dvianeutral-50"
                  : ""
              }`}
            >
              <img src="/icons/OutlineLocation.svg" className="w-4 h-4" />
              {suggestion.display_name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
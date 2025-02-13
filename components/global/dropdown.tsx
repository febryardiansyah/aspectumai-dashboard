'use client';

import { cn } from '@/lib/utils';
import React, { useState } from 'react';

type DropdownProps<T> = {
  label?: string;
  options: T[];
  placeholder?: string;
  onSelect: (option: T) => void;
  required?: boolean;
};

export default function Dropdown<T>({
  label,
  options,
  placeholder = 'Select an option',
  required,
  onSelect
}: DropdownProps<T>) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(placeholder);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: any) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col gap-2">
      {label && (
        <div className="text-muted-foreground flex flex-row gap-1">
          {label}
          {required && <span className="text-red-500">*</span>}
        </div>
      )}

      <div className="relative inline-block text-left">
        <div>
          <button
            onClick={toggleDropdown}
            className="inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
          >
            {selectedOption}
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06 0L10 10.44l3.71-3.23a.75.75 0 111.06 1.06l-4.25 3.5a.75.75 0 01-1.06 0l-4.25-3.5a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="absolute z-10 mt-2 w-full rounded-md bg-white shadow-lg">
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              {options.map((option, key) => (
                <button
                  key={key}
                  onClick={() => handleOptionClick(option)}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  {option as any}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

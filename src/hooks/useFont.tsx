import { useState, useEffect } from 'react';

export type FontOption = {
  name: string;
  value: string;
  class: string;
};

export const fontOptions: FontOption[] = [
  { name: 'Inter', value: 'inter', class: 'font-inter' },
  { name: 'Geist', value: 'geist', class: 'font-geist' },
  { name: 'Satoshi', value: 'satoshi', class: 'font-satoshi' },
  { name: 'Jakarta', value: 'jakarta', class: 'font-jakarta' },
  { name: 'Outfit', value: 'outfit', class: 'font-outfit' },
  { name: 'Space Grotesk', value: 'space', class: 'font-space' },
];

export const useFont = () => {
  const [currentFont, setCurrentFont] = useState<FontOption>(fontOptions[0]);

  useEffect(() => {
    const savedFont = localStorage.getItem('dashboard-font');
    if (savedFont) {
      const foundFont = fontOptions.find(font => font.value === savedFont);
      if (foundFont) {
        setCurrentFont(foundFont);
      }
    }
  }, []);

  useEffect(() => {
    // Apply font class to body for global effect
    document.body.className = document.body.className.replace(/font-\w+/g, '');
    document.body.classList.add(currentFont.class);
    
    // Save to localStorage
    localStorage.setItem('dashboard-font', currentFont.value);
  }, [currentFont]);

  const switchFont = (font: FontOption) => {
    setCurrentFont(font);
  };

  return {
    currentFont,
    fontOptions,
    switchFont,
  };
};
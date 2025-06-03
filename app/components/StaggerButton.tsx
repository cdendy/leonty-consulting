"use client"; // ← ensure this is at the very top

import { useEffect, useRef } from 'react';

interface StaggerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** The raw string for each letter to stagger */
  children: string;

  /** Optional icon (e.g. <img src="…" /> or an <svg />) */
  icon?: React.ReactNode;

  /** Extra Tailwind classes you want appended */
  className?: string;

  /** Tailwind utility for text color, e.g. "text-red-500" */
  textColorClass?: string;

  /** Tailwind utility for background color, e.g. "bg-blue-100" */
  bgColorClass?: string;

  /** Tailwind utility for border color, e.g. "border-green-200" */
  borderColorClass?: string;
}

export default function StaggerButton({
  children,
  icon,
  className = '',
  textColorClass = 'text-[#0A0D12]',
  bgColorClass = 'bg-white',
  borderColorClass = 'border-[#D5D7DA]',
  ...buttonProps
}: StaggerButtonProps) {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    const offsetIncrement = 0.01;
    const text = el.textContent || '';
    el.textContent = '';

    Array.from(text).forEach((char, index) => {
      const span = document.createElement('span');
      span.textContent = char;
      span.style.transitionDelay = `${index * offsetIncrement}s`;
      if (char === ' ') span.style.whiteSpace = 'pre';
      el.appendChild(span);
    });
  }, [children]);

  return (
    <button
      {...buttonProps}
      type={buttonProps.type ?? 'button'}
      className={`
        stagger-button
        ${textColorClass}
        ${bgColorClass}
        ${borderColorClass}
        ${className}
      `.trim()}
    >
      <span data-button-animate-chars ref={textRef}>
        {children}
      </span>
      {icon && <span className="ml-2 flex-shrink-0">{icon}</span>}
    </button>
  );
}

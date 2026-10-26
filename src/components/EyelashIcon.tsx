import React from 'react';

interface EyelashIconProps {
  className?: string;
  size?: number;
  opacity?: number;
}

export const EyelashIcon: React.FC<EyelashIconProps> = ({
  className = "w-5 h-5 text-[#C9A24B]",
  size,
  opacity
}) => {
  return (
    <svg
      width={size || "100%"}
      height={size || "100%"}
      viewBox="0 0 48 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={opacity !== undefined ? { opacity } : undefined}
      aria-hidden="true"
    >
      {/* Sleek elegant eye contour arc */}
      <path
        d="M 3 20 C 13 8, 35 8, 45 20"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      {/* Delicate radiating flutter lashes */}
      <path
        d="M 10 14 C 8 8, 6 5, 4 3"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path
        d="M 16 11 C 15 5, 13 2, 11 0"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path
        d="M 24 10 C 24 4, 24 1, 24 0"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path
        d="M 32 11 C 33 5, 35 2, 37 0"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path
        d="M 38 14 C 40 8, 42 5, 44 3"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      {/* Inner subtle iris highlight circle */}
      <circle
        cx="24"
        cy="19"
        r="3"
        stroke="currentColor"
        strokeWidth="1"
        fill="currentColor"
        fillOpacity="0.15"
      />
    </svg>
  );
};

export const SectionDivider: React.FC<{ className?: string }> = ({ className = "my-12" }) => {
  return (
    <div className={`flex items-center justify-center gap-4 max-w-xs mx-auto ${className}`}>
      <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-[#C9A24B]/40 to-[#E8D08A]/70" />
      <EyelashIcon className="w-6 h-4 text-[#C9A24B]" />
      <div className="flex-1 h-[1px] bg-gradient-to-r from-[#E8D08A]/70 via-[#C9A24B]/40 to-transparent" />
    </div>
  );
};

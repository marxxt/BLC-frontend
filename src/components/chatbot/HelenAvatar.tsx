// components/chatbot/HelenAvatar.tsx
import { useState } from "react";

interface HelenAvatarProps {
  size?: "sm" | "md" | "lg" | "xlg";
  imageURL: string;
  className?: string;
}

export default function HelenAvatar({
  size = "md",
  imageURL,
  className = "",
}: HelenAvatarProps) {
  const [imageError, setImageError] = useState(false);

  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-12 h-12",
    xlg: "w-24 h-24",
  };

  const textSizes = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
    xlg: "text-xl",
  };

  return (
    <div
      className={`${sizeClasses[size]}  rounded-full overflow-hidden shadow-sm border-2 border-blue-200 ${className}`}
    >
      {!imageError ? (
        <img
          src={`${imageURL}`}
          alt="Helen - AI Loan Assistant"
          className="w-full h-full object-cover"
          style={{ objectPosition: "center 10%" }}
          onError={() => setImageError(true)}
        />
      ) : (
        // Fallback with professional gradient and initials
        <div className="w-full h-full bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 flex items-center justify-center">
          <span className={`text-white font-bold ${textSizes[size]}`}>H</span>
        </div>
      )}
    </div>
  );
}

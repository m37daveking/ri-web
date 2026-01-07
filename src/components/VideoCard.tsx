"use client";

import Image from "next/image";

interface VideoCardProps {
  imageSrc: string;
  title: string;
  description?: string;
  badge?: string;
  speed?: string;
  aspectRatio?: "video" | "square" | "portrait";
  className?: string;
}

export default function VideoCard({
  imageSrc,
  title,
  description,
  badge,
  speed,
  aspectRatio = "video",
  className = "",
}: VideoCardProps) {
  const aspectClasses = {
    video: "aspect-video",
    square: "aspect-square",
    portrait: "aspect-[3/4]",
  };

  return (
    <div className={`group ${className}`}>
      <div className={`relative ${aspectClasses[aspectRatio]} rounded-lg overflow-hidden bg-background-dark`}>
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
        />

        {/* Play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-background-dark ml-1"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>

        {/* Badge */}
        {(badge || speed) && (
          <div className="absolute top-3 left-3 flex items-center gap-2">
            {badge && (
              <span className="px-2 py-1 bg-white/90 rounded text-xs font-mono text-foreground">
                {badge}
              </span>
            )}
            {speed && (
              <span className="px-2 py-1 bg-white/90 rounded text-xs font-mono text-foreground">
                {speed}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Content below */}
      {(title || description) && (
        <div className="mt-4 space-y-1">
          {title && (
            <p className="text-sm font-mono text-foreground-muted">{title}</p>
          )}
          {description && (
            <p className="text-foreground leading-relaxed">{description}</p>
          )}
        </div>
      )}
    </div>
  );
}

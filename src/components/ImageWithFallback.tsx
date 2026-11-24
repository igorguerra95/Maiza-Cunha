import React, { useState } from 'react';
import { Activity } from 'lucide-react';

interface ImageWithFallbackProps {
  src?: string;
  alt: string;
  className?: string;
  loading?: 'eager' | 'lazy';
  fallbackLabel?: string;
}

export function ImageWithFallback({
  src,
  alt,
  className = '',
  loading = 'lazy',
  fallbackLabel,
}: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false);

  if (!src || hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center gap-3 clinical-surface-gradient text-muted-foreground p-6 text-center ${className}`}
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-surface text-primary">
          <Activity className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
        </div>
        <span className="max-w-xs text-xs font-medium text-muted-foreground">
          {fallbackLabel || alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      decoding="async"
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}

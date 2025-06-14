import React from 'react';
import { cn } from '@/utils/cn';

export function Card({ className, ...props }) {
  return (
    <div
      className={cn(
        'rounded-lg border bg-white text-black shadow-sm dark:border-neutral-700 dark:bg-neutral-950 dark:text-white',
        className
      )}
      {...props}
    />
  );
}

export function CardHeader({ className, ...props }) {
  return (
    <div
      className={cn('p-4 border-b border-border', className)}
      {...props}
    />
  );
}

export function CardContent({ className, ...props }) {
  return (
    <div
      className={cn('p-4', className)}
      {...props}
    />
  );
}

export function CardFooter({ className, ...props }) {
  return (
    <div
      className={cn('p-4 border-t border-border', className)}
      {...props}
    />
  );
}

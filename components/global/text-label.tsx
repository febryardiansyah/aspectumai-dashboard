import { cn } from '@/lib/utils';
import React from 'react';

export default function TextLabel({
  label,
  required,
  className
}: {
  label: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <div className="flex flex-row gap-1">
      <div className={cn('text-muted-foreground', className)}>{label}</div>
      {required && <div className="text-red-500">*</div>}
    </div>
  );
}

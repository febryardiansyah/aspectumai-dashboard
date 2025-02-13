import { cn } from '@/lib/utils';
import TextLabel from './text-label';

type TextAreaProps = {
  className?: string;
  label?: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

function TextArea({ label, required, className, ...rest }: TextAreaProps) {
  return (
    <div className="flex flex-col gap-2 w-full">
      {label && <TextLabel label={label} required={required} />}
      <textarea
        className={cn(
          'flex rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        {...rest}
      />
    </div>
  );
}

export default TextArea;

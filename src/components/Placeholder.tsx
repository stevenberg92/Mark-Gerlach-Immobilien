import { ImageIcon } from "lucide-react";

type Props = {
  label: string;
  className?: string;
  tone?: "primary" | "accent" | "cream";
};

const TONES = {
  primary:
    "from-primary-700 via-primary-800 to-primary-950 text-primary-200 border-primary-800",
  accent:
    "from-accent-200 via-accent-300 to-accent-500 text-accent-900 border-accent-400",
  cream:
    "from-primary-100 via-primary-200 to-primary-300 text-primary-700 border-primary-300",
};

export default function Placeholder({ label, className = "", tone = "primary" }: Props) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`relative flex items-center justify-center overflow-hidden border bg-gradient-to-br ${TONES[tone]} ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_25%_15%,rgba(255,255,255,0.35),transparent_55%),radial-gradient(circle_at_80%_85%,rgba(0,0,0,0.3),transparent_55%)]" />
      <div className="relative flex flex-col items-center gap-2 px-6 text-center">
        <ImageIcon className="h-10 w-10 opacity-70" />
        <span className="font-sans text-xs font-medium uppercase tracking-widest opacity-80">
          {label}
        </span>
      </div>
    </div>
  );
}

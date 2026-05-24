interface WaveDividerProps {
  className?: string;
  fill?: string;
  flip?: boolean;
}

export function WaveDivider({
  className = "",
  fill = "#FFFFFF",
  flip = false,
}: WaveDividerProps) {
  return (
    <div
      className={`pointer-events-none w-full leading-none ${className}`}
      aria-hidden
    >
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className={`block h-12 w-full sm:h-16 ${flip ? "rotate-180" : ""}`}
      >
        <path
          d="M0,32 C240,72 480,72 720,40 C960,8 1200,8 1440,40 L1440,80 L0,80 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}

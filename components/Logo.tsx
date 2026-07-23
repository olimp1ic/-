// Знак «Смарт Декор» — рамка с разрывом справа и буквой М внутри.
// Цвет наследуется от родителя через currentColor.

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Смарт Декор"
    >
      <g fill="currentColor">
        {/* левая вертикаль */}
        <rect x="4" y="4" width="14" height="88" />
        {/* верхняя горизонталь */}
        <rect x="4" y="4" width="92" height="14" />
        {/* правая вертикаль — верхний отрезок */}
        <rect x="82" y="4" width="14" height="28" />
        {/* правая вертикаль — нижний отрезок */}
        <rect x="82" y="46" width="14" height="46" />
        {/* нижняя горизонталь (с разрывом справа) */}
        <rect x="4" y="78" width="56" height="14" />
        {/* буква М */}
        <path d="M50 42 L64 66 L78 42 V80 H70 V58 L64 68 L58 58 V80 H50 Z" />
      </g>
    </svg>
  );
}

// Знак «Смарт Декор» — квадратная рамка с вырезом и буквой М.
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
      {/* Рамка с вырезом */}
      <path
        d="M3 3 H97 V38 H88 V12 H12 V88 H54 L62 97 H3 Z"
        fill="currentColor"
      />
      {/* Буква М */}
      <path
        d="M50 40 L74 79 L98 40 V97 H87 V62 L74 82 L61 62 V97 H50 Z"
        fill="currentColor"
      />
    </svg>
  );
}

// Знак «Смарт Декор».
// Геометрия взята из фирменного вектора (CorelDRAW → SVG) без изменений.
// Цвет наследуется от родителя через currentColor.

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 339.997 342.387"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Смарт Декор"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M268.598 303.573l42.2616 -62.998 0 101.812 29.1379 0 0 -154.115 -29.1379 0 -42.2616 62.998 -42.2623 -62.998 -35.0874 0 77.3497 115.301zm-268.598 -303.573l339.997 0 0 136.811 -28.1585 0 0 -108.652 -283.68 0 0 286.069 163.715 0 16.2648 28.1585 -208.139 0 0 -342.387z"
      />
    </svg>
  );
}

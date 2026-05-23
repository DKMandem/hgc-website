import type { SVGProps } from "react";

/**
 * Dot-sphere brand mark, rendered as inline SVG so it stays sharp at any
 * size and is fully recolorable. Dot positions were traced from
 * `/images/hgc-logo-lightest-transparent.png` via canvas connected-component
 * analysis (1254x1254 source). The dots are sorted top-to-bottom so the
 * color ramp reads as a dimensional gradient.
 */

/** Brand green ramp — darkest at top, lightest at bottom. */
const GREEN_RAMP = [
  "#143d34", // darkest (brand)
  "#205a4d",
  "#338372",
  "#3f9885",
  "#6dc0ae", // lightest
] as const;

/**
 * Dots in source-canvas coordinates (0..1254). Sorted top → bottom so the
 * gradient ramp follows the natural light-to-dark axis of the original
 * sphere.
 */
const DOTS: ReadonlyArray<{ cx: number; cy: number; r: number }> = [
  { cx: 648, cy: 161, r: 22.4 },
  { cx: 764, cy: 173, r: 26.3 },
  { cx: 546, cy: 214, r: 27.7 },
  { cx: 671, cy: 229, r: 31.8 },
  { cx: 450, cy: 286, r: 30.1 },
  { cx: 573, cy: 304, r: 35.0 },
  { cx: 706, cy: 334, r: 38.6 },
  { cx: 851, cy: 374, r: 40.6 },
  { cx: 367, cy: 375, r: 30.0 },
  { cx: 478, cy: 393, r: 35.8 },
  { cx: 605, cy: 425, r: 40.2 },
  { cx: 750, cy: 467, r: 42.9 },
  { cx: 306, cy: 473, r: 27.2 },
  { cx: 392, cy: 489, r: 34.4 },
  { cx: 508, cy: 523, r: 40.0 },
  { cx: 648, cy: 567, r: 43.6 },
  { cx: 321, cy: 584, r: 31.1 },
  { cx: 800, cy: 617, r: 45.1 },
  { cx: 421, cy: 623, r: 37.8 },
  { cx: 956, cy: 669, r: 44.8 },
  { cx: 549, cy: 669, r: 42.4 },
  { cx: 261, cy: 674, r: 25.3 },
  { cx: 348, cy: 717, r: 33.8 },
  { cx: 697, cy: 720, r: 44.9 },
  { cx: 462, cy: 767, r: 39.5 },
  { cx: 278, cy: 801, r: 28.2 },
  { cx: 599, cy: 821, r: 42.8 },
  { cx: 388, cy: 856, r: 35.1 },
  { cx: 749, cy: 874, r: 43.9 },
  { cx: 511, cy: 912, r: 39.2 },
  { cx: 321, cy: 931, r: 29.6 },
  { cx: 439, cy: 991, r: 34.4 },
  { cx: 568, cy: 1046, r: 36.5 },
  { cx: 383, cy: 1053, r: 28.8 },
] as const;

const Y_MIN = DOTS[0].cy;
const Y_MAX = DOTS[DOTS.length - 1].cy;
const Y_RANGE = Y_MAX - Y_MIN;

function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const h = hex.replace("#", "");
  return {
    r: parseInt(h.slice(0, 2), 16),
    g: parseInt(h.slice(2, 4), 16),
    b: parseInt(h.slice(4, 6), 16),
  };
}

function rgbToHex(r: number, g: number, b: number): string {
  const c = (n: number) => n.toString(16).padStart(2, "0");
  return `#${c(r)}${c(g)}${c(b)}`;
}

/**
 * Smoothly interpolate the ramp by y-position. Pure top-to-bottom fade — a
 * dot's color depends only on how high or low it sits in the source canvas,
 * with continuous lerping between the 5 stops so there are no visible
 * banding boundaries between dots in similar y-positions.
 */
function rampColor(y: number, palette: ReadonlyArray<string>): string {
  const t = Math.max(0, Math.min(1, (y - Y_MIN) / Y_RANGE));
  const n = palette.length - 1;
  const x = t * n;
  const i = Math.min(n, Math.floor(x));
  const j = Math.min(n, i + 1);
  const f = x - i;
  const a = hexToRgb(palette[i]);
  const b = hexToRgb(palette[j]);
  return rgbToHex(
    Math.round(a.r + (b.r - a.r) * f),
    Math.round(a.g + (b.g - a.g) * f),
    Math.round(a.b + (b.b - a.b) * f),
  );
}

export interface LogoSphereProps extends SVGProps<SVGSVGElement> {
  /** Override the color ramp; defaults to the brand green ramp. */
  ramp?: ReadonlyArray<string>;
}

export function LogoSphere({ ramp, className, ...rest }: LogoSphereProps) {
  const palette = ramp ?? GREEN_RAMP;
  return (
    <svg
      viewBox="0 0 1254 1254"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Hansen Global Consult"
      className={className}
      {...rest}
    >
      {DOTS.map((d, i) => (
        <circle
          key={i}
          cx={d.cx}
          cy={d.cy}
          r={d.r}
          fill={rampColor(d.cy, palette)}
        />
      ))}
    </svg>
  );
}

// Re-export for callers that want the raw data
export { DOTS as LOGO_SPHERE_DOTS, GREEN_RAMP as LOGO_SPHERE_GREEN_RAMP };

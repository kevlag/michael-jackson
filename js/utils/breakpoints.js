/* ============================================================
   BREAKPOINTS — Utilitaires JS correspondant aux tokens CSS
   ============================================================ */

export const BREAKPOINTS = {
  xs:  393,
  sm:  640,
  md:  768,
  lg:  1024,
  xl:  1280,
  '2xl': 1440,
  '3xl': 1920,
};

/** Retourne true si la viewport est >= au breakpoint donné */
export function isAbove(bp) {
  return window.matchMedia(`(min-width: ${BREAKPOINTS[bp]}px)`).matches;
}

/** Retourne true si la viewport est < au breakpoint donné */
export function isBelow(bp) {
  return window.matchMedia(`(max-width: ${BREAKPOINTS[bp] - 1}px)`).matches;
}

/** Exécute un callback à chaque changement du breakpoint donné */
export function onBreakpoint(bp, callback) {
  const mq = window.matchMedia(`(min-width: ${BREAKPOINTS[bp]}px)`);
  mq.addEventListener('change', (e) => callback(e.matches));
  return mq;
}

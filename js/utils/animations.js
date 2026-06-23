/* ============================================================
   ANIMATIONS — Intersection Observer pour les scroll reveals
   ============================================================ */

/**
 * Initialise les animations au scroll sur tous les éléments
 * portant l'attribut data-animate.
 *
 * Usage HTML:
 *   <div data-animate="fade-up">...</div>
 *   <div data-animate="fade-in" data-delay="200">...</div>
 */
export function initScrollAnimations() {
  const elements = document.querySelectorAll('[data-animate]');
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const delay = el.dataset.delay ?? 0;
          setTimeout(() => el.classList.add('is-visible'), Number(delay));
          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
  );

  elements.forEach((el) => observer.observe(el));
}

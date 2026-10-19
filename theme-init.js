/* Página de inicio y páginas legales: se carga en <head>, antes de pintar.
 * - Aplica el tema elegido con el botón, para que no parpadee.
 * - Los enlaces antiguos de atajos compartidos (pixelote.de/#atajo=…) y la app
 *   ya instalada abren directamente la app, que antes vivía aquí. */
(function () {
  try { var th = localStorage.getItem('pixelote.theme'); if (th) document.documentElement.dataset.theme = th; } catch (e) {}
  // Solo en la página de inicio: las de privacidad y aviso legal usan este mismo archivo
  if (!/^\/(index\.html)?$/.test(location.pathname)) return;
  if (/^#atajo=/.test(location.hash)) { location.replace('app/' + location.hash); return; }
  try { if (matchMedia('(display-mode: standalone)').matches) location.replace('app/'); } catch (e) {}
})();

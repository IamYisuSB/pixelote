/* Página de inicio: se carga en <head>, antes de pintar.
 * - Aplica el tema elegido con el botón, para que no parpadee.
 * - Los enlaces antiguos de atajos compartidos (pixelote.de/#atajo=…) y la app
 *   ya instalada abren directamente la app, que antes vivía aquí. */
(function () {
  try { var th = localStorage.getItem('pixelote.theme'); if (th) document.documentElement.dataset.theme = th; } catch (e) {}
  if (/^#atajo=/.test(location.hash)) { location.replace('app/' + location.hash); return; }
  try { if (matchMedia('(display-mode: standalone)').matches) location.replace('app/'); } catch (e) {}
})();

/* Página de inicio: idioma, tema, año del pie y modo sin conexión. */
(function () {
  'use strict';

  I18N.init();
  PixeloteUI.setupTheme();
  PixeloteUI.setupLangPicker();
  PixeloteUI.setupFooter();

  // El service worker deja la app guardada desde la primera visita, aunque
  // se entre por aquí (solo servida por http/https)
  if ('serviceWorker' in navigator && /^https?:$/.test(location.protocol)) {
    navigator.serviceWorker.register('sw.js').catch(() => { /* sin modo sin conexión */ });
  }
})();

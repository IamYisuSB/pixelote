/* Páginas de privacidad y aviso legal: el texto está escrito entero en cada
 * idioma (article[data-lang]) y se muestra el del idioma elegido. */
(function () {
  'use strict';

  I18N.init();
  PixeloteUI.setupTheme();
  PixeloteUI.setupLangPicker();
  PixeloteUI.setupFooter();

  const show = () => {
    const blocks = document.querySelectorAll('article[data-lang]');
    const has = Array.from(blocks).some((a) => a.dataset.lang === I18N.lang);
    blocks.forEach((a) => { a.hidden = a.dataset.lang !== (has ? I18N.lang : 'es'); });
  };
  I18N.onChange(show);
  show();
})();

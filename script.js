/*
  The site is plain HTML, so this small script only handles language selection
  and the mobile navigation. All translated copy lives in the HTML files.
*/
(() => {
  const supportedLanguages = ['it', 'de', 'en'];
  const languageButtons = [...document.querySelectorAll('[data-lang]')];
  const translatedText = [...document.querySelectorAll('[data-it][data-de][data-en]')];
  const translatedImages = [...document.querySelectorAll('[data-alt-it][data-alt-de][data-alt-en]')];
  const navigation = document.querySelector('.main-nav');
  const menuButton = document.querySelector('.menu-toggle');

  // Fill in the current year in the footer without needing to edit each page.
  document.querySelectorAll('.year').forEach(element => {
    element.textContent = new Date().getFullYear();
  });

  // Pick up the visitor's last choice, or start in Italian on a first visit.
  let activeLanguage = 'it';
  try {
    const savedLanguage = localStorage.getItem('jana-site-language');
    if (supportedLanguages.includes(savedLanguage)) activeLanguage = savedLanguage;
  } catch (error) {
    // Some browsers block local storage; Italian remains the default.
  }

  function setLanguage(language) {
    if (!supportedLanguages.includes(language)) return;
    activeLanguage = language;

    // Update text nodes without replacing surrounding HTML or links.
    translatedText.forEach(element => {
      element.textContent = element.getAttribute(`data-${language}`);
    });
    translatedImages.forEach(image => {
      image.alt = image.getAttribute(`data-alt-${language}`);
    });

    // Keep the browser tab title and search preview in the selected language.
    const description = document.querySelector('meta[name="description"]');
    if (description) description.content = description.getAttribute(`data-description-${language}`);

    languageButtons.forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.lang === language));
    });
    document.documentElement.lang = language;

    try {
      localStorage.setItem('jana-site-language', language);
    } catch (error) {
      // The language still changes for this page even if it cannot be saved.
    }

    closeMenu();
  }

  function closeMenu() {
    if (!navigation || !menuButton) return;
    navigation.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', menuButton.getAttribute(`data-open-${activeLanguage}`));
  }

  languageButtons.forEach(button => {
    button.addEventListener('click', () => setLanguage(button.dataset.lang));
  });

  if (navigation && menuButton) {
    menuButton.addEventListener('click', () => {
      const isOpen = navigation.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(isOpen));
      menuButton.setAttribute('aria-label', menuButton.getAttribute(isOpen ? `data-close-${activeLanguage}` : `data-open-${activeLanguage}`));
    });

    navigation.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMenu);
    });
  }

  setLanguage(activeLanguage);
})();

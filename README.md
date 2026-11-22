# Jana Vikoler website

This is a small static website built with HTML, CSS and vanilla JavaScript. There is no build step or framework.

## Files

- `index.html` — home page
- `about.html` — background and professional experience
- `areas.html` — areas of support
- `approach.html` — therapeutic approach and what sessions can involve
- `practical.html` — location, languages, format and appointments
- `contact.html` — contact page and the fields that still need real details
- `style.css` — shared light white, gold and wine palette, layout, typography and responsive styles
- `script.js` — language switch, saved language preference and mobile menu
- `potrait_jana.PNG` — supplied portrait (the original filename spelling is preserved)

## View the site

Open `index.html` in a browser. For a local web server, open a terminal in this folder and run:

```sh
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Make changes

- Edit page content in its HTML file. Translated text uses `data-it`, `data-de` and `data-en` on the same element; keep all three values when changing a translation.
- Change colours and layout in `style.css`. The main palette is defined near the top in the `:root` variables.
- The `#reviews` section on each page is an empty, translated placeholder. Add real testimonials only when they are available and approved for use.
- The portrait uses a `portrait-frame` wrapper and a `portrait-image` class. Replace the image `src` in `index.html` and `about.html` to use a new photo while keeping those classes for the existing crop and frame.
- Button arrows and the mobile menu icon are drawn with CSS rather than emoji glyphs, so they keep the same appearance across devices.
- The small amount of interactive behaviour is in `script.js`. It remembers the chosen language in the browser and switches the mobile navigation open or closed.
- The email, phone number and practice address are placeholders in `contact.html`. Replace them with confirmed contact information before publishing. If adding an email link, use the real address in a `mailto:` link.
- The site header is repeated in each HTML file so every page works on its own. If you add or rename a page, update the navigation links in each page header.

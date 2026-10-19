# Digital Leadership

An interactive, browser-based presentation for Girl Scout Troop 44, presented by Joe Dwyer, PhD. The 16-slide deck introduces digital leadership through the Cadette, Senior, and Ambassador badge themes, with practical guidance on online safety, thoughtful sharing, advocacy, and evaluating impact.

## Run the presentation

No build step or package installation is required. Open `index.html` in a modern web browser, or serve the project directory with any static web server. For example, with Python installed:

```sh
python3 -m http.server 8000
```

Then visit <http://localhost:8000>.

The presentation uses Google Fonts when an internet connection is available; system font fallbacks are provided.

## Presentation controls

- Use **Next** and **Previous**, or the slide list in the left sidebar, to move through the deck.
- Use **Right Arrow**, **Space**, or **Page Down** to advance; use **Left Arrow** or **Page Up** to go back.
- Press **Home** or **End** to jump to the first or last slide.
- Select **Notes** or press **N** to show or hide presenter notes.
- Select **Present** to toggle full-screen mode.
- Slide position is reflected in the URL hash, so a slide can be linked directly (for example, `#slide-4`).
- The “Digital detective” slide includes a four-question interactive quiz.

## Project files

- [`index.html`](index.html) — page structure and presentation controls.
- [`styles.css`](styles.css) — visual design, layout, and responsive styling.
- [`app.js`](app.js) — slide content, navigation, presenter notes, and quiz behavior.
- [`CADETTE DIGITAL LEADERSHIP.pdf`](CADETTE%20DIGITAL%20LEADERSHIP.pdf), [`SENIOR DIGITAL LEADERSHIP.pdf`](SENIOR%20DIGITAL%20LEADERSHIP.pdf), and [`AMBASSADOR DIGITAL LEADERSHIP.pdf`](AMBASSADOR%20DIGITAL%20LEADERSHIP.pdf) — accompanying badge reference materials.

## License

The project is provided under the [MIT License](LICENSE).

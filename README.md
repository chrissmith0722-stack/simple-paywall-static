# Simple Paywall (Static)

A single HTML/JS page that hides content until the visitor enters a password.

**Client-side only** — fine for low-stakes gated notes, lead magnets, or demos.
Not suitable for high-value secrets (password is visible in source / network).

## Quick start

1. Open `index.html` in a browser (or host on any static host).
2. Change `PAYWALL_PASSWORD` in `app.js`.
3. Optionally set `CONTENT_KEY` so unlock persists in `sessionStorage`.

## Files

- `index.html` — structure + gated region
- `app.js` — password check + unlock
- `styles.css` — minimal styling
- `LICENSE` — MIT

## License

MIT

# Pokémon Dashboard

**Build:** A dashboard with 5 widgets all loading from PokéAPI: Random Pokémon spotlight, type distribution chart (how many Pokémon per type), generation comparison, ability of the day, and a mini team analyzer. All fetch in parallel. Each widget independent. Auto-refresh. One widget failing doesn't break others.

**Concepts:** `Promise.allSettled()`, `AbortController` for cancelling stale requests, `setInterval()` + `async/await` for auto-refresh, independent error handling per widget, everything from this tier combined.

**API:** Multiple PokéAPI endpoints simultaneously.

**Difficulty:** ⭐⭐⭐⭐⭐

## Files

- `index.html`
- `style.css`
- `script.js`

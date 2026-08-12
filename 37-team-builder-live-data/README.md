# Team Builder with Live Data

**Build:** Search and fetch real Pokémon from PokéAPI. Add to team (max 6). For each team member, fetch type effectiveness data in parallel. Shows team weaknesses and resistances. "Suggest next pick" fetches Pokémon that cover your team's weaknesses.

**Concepts:** `Promise.all()` to fetch type data for all 6 simultaneously, `Promise.allSettled()` in case one fails, chained fetches, combining multiple API responses, partial failure handling.

**API:** Multiple endpoints per Pokémon (base data + type effectiveness).

**Difficulty:** ⭐⭐⭐⭐


## Files

- `index.html`
- `style.css`
- `script.js`

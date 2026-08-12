# Pokémon Battle Simulator (Async Turns)

**Build:** Pick two Pokémon (fetched from API). Turns happen on timers — each Pokémon "attacks" after a delay based on its Speed stat. Damage calculated from real stats. HP bars drain. "Faster" Pokémon attacks first. Critical hits random. Winner declared when HP hits 0. Play-by-play battle log.

**Concepts:** `new Promise()` with `setTimeout()` based on stats, `async/await` for turn sequencing, `Promise.race()` for speed ties, building Promises from scratch, combining fetched data with game logic.

**Difficulty:** ⭐⭐⭐⭐


## Files

- `index.html`
- `style.css`
- `script.js`

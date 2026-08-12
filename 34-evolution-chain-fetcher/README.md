# Evolution Chain Fetcher

**Build:** Enter a Pokémon name. Fetches its evolution chain from PokéAPI (requires 3 chained API calls: pokemon → species → evolution-chain). Displays the full chain with sprites. Shows evolution conditions (level, stone, trade). Loading state for each step.

**Concepts:** Chained `async/await` calls (one depends on the previous), navigating recursive JSON (evolution chains are nested), sequential fetching, loading states per step.

**API:** `pokemon` → `pokemon-species` → `evolution-chain` (3 calls in sequence).

**Difficulty:** ⭐⭐⭐


## Files

- `index.html`
- `style.css`
- `script.js`

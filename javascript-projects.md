# Pokémon JavaScript Projects — From Zero to Confident

HTML, CSS, JavaScript. No frameworks. Each project is standalone — one folder, one `index.html`, one `script.js`, one `style.css`. Every project lives in the Pokémon universe.

**Goal:** Learn JavaScript fundamentals by building Pokémon tools, games, and apps. Each project targets specific concepts. They get harder as you go.

---

## TIER 1: FUNCTIONS & LOGIC (Projects 1–10)

Variables, functions, if/else, loops, DOM manipulation, basic events.

---

### 1. Pokémon Greeting Card

**Build:** Form inputs for a trainer name, starter Pokémon, and rival name. Hit "Generate" and it outputs a custom trainer card story: "Welcome, {name}! Professor Oak has given you {starter}. Your rival {rival} chose {counter-starter}. Your adventure begins!" Different starters give different stories.

**Concepts:** `document.getElementById()`, template literals, functions with parameters and return values, basic DOM updates.

**Difficulty:** ⭐

---

### 2. Damage Calculator

**Build:** Pick an attacking Pokémon, a move (with base power), and a defending Pokémon. Calculates damage using a simplified version of the real damage formula: `((2 * level / 5 + 2) * power * atk / def) / 50 + 2`. Factor in type effectiveness (2x, 0.5x, 0x). Show "It's super effective!" or "It's not very effective..."

**Concepts:** Math operators, `parseFloat()`, functions with multiple parameters, if/else for type matchups, `toFixed()` for clean numbers.

**Difficulty:** ⭐⭐

---

### 3. Who's That Pokémon?

**Build:** Shows a Pokémon silhouette (CSS filter: brightness(0) on the image). Player types a guess. "Too many letters" / "Too few letters" hints. Optional: first letter hint. Reveal with animation on correct guess or after 5 wrong tries. Score tracking.

**Concepts:** `Math.random()` to pick from an array, string comparison (`.toLowerCase()`), `.length` comparison, tracking state across guesses, conditional logic.

**Difficulty:** ⭐⭐

---

### 4. Pokémon Type Matchup Checker

**Build:** Pick two types from dropdowns (attacking type vs defending type). Shows: super effective, not very effective, no effect, or normal. Handles dual types (Fire/Flying defending against Rock → 4x). Reference chart visible on the side.

**Concepts:** Nested objects as lookup tables (`typeChart.fire.water = 0.5`), accessing nested properties, multiplication for dual types, switch or object lookup patterns.

**Difficulty:** ⭐⭐

---

### 5. Random Pokémon Generator

**Build:** Button generates a random Pokémon card: random name from a list, random type, random stats (HP, Attack, Defense, Speed — each 1–100), random level. Card styled like a real Pokémon card. "Save to Collection" stores in localStorage. View your collection.

**Concepts:** `Math.random()` and `Math.floor()`, arrays, building objects from random values, `localStorage`, `JSON.stringify()` / `JSON.parse()`, CSS card layout.

**Difficulty:** ⭐⭐

---

### 6. Pokémon Evolution Timer

**Build:** Pick a Pokémon. It "evolves" after a countdown (Charmander → 30s → Charmeleon → 60s → Charizard). Live countdown with progress bar. Evolution animation (flash + image swap). Multiple evolution chains running at once. Pause/resume.

**Concepts:** `setInterval()`, `clearInterval()`, date/time math, modulo for time display, updating DOM every second, managing multiple timers.

**Difficulty:** ⭐⭐

---

### 7. Pokémon Quiz

**Build:** "Which Pokémon is this type?", "What generation is this Pokémon?", "Which move does more damage?" — 15+ questions. One at a time. Timer per question. Score screen with review. Difficulty selector (easy/hard changes the options).

**Concepts:** Arrays of objects (question, options, correct, difficulty), accessing nested properties, game state tracking, `setTimeout()` for timer, functions that advance state.

**Difficulty:** ⭐⭐

---

### 8. Pokémon Color Theme Generator

**Build:** Pick a Pokémon. Extract its main colors and generate a color palette (e.g., Charizard → orange, red, cream, blue). Display palette with hex codes. Copy any color. "Apply theme" changes the page background/text to that palette. Cycle through Pokémon to find your favorite palette.

**Concepts:** Predefined color mappings per Pokémon type, string formatting (hex codes), `navigator.clipboard`, CSS variable manipulation from JS (`document.documentElement.style.setProperty()`), event listeners.

**Difficulty:** ⭐⭐

---

### 9. Pokémon Mood Tracker

**Build:** Each day, pick a Pokémon that matches your mood (Snorlax = tired, Pikachu = energetic, Psyduck = confused, Gengar = mischievous). Calendar grid shows the month with Pokémon icons. Stats: "You were Snorlax 8 times this month." Streak tracking.

**Concepts:** Arrays of objects, `.filter()` to count, `.forEach()` to render, `localStorage`, `JSON.stringify()` / `JSON.parse()`.

**Difficulty:** ⭐⭐

---

### 10. Pokémon Battle Scorekeeper

**Build:** Two trainers with 6 Pokémon each. Click a Pokémon to mark it fainted. Track remaining Pokémon per side. Declare winner when one side hits 0. Battle log: "Pikachu fainted!" Reset. Match history.

**Concepts:** Array of objects, tracking state, DOM manipulation, event listeners on dynamic elements, conditional logic for win checking, basic state management.

**Difficulty:** ⭐⭐

---

## TIER 2: ARRAYS & STRINGS (Projects 11–20)

`.map()`, `.filter()`, `.reduce()`, `.sort()`, `.find()`, `.some()`, `.every()`, spread, destructuring.

---

### 11. Pokédex Browser

**Build:** Hardcode 50+ Pokémon (name, number, type(s), stats, generation, evolves_from). Render as cards. Filter by type. Search by name. Sort by any stat, name, or number. Click for detail view. Count by generation.

**Concepts:** `.filter()` chaining (type AND search), `.sort()` with custom compare, `.find()`, `.map()` to render, destructuring, complex nested objects.

**Difficulty:** ⭐⭐⭐

---

### 12. Team Builder

**Build:** Browse Pokémon, add to your team (max 6). Shows team with total/average stats. Type coverage analysis: "Your team has no Water type — you're weak to Ground." Remove and reorder. "Suggest" button recommends a Pokémon that fills a type gap.

**Concepts:** `.reduce()` to sum stats, `.some()` / `.every()` for coverage checks, `.filter()` to find type gaps, spread operator (`[...team, newMon]`), `.find()` for suggestions.

**Difficulty:** ⭐⭐⭐

---

### 13. Pokémon Move List Manager

**Build:** A list of moves with name, type, power, accuracy, PP, category (physical/special). Add custom moves. Sort by any column. Filter by type or category. Search. "Build a moveset" — pick 4 moves for a Pokémon, show total type coverage.

**Concepts:** `.sort()` with dynamic compare (sort by different keys), `.filter()` chains, `.slice()` to limit to 4, `.map()` for rendering, `Object.keys()` for column headers.

**Difficulty:** ⭐⭐⭐

---

### 14. Pokémon Name Analyzer

**Build:** Enter any Pokémon name (or make one up). Analyze it: letter count, vowel/consonant ratio, which real Pokémon names it's most similar to, what type it "sounds like" based on letter patterns (names with 'z' or 'x' tend to be Psychic/Dark, names ending in '-saur' tend to be Grass). Generate a fake Pokémon name from patterns.

**Concepts:** `.split()`, `.filter()` for vowels/consonants, `.reduce()` for counting, `.map()` to transform, string comparison, `.includes()`, `.endsWith()`, `.startsWith()`.

**Difficulty:** ⭐⭐⭐

---

### 15. IV / Stat Calculator

**Build:** Enter a Pokémon's base stats, level, nature, and IVs/EVs. Calculates actual stats using the real formula. "What level do I need to reach X speed?" solver. Compare two Pokémon at the same level. Bar chart of stats.

**Concepts:** `.reduce()` for totals, `.map()` for stat calculations, `Math.floor()`, functions that encapsulate formulas, `Object.entries()` for iterating stat objects, calculating percentages for chart bars.

**Difficulty:** ⭐⭐⭐

---

### 16. Pokémon Trade Evaluator

**Build:** "Is this a fair trade?" — add Pokémon to each side. Each has a value based on rarity, stats, and type. Shows total value per side. Highlights who's getting the better deal. Trade history log. "Suggest fair trade" balances both sides.

**Concepts:** `.reduce()` to sum values, `.sort()` for ranking, `.filter()` by criteria, `Object.entries()`, comparison logic, `.map()` for rendering both sides.

**Difficulty:** ⭐⭐⭐

---

### 17. Pokémon Hangman

**Build:** Guess the Pokémon name letter by letter. Blanks for each letter. Wrong guesses build a Poké Ball (6 parts). Hint: show the type or silhouette after 3 wrong. Win/loss record. Difficulty: Gen 1 (easy) vs all gens (hard).

**Concepts:** `.split('')` for letters, `.includes()` for checking, `.map()` with ternary for reveal, `.every()` for win check, `.filter()` for wrong guesses, Set for used letters.

**Difficulty:** ⭐⭐⭐

---

### 18. Stat Comparison Tool

**Build:** Pick two Pokémon. Side-by-side stat bars. Each stat highlights the winner in green. Overall rating comparison. "Who wins?" based on type matchup + stats. Speed tie-breaker logic.

**Concepts:** `Object.keys()` / `Object.values()` / `Object.entries()`, `.map()` for chart bars, `Math.max()` for comparisons, `.every()` / `.some()`, CSS widths from percentages.

**Difficulty:** ⭐⭐⭐

---

### 19. Sorting Visualizer (Pokémon Stats)

**Build:** A row of Pokémon sorted by a stat. Buttons: Bubble Sort, Selection Sort, Insertion Sort. Watch them swap positions in slow motion — Pokémon slide past each other. Speed slider. Comparison counter. "Race" mode: two algorithms side by side.

**Concepts:** Sorting algorithms step by step, `async/await` with delays for animation, array destructuring for swaps, DOM updates per step, understanding O(n²) visually.

**Difficulty:** ⭐⭐⭐

---

### 20. Tournament Bracket

**Build:** Enter 8 or 16 Pokémon. Randomly seed the bracket. Click the winner of each battle to advance. Visual bracket. Type advantage indicator on each matchup. Champion celebration. "Auto-sim" runs the whole tournament based on stats.

**Concepts:** Nested arrays (rounds → matchups), `.sort()` + random for seeding, `.splice()` to pair, `.filter()` for winners, `.map()` per round, destructuring.

**Difficulty:** ⭐⭐⭐

---

## TIER 3: DATA STRUCTURES & LOGIC (Projects 21–30)

Stacks, queues, sets, maps, 2D arrays, graphs. Each project uses one naturally.

---

### 21. Move History with Undo/Redo (Stack)

**Build:** A Pokémon battle simulator (simplified). Pick moves each turn. "Undo" takes back the last move (stack pop → redo stack push). "Redo" replays it. Show the battle log. Track HP changes through the stack.

**Data structure:** Stack — LIFO (last move is first to undo).

**Concepts:** `.push()` / `.pop()` as stack ops, undo/redo with two stacks, state snapshots, reconstructing state from history.

**Difficulty:** ⭐⭐⭐

---

### 22. Pokémon Center Queue (Queue)

**Build:** Injured Pokémon arrive at the Pokémon Center. They enter the queue. Nurse Joy heals one at a time (progress bar based on how damaged they are). More Pokémon keep arriving randomly. Critical condition Pokémon get priority. Queue visualized as a line.

**Data structure:** Queue — FIFO (first to arrive, first healed). Priority queue for critical.

**Concepts:** `.push()` / `.shift()`, `setInterval()` for arrivals, priority queue logic, visual queue display, processing with timers.

**Difficulty:** ⭐⭐⭐

---

### 23. Pokédex Lookup (Set + Map)

**Build:** A Pokédex with instant lookup. Type a name — instantly says if it exists in your Pokédex (Set). Shows how many times you've encountered each Pokémon (Map). "New encounter" increments the count. Stats: unique Pokémon seen, most encountered, completion percentage.

**Data structure:** Set for O(1) exists check, Map for encounter counts.

**Concepts:** `new Set()`, `new Map()`, `.has()`, `.get()` / `.set()`, `.size`, iterating Maps with `.entries()`, converting Map to sorted array.

**Difficulty:** ⭐⭐⭐⭐

---

### 24. PC Box Manager (Two Stacks)

**Build:** Like the PC storage system in the games. "Deposit" pushes a Pokémon onto the current box stack. "Withdraw" pops the last deposited. "Previous box" / "Next box" navigates between boxes (each is its own stack). Move Pokémon between boxes. Search across all boxes.

**Data structure:** Multiple stacks (one per box), navigation between them.

**Concepts:** Stack operations on multiple stacks, array of stacks, searching across data structures, state management, visual grid display.

**Difficulty:** ⭐⭐⭐⭐

---

### 25. Pokémon Snake

**Build:** Snake game but you're a Pokémon. Eating berries makes you grow (and you evolve at certain lengths: Charmander → Charmeleon → Charizard). Different berries give different points. Poison berry shrinks you. Arrow keys to move. Speed increases. High score.

**Data structure:** Queue — body adds to head, removes from tail.

**Concepts:** `.unshift()` + `.pop()` as queue, `setInterval()` game loop, `keydown` events, 2D coordinates, `.some()` for collision, evolution thresholds.

**Difficulty:** ⭐⭐⭐⭐

---

### 26. Pokémon Chat / Trade Room (Queue + Map)

**Build:** A simulated trade chat. Bot trainers post offers on random timers ("Trading my Haunter, looking for Kadabra"). Messages queue up in order. React with emojis (Map: messageId → reactions). Filter by Pokémon type mentioned. Post your own offers. "Trade accepted" mechanic.

**Data structure:** Queue for messages, Map for reactions.

**Concepts:** `setTimeout()` with random delays, event delegation, Map operations, `Date.now()` for timestamps, `.includes()` for filtering messages.

**Difficulty:** ⭐⭐⭐⭐

---

### 27. Route Pathfinder (2D Array + BFS)

**Build:** A grid-based Pokémon region map. Place tall grass, water, trees (obstacles). Set start city and destination. "Find Route" uses BFS to find the shortest path and animates the trainer walking it. Random wild Pokémon encounters on grass tiles.

**Data structure:** 2D array for the map, queue for BFS.

**Concepts:** 2D array creation, BFS algorithm, grid neighbors, queue-based exploration, animation of pathfinding, why BFS = shortest path.

**Difficulty:** ⭐⭐⭐⭐⭐

---

### 28. Pokémon Search with Autocomplete

**Build:** Search across 800+ Pokémon names. Dropdown shows matches as you type. Matching text bolded. Arrow keys to navigate suggestions. Enter selects. Shows sprite and basic info on select. Fast even with the full national dex.

**Concepts:** `.filter()` + `.startsWith()`, `.slice()` for highlighting, keyboard events (ArrowUp, ArrowDown, Enter, Escape), debouncing, performance with large lists.

**Difficulty:** ⭐⭐⭐⭐

---

### 29. Evolution Tree (Graph)

**Build:** Visualize Pokémon evolution chains as a tree/graph. Eevee's branching evolutions are the star. Click a Pokémon to see what it evolves into/from. "Path to" shows the full chain. Detect if a Pokémon has no evolutions. Visual tree with connecting lines. Branching paths (Eevee → 8 eeveelutions).

**Data structure:** Graph / tree (adjacency list).

**Concepts:** Graph representation with Map, tree traversal, rendering a visual tree, finding paths, handling branching, parent ↔ child navigation.

**Difficulty:** ⭐⭐⭐⭐⭐

---

### 30. Pokémon Ecosystem Simulation (Game of Life Variant)

**Build:** A grid where Pokémon exist in an ecosystem. Grass types spawn near water. Fire types spread and reduce grass. Water types put out fire. Each tick, the grid updates based on neighbor rules. Watch the ecosystem evolve. Place Pokémon manually or let it auto-populate. Balance controls (fire spread rate, grass growth).

**Data structure:** 2D array.

**Concepts:** 2D arrays, nested loops for neighbor counting, immutable updates (new grid from old), `setInterval()` for simulation, emergent behavior from simple rules.

**Difficulty:** ⭐⭐⭐⭐⭐

---

## TIER 4: ASYNC & PROMISES (Projects 31–40)

`fetch()`, Promises, `async/await`, the PokéAPI, error handling, loading states.

---

### 31. Random Pokémon Fetcher (First API Call)

**Build:** Button fetches a random Pokémon from PokéAPI. Shows sprite, name, types, stats. Loading spinner while waiting. "Save to favorites" in localStorage. Do it two ways: `.then()` chain first, then refactor to `async/await`.

**Concepts:** `fetch()`, `.then()` / `.catch()`, `async/await`, `response.json()`, loading/error states, PokéAPI basics.

**API:** `https://pokeapi.co/api/v2/pokemon/{id}`

**Difficulty:** ⭐⭐

---

### 32. Pokémon of the Day

**Build:** Fetches a "Pokémon of the day" (deterministic — same one for everyone today based on the date). Shows full details: sprite, types, abilities, stats, flavor text. Caches in localStorage so it doesn't re-fetch on refresh. "Yesterday's Pokémon" link.

**Concepts:** `fetch()`, navigating deeply nested JSON, `try/catch`, conditional fetching (check cache first), date-based seed for "random."

**API:** PokéAPI endpoints for species, types, abilities.

**Difficulty:** ⭐⭐⭐

---

### 33. Pokémon Comparison Tool

**Build:** Enter two Pokémon names. Fetches both from PokéAPI simultaneously. Side-by-side stat bars. Type matchup analysis. "Who would win?" verdict. Handle misspelled names gracefully.

**Concepts:** `Promise.all()` for parallel fetches, destructuring API responses, `.sort()` on fetched data, error handling per Pokémon, comparing objects.

**API:** Fetch two Pokémon at once.

**Difficulty:** ⭐⭐⭐

---

### 34. Evolution Chain Fetcher

**Build:** Enter a Pokémon name. Fetches its evolution chain from PokéAPI (requires 3 chained API calls: pokemon → species → evolution-chain). Displays the full chain with sprites. Shows evolution conditions (level, stone, trade). Loading state for each step.

**Concepts:** Chained `async/await` calls (one depends on the previous), navigating recursive JSON (evolution chains are nested), sequential fetching, loading states per step.

**API:** `pokemon` → `pokemon-species` → `evolution-chain` (3 calls in sequence).

**Difficulty:** ⭐⭐⭐

---

### 35. Pokédex App

**Build:** Paginated Pokédex. Load 20 Pokémon at a time. Click for full details (fetches more data). Search by name. Filter by type (fetch type endpoint). Smooth loading transitions. Back button returns to list without refetching.

**Concepts:** `fetch()` with pagination, `async/await` in event handlers, caching fetched data to avoid re-fetching, multiple API endpoints, managing UI states.

**API:** Paginated list + individual Pokémon details.

**Difficulty:** ⭐⭐⭐

---

### 36. Pokémon Type Racer

**Build:** A Pokémon name appears — type it as fast as you can. Names get harder (longer, less common). Real-time accuracy checking (green/red per character). WPM score. Fetches random Pokémon from PokéAPI for the name list. Leaderboard.

**Concepts:** `fetch()` to get names, `Date.now()` for timing, character-by-character comparison, `.split('')` + `.map()`, `setInterval()` for live stats, combining API data with game logic.

**Difficulty:** ⭐⭐⭐⭐

---

### 37. Team Builder with Live Data

**Build:** Search and fetch real Pokémon from PokéAPI. Add to team (max 6). For each team member, fetch type effectiveness data in parallel. Shows team weaknesses and resistances. "Suggest next pick" fetches Pokémon that cover your team's weaknesses.

**Concepts:** `Promise.all()` to fetch type data for all 6 simultaneously, `Promise.allSettled()` in case one fails, chained fetches, combining multiple API responses, partial failure handling.

**API:** Multiple endpoints per Pokémon (base data + type effectiveness).

**Difficulty:** ⭐⭐⭐⭐

---

### 38. Infinite Pokédex Scroll

**Build:** Shows Pokémon cards. Scroll near the bottom → loads more automatically. Sprites lazy-load when scrolled into view. Smooth placeholder shimmer while loading. "Back to top" button. Generation filters.

**Concepts:** `IntersectionObserver` for lazy loading and infinite scroll, `fetch()` with offset pagination, `new Promise()` from scratch, sequential async, loading/empty/error states.

**API:** PokéAPI with `?offset=20&limit=20`.

**Difficulty:** ⭐⭐⭐⭐

---

### 39. Pokémon Battle Simulator (Async Turns)

**Build:** Pick two Pokémon (fetched from API). Turns happen on timers — each Pokémon "attacks" after a delay based on its Speed stat. Damage calculated from real stats. HP bars drain. "Faster" Pokémon attacks first. Critical hits random. Winner declared when HP hits 0. Play-by-play battle log.

**Concepts:** `new Promise()` with `setTimeout()` based on stats, `async/await` for turn sequencing, `Promise.race()` for speed ties, building Promises from scratch, combining fetched data with game logic.

**Difficulty:** ⭐⭐⭐⭐

---

### 40. Pokémon Dashboard

**Build:** A dashboard with 5 widgets all loading from PokéAPI: Random Pokémon spotlight, type distribution chart (how many Pokémon per type), generation comparison, ability of the day, and a mini team analyzer. All fetch in parallel. Each widget independent. Auto-refresh. One widget failing doesn't break others.

**Concepts:** `Promise.allSettled()`, `AbortController` for cancelling stale requests, `setInterval()` + `async/await` for auto-refresh, independent error handling per widget, everything from this tier combined.

**API:** Multiple PokéAPI endpoints simultaneously.

**Difficulty:** ⭐⭐⭐⭐⭐

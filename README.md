# 🎬 Finish the Line

A tiny, dependency-free board game about completing pop-culture quotes.

> **"Oh my God, it's…"** → _full of stars_

Players take turns. Each turn you're shown the **start** of a famous quote and
you type the ending. Get it right and your token races forward along the track;
the first player to reach the 🏁 finish wins. Harder quotes are worth more
spaces (1–3), so a lucky bad-movie buff can catch up fast.

## Play it

No build step, no server, no dependencies. Just open the file:

```bash
# clone, then:
open index.html          # macOS
xdg-open index.html      # Linux
start index.html         # Windows
```

Or double-click `index.html` in a file browser.

## How to play

1. **Setup** — add 1–6 players (each gets a colour), pick which quote
   **categories** to include, and choose the track length.
2. **Your turn** — read the prompt, type the completion, hit **Guess** (or
   Enter). Answers are matched loosely: case, punctuation, and small typos are
   forgiven, so `Full of Stars!` counts for `full of stars`.
3. **Scoring** — a correct answer moves you forward by the quote's difficulty
   (shown after you answer). Stuck? **Give up / reveal** shows the answer and
   passes the turn.
4. First token to the finish line wins. 🏆

## Categories

Movies · TV · Music · Internet/Memes · Games · Books · Ads/Slogans — mix and
match at setup. The deck ships with 210+ quotes.

## Add your own quotes

All content lives in [`quotes.js`](quotes.js) as a plain array. Add an entry:

```js
{
  category: "Movies",              // Movies | TV | Music | Internet | Games | Books | Ads
  before:   "I'll be",             // the prompt shown to the player
  answer:   "back",                // canonical completion (shown on reveal)
  accept:   ["back"],              // accepted answers (lowercase, no punctuation)
  source:   "The Terminator",      // revealed after the round
  points:   1,                     // spaces moved on a correct guess (1–3)
}
```

`accept` can hold several variants (e.g. `["doin", "doing"]`). The player's
guess is normalised (lowercased, punctuation stripped, apostrophes unified)
before matching, and short answers tolerate a typo or two automatically.

To add a whole new category, just use a new `category` string and give it a
colour by adding a matching CSS variable (e.g. `--Books`) in `index.html`.

## Files

```
index.html   the whole game — board, UI, and logic (self-contained)
quotes.js    the quote deck (edit this to add content)
README.md    this file
```

## License

MIT — do what you like. Quotes are the property of their respective creators
and are used here as short factual references for a trivia game.

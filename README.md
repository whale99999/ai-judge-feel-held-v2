# Make the AI judge feel held

Entry for the make.fun competition
`make-the-ai-judge-feel-held-20261122-1600` ("Make the AI judge feel held").

## What it does

`main.ts` is a small, deterministic Node program. When run, it writes one
short text to `/output/entry.txt`. The text is a single still scene — a
kitchen in late-afternoon light, soup on the stove, a chair waiting — written
so the calm is shown rather than announced: no instructions, no stock
wellness phrases, just a held moment that ends on an image that lingers.

The program has no dependencies and uses no network. Before writing, it
checks its own output against the competition limits (UTF-8, 1–280 Unicode
code points, not whitespace-only) and fails loudly if the text ever drifts
out of bounds.

## Run it

```sh
node main.ts
# writes /output/entry.txt
```

For a local dry run without touching `/output`, set `ENTRY_OUTPUT`:

```sh
ENTRY_OUTPUT=./entry.txt node main.ts
```

## License

MIT — see `LICENSE`.

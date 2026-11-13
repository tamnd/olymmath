---
tag: HPPDHGBVNY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=205143
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider filling each square of a $100\times 100$ grid with one of the letters $J$, $M$, or $O$. Define a "good block" as a $2\times 2$ square that satisfies one of the following conditions:

- All four squares have the same letter.

- Two distinct letters appear, each repeated twice.

- Three distinct letters appear, with the bottom-left and top-right squares having the same letter.

Find the number of ways to fill the grid such that all $2\times 2$ squares are good blocks, and there are exactly $10000$ pairs of adjacent squares with different letters.

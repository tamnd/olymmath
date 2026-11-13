---
tag: WXYN5B0KSX
kind: problem
type: answer
answer: \text{True}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=242663
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In each $ 2007^{2}$ unit squares on chess board whose size is $ 2007\times 2007$,
there lies one coin each square such that their "heads" face upward.
Consider the process that flips four consecutive coins on the same row, or flips four consecutive coins on the same column.
Doing this process finite times, we want to make the "tails" of all of coins face upward, except one that lies in the $ i$th row and $ j$th column.
Show that this is possible if and only if both of $ i$ and $ j$ are divisible by $ 4$.

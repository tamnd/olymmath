---
tag: PHBCBGJ473
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231723
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Starting at a vertex $x_0$, we walk over the edges of a connected graph $G$ according to the following rules:

1. We never walk the same edge twice in the same direction.

2. Once we reach a vertex $x \ne x_0$, never visited before, we mark the edge by which we come to $x$. We can use this marked edge to leave vertex $x$ only if we already have traversed, in both directions, all other edges incident to $x$.

Show that, regardless of the path followed, we will always be stuck at $x_0$ and that all other edges will have been traveled in both directions.

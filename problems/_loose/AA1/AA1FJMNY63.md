---
tag: AA1FJMNY63
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=54833
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On an infinite strip of cells numbered by integers, several stones lie (possibly several in one cell). The following actions are allowed:

1. Remove one stone from cells $n-1$ and $n$ and place one stone in cell $n+1$;
2. Remove two stones from cell $n$ and place one stone in cells $n+1, n-2$.

Prove that for any sequence of actions, we will reach a situation where the specified actions can no longer be performed, and this final situation does not depend on the sequence of actions (but only on the initial distribution of stones in the cells).

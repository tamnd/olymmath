---
tag: GNF9R4P1TB
kind: problem
type: answer
answer: "2358"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=219433
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There is a pack of 27 distinct cards, and each card has three values on it. The first value is a shape from $\{\Delta,\square,\odot\}$; the second value is a letter from $\{A,B,C\}$; and the third value is a number from $\{1,2,3\}$.
In how many ways can we choose an unordered set of 3 cards from the pack, so that no two of the chosen cards have two matching values.
For example we can chose $\{\Delta A1,\Delta B2,\odot C3\}$
But we cannot choose $\{\Delta A1,\square B2,\Delta C1\}$

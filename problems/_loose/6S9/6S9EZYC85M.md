---
tag: 6S9EZYC85M
kind: problem
type: answer
answer: \{2, 3, 6, 8, 24\}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263893
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A set is $reciprocally\ whole$ if its elements are distinct integers greater than 1 and the sum of the reciprocals of all these elements is exactly 1. Find a set $S$, as small as possible, that contains two reciprocally whole subsets, $I$ and $J$, which are distinct, but not necessarily disjoint (meaning they may share elements, but they may not be the same subset). Prove that no set with fewer elements than $S$ can contain two reciprocally whole subsets.

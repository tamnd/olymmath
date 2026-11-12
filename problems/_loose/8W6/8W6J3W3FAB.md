---
tag: 8W6J3W3FAB
kind: problem
type: answer
answer: \binom{2n}{n}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=897
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: pl-om/1987
    source: hf-numinamath-1-5
    label: XXXVIII OM - I - Problem 4
---
For a given natural number $ n $, we consider the family $ W $ of all sets $ A $ of pairs of natural numbers not greater than $ n $, such that if $ (a, b) \in A $, then $ (x, y) \in A $ for $ 1 \leq x \leq a $, $ 1 \leq y \leq b $.
Prove that the family $ W $ consists of $ \binom{2n}{n} $ different sets.

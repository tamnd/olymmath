---
tag: BAMMYBDS8R
kind: problem
type: answer
answer: 5\cdot(4^n+(-2)^n)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=1862
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: pl-om/2007
    source: hf-numinamath-1-5
    label: LVIII OM - I - Problem 4
---
For each natural number $ n\ge 3 $, determine the number of sequences $ (c_1,c_2,\ldots,c_n) $, where $ {c_i\in\{0,1,\ldots,9\}} $, with the following property:\break in every triple of consecutive terms, there are at least two terms that are equal.

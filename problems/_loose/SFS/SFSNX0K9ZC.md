---
tag: SFSNX0K9ZC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220742
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Fuzzy likes isosceles trapezoids. He can choose lengths from $1, 2, \dots, 8$, where he may choose any amount of each length. He takes a multiset of three integers from $1, \dots, 8$. From this multiset, one length will become a base length, one will become a diagonal length, and one will become a leg length. He uses each element as either a diagonal, leg, or base length exactly once. Fuzzy is happy if he can use these lengths to make an isosceles trapezoid such that the undecided base has nonzero rational length. How many multiset choices can he make? (Multisets are unordered)

*Proposed by Timothy Qian*

---
tag: WCAA29SFZF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=88290
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Croatia/train/0000.parquet#row=64
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hr-mo/2011
    source: hf-mathnet
    label: Croatia CroatianCompetitions2011
---
Let $a$ and $b$ be real numbers greater than 1 such that the numbers $\log _{b} a, \log _{2 b}(2 a)$ and $\log _{4 b}(4 a)$, in that order, are consecutive terms of an arithmetic sequence.

Prove that the numbers $a$ and $b$ are equal.

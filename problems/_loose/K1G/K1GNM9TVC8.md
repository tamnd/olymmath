---
tag: K1GNM9TVC8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=89054
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Croatia/train/0001.parquet#row=67
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hr-mo
    source: hf-mathnet
    label: Croatia Croatia Mathematical Competitions
---
Let $a=\sqrt[2015]{2015}$ and let $\left(a_{n}\right)$ be a sequence such that $a_{1}=a$ and $a_{n+1}=a^{a_{n}}$ for $n \geqslant 1$.

Does there exist a natural number $n$ such that $a_{n} \geqslant 2015$?

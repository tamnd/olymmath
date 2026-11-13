---
tag: HYKQD3D0WH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=242936
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Baltic_Way/train/0001.parquet#row=332
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: baltic-way/2020
    source: hf-mathnet
    label: Baltic Way Baltic Way 2020
---
Denote by $s(n)$ the sum of all natural divisors of $n$ which are smaller than $n$. Does there exist a positive integer $a$ such that the equation $$s(n)=a+n$$ has infinitely many solutions in positive integers?

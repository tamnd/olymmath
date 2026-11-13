---
tag: KE1HTX4R6T
kind: problem
type: answer
answer: n(n+1)/2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=178976
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0000.parquet#row=475
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo
    source: hf-mathnet
    label: Romania 65th Romanian Mathematical Olympiad
---
Let $n$ be a non-zero natural number. For each natural number $k$, we denote by $a(k, n)$ the number of natural divisors $d$ of $k$ such that $k \leq d^{2} \leq n^{2}$. Calculate $\sum_{k=1}^{n^{2}} a(k, n)$.

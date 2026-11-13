---
tag: 2MD2Y6V1YM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=89672
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Croatia/train/0000.parquet#row=184
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hr-mo
    source: hf-mathnet
    label: Croatia Mathematica competitions in Croatia
---
For a given natural number $k$, let $S(k)$ be the sum of all numbers in the set $\{1,2, \ldots, k\}$ that are relatively prime to $k$. Let $m$ be a natural number and $n$ be an odd natural number. Prove that there exist natural numbers $x$ and $y$, such that $m$ divides $x$, and $2 S(x) = y^n$.

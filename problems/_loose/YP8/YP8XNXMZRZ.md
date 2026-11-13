---
tag: YP8XNXMZRZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=177739
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Bulgaria/train/0000.parquet#row=252
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
After a volleyball tournament (every two teams played exactly once) with $n$ teams it turned out that for any two teams $A$ and $B$, such that $B$ wins over $A$, there exist positive integer $t$ and teams $C_{1}, C_{2}, \ldots, C_{t}$, such that $A$ wins over $C_{1}, C_{1}$ wins over $C_{2}, \ldots, C_{t}$ wins over $B$.

Prove that for any $k=3,4, \ldots, n$ there exist $k$ teams $A_{1}, A_{2}, \ldots, A_{k}$, such that $A_{1}$ wins over $A_{2}, A_{2}$ wins over $A_{3}, \ldots, A_{k-1}$ wins over $A_{k}$ and $A_{k}$ wins over $A_{1}$.

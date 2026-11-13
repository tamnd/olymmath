---
tag: ES4TMJZKQD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90777
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0000.parquet#row=219
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $A_{1} A_{2} \cdots A_{2 n}$ be a convex $2 n$-gon. Prove that there is an $i(1 \leq i \leq n)$ and a pair of parallel lines, each intersecting the $2 n$-gon only once, one at $A_{i}$ and one at $A_{n+i}$.

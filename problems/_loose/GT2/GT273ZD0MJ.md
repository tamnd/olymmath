---
tag: GT273ZD0MJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=190174
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_{0}=2023$ and $a_{n}=\frac{a_{n-1}^{2}}{a_{n-1}+1}$, for $n \in \mathbb{N}$. Prove that $a_{n} \geq 2023-n$, for every $n \in \mathbb{N}_{0}$.
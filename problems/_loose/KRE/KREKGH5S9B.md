---
tag: KREKGH5S9B
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=16952
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
An infinite sequence of positive numbers $a_{1}, a_{2}, a_{3}, \ldots$ is formed according to the rule: $a_{1}=1, a_{n+1}^{2}=a_{n}^{2}+\frac{1}{a_{n}}$ for $n=1,2,3, \ldots$ Prove that the sequence $b_{1}, b_{2}, b_{3}, \ldots$, where $b_{n}=a_{n+1}-a_{n}$, is decreasing, i.e., $b_{1}>b_{2}>b_{3}>\ldots$

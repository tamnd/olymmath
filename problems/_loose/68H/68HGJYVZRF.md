---
tag: 68HGJYVZRF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=102639
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given real numbers $a_{1}, a_{2}, \cdots, a_{n}$ satisfy
$$
a_{1}=0,\left|a_{k}\right|=\left|a_{k-1}+1\right|, k=2,3, \cdots, n \text {. }
$$

Prove: $\frac{1}{n}\left(a_{1}+a_{2}+\cdots+a_{n}\right) \geqslant-\frac{1}{2}$.

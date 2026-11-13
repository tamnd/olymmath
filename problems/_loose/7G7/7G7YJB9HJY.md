---
tag: 7G7YJB9HJY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=177697
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Bulgaria/train/0000.parquet#row=223
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a positive integer. Find the number of all finite strictly increasing sequences $a_{0}=1, a_{1}, \ldots, a_{k}=2.3^{n}$ of positive integers with the following property: $\prod_{i=1}^{k}\left[\frac{a_{i}+a_{i-1}-1}{a_{i-1}}\right]=2.3^{n}$, where $[x]$ is the integral part of $x$.

Aleksandar Ivanov

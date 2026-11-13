---
tag: AAEK68C8W6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=112626
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the sequence $\left\{a_{n}\right\}$ satisfies: $a_{0}=0, a_{n+1}=2 k a_{n}+\sqrt{\left(4 k^{2}-1\right) a_{n}^{2}+1}, n \in \mathbf{N}$, where $k$ is a given positive integer. Prove: Every term of the sequence $\left\{a_{n}\right\}$ is an integer, and $4 k \mid\left(a_{4 n+1}-1\right), n \in \mathbf{N}$.

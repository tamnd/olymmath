---
tag: 3DG3VXYQMR
kind: problem
type: answer
answer: a_{1}=\frac{2}{5}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=125698
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the sequence $\left\{a_{n}\right\}$ satisfies
$$
a_{n+1}=-\frac{1}{2} a_{n}+\frac{1}{3^{n}}\left(n \in \mathbf{Z}_{+}\right) \text {. }
$$

Find all values of $a_{1}$ such that $\left\{a_{n}\right\}$ is a monotonic sequence, i.e., $\left\{a_{n}\right\}$ is either an increasing sequence or a decreasing sequence.

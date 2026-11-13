---
tag: YZ6ZQE6D03
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=127861
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a positive sequence $\left\{a_{n}\right\}$, and $k$ is a positive integer, satisfying $a_{n+1} \leqslant a_{n}^{k}\left(1-a_{n}\right)$. Prove: For all natural numbers $n$ not less than 2, we have
$$
\frac{1}{a_{n}} \geqslant \frac{(k+1)^{k+1}}{k^{k}}+(n-2) \text {. }
$$

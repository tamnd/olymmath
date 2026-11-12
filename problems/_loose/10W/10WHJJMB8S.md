---
tag: 10WHJJMB8S
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=53430
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given two sets of numbers: $a_{1}, \ldots, a_{n}$ and $b_{1}, \ldots, b_{n}$. Arrange the numbers $a_{k}$ in ascending order, and the numbers $b_{k}$ in descending order. The resulting sets will be

$A_{1} \leq \ldots \leq A_{n}, B_{1} \geq \ldots \geq B_{n}$. Prove that $\max \left\{a_{1}+b_{1}, \ldots, a_{n}+b_{n}\right\} \geq \max \left\{A_{1}+B_{1}, \ldots, A_{n}+B_{n}\right\}$.

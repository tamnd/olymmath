---
tag: A0NHQMEJC7
kind: problem
type: answer
answer: m_{1}m_{2}\cdotsm_{n}\geqslant(n-1)^{\frac{n}{p}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=126309
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given positive numbers $m_{i} \in \mathbf{R}^{+}(i=1,2, \cdots, n), p \geqslant 2$ and $p \in \mathbf{N}$, and satisfying $\frac{1}{1+m_{1}^{\rho}}+\frac{1}{1+m_{2}^{\rho}}+\cdots$ $+\frac{1}{1+m_{n}^{p}}=1$. Prove: $m_{1} m_{2} \cdots m_{n} \geqslant(n-1)^{\frac{n}{p}}$.

---
tag: J1VXRBDJNK
kind: problem
type: answer
answer: x_{1}+x_{2}+\cdots+x_{n}\geqslant\frac{n}{n-1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=122523
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given $x_{1}, x_{2}, \cdots, x_{n} \in \mathbf{R}^{+}$, and $\frac{x_{1}}{1+x_{1}}+\frac{x_{2}}{1+x_{2}}+\cdots+\frac{x_{n}}{1+x_{n}}=1$, prove: $x_{1}+x_{2}+\cdots+x_{n} \geqslant \frac{n}{n-1}$.

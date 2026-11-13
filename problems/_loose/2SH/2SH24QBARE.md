---
tag: 2SH24QBARE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=243192
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $x_0 = 1$ and $x_1 = 2003$ and define the sequence $(x_n)_{n \ge 0}$ by: $x_{n+1} =\frac{x^2_n + 1}{x_{n-1}}$ , $\forall n \ge 1$
Prove that for every $n \ge 2$ the denominator of the fraction $x_n$, when $x_n$ is expressed in lowest terms is a power of $2003$.

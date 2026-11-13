---
tag: ACDWD29GRV
kind: problem
type: answer
answer: p+xyz=0
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=154969
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Real numbers $p, q, r, x, y, z$ satisfy the equations
$$
\begin{array}{l}
\frac{x}{p}+\frac{q}{y}=1, \\
\frac{y}{q}+\frac{r}{z}=1 .
\end{array}
$$

Prove that $p q r+x y z=0$.

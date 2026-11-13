---
tag: JBCXAJ3S4E
kind: problem
type: answer
answer: p \in \{2, 3, 5, 181\}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=218731
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all prime numbers $p$ such that $p^3$ divides the determinant
$$\begin{vmatrix} 2^2 & 1 & 1 & \dots & 1\\1 & 3^2 & 1 & \dots & 1\\ 1 & 1 & 4^2 & & 1\\ \vdots & \vdots & & \ddots & \\1 & 1 & 1 & & (p+7)^2 \end{vmatrix}.$$

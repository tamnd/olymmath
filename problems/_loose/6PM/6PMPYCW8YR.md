---
tag: 6PMPYCW8YR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=244075
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $1=d_1<d_2<\ldots<d_{2m}=n$ be the divisors of a positive integer $n$, where $n$ is not a perfect square. Consider the determinant
$$D=\begin{vmatrix}n+d_1&n&\ldots&n\\n&n+d_2&\ldots&n\\\ldots&\ldots&&\ldots\\n&n&\ldots&n+d_{2m}\end{vmatrix}.$$
(a) Prove that $n^m$ divides $D$.
(b) Prove that $1+d_1+d_2+\ldots+d_{2m}$ divides $D$.

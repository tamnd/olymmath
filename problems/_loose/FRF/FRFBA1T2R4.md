---
tag: FRFBA1T2R4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=114001
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the sequence $\left\{a_{n}\right\}$ satisfies
$$
\begin{array}{l}
a_{0}=1, a_{1}=5, \\
a_{n}=\frac{2 a_{n-1}^{2}-3 a_{n-1}-9}{2 a_{n-2}}(n \geqslant 2) .
\end{array}
$$

Prove by mathematical induction: $a_{n}=2^{n+2}-3$.

Use mathematical induction to prove: $a_{n}=2^{n+2}-3$.

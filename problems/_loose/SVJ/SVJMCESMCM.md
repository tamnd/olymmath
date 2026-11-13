---
tag: SVJMCESMCM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00002-of-00003.parquet#row=144853
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the number of pairs of integers $(x, y)$ that satisfy the system of inequalities

$$
\left\{\begin{array}{l}
y>2^{x}+3 \cdot 2^{65} \\
y \leqslant 70+\left(2^{64}-1\right) x
\end{array}\right.
$$

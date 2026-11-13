---
tag: 9VZEERYBEE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=133654
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given 100 positive numbers $x_{1}, x_{2}, \cdots, x_{100}$ satisfy
$$
\left\{\begin{array}{l}
x_{1}^{2}+x_{2}^{2}+\cdots+x_{100}^{2}>10000, \\
x_{1}+x_{2}+\cdots+x_{100}<300 .
\end{array}\right.
$$

Prove: Among them, 3 numbers can be found such that the sum of these 3 numbers is greater than 100.

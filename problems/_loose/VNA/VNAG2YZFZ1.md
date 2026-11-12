---
tag: VNAG2YZFZ1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=29113
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(PDR, 78). For a given number $a_{i} \in \mathbf{R}$, define the sequence $a_{i}, a_{2}, \ldots$ as follows:

$$
a_{n+\hat{1}}=\left\{\begin{array}{cc}
(1 / 2)\left(a_{n}-1 / a_{n}\right), & \text { if } a_{n} \neq 0 \\
0 & , \text { if } a_{n}=0
\end{array}\right.
$$

for $n \in \mathbf{N}$. Prove that this sequence contains infinitely many non-positive terms.

---
tag: FXP2XVP6QY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=175483
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let's prove that:

$$
\begin{gathered}
1 \cdot (a-1) + 2 \cdot (a-2) + 3 \cdot (a-3) + \ldots + n \cdot (a-n) = \\
= \frac{n \cdot (n+1)(3a - 2n - 1)}{6}.
\end{gathered}
$$

Specifically, for $ a = n + 1 $,

$$
1 \cdot n + 2 \cdot (n-1) + 3 \cdot (n-2) + \ldots + n \cdot 1 = \frac{n \cdot (n+1) \cdot (n+2)}{6}
$$

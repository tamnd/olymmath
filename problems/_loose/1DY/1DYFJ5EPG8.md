---
tag: 1DYFJ5EPG8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=32373
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the distribution function of a continuous random variable $X$

$$
F(x)=\left\{\begin{array}{lll}
0 & \text { for } & x \leqslant 0 \\
\sin x & \text { for } & 0 < x \leqslant \pi / 2 \\
1 & \text { for } & x > \pi / 2
\end{array}\right.
$$

Find the probability density function $f(x)$.

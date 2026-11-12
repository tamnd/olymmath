---
tag: MBXGX86P9A
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=31429
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The random variable $X$ is given by the cumulative distribution function

$$
F(x)=\left[\begin{array}{ll}
0 & \text { for } x \leqslant 1 \\
a \ln x & \text { for } 1 < x \leqslant e \\
1 & \text { for } x > e
\end{array}\right.
$$

It is required: a) find the value of the parameter $a$; b) find the probability density function $f(x)$; c) plot the graphs of the functions $y=F(x)$ and $y=f(x)$; d) find the probability that $X$ belongs to the interval $\left(\frac{1}{\sqrt[3]{e}}, \sqrt{e}\right)$.

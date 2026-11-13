---
tag: 8J1QNNYQZJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=83242
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $x_{1}, \ldots x_{n}$ be a family of strictly positive real numbers, show that

$$
\frac{x_{1}}{x_{2}}+\frac{x_{2}}{x_{3}}+\cdots+\frac{x_{n}}{x_{1}} \geq n
$$

Theorem 1.72. Generalization Let $a_{1}, \ldots a_{n}$ be a family of positive real numbers, we define the mean of order $p$:

$$
\begin{aligned}
& M(p)=\left(\frac{a_{1}^{p}+a_{2}^{p}+\cdots+a_{n}^{p}}{n}\right)^{1 / p} \\
& M(0)=\left(a_{1} \ldots a_{n}\right)^{1 / n}
\end{aligned}
$$

The function $M$ is increasing: if $p>q$ then $M(p)>M(q)$.

No proof for this result since it is a bit tedious. For those of you who are familiar with the logarithm function, you can express $\ln (M(p))$ and try to differentiate with respect to $p$.

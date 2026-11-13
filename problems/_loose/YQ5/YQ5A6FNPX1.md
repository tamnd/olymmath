---
tag: YQ5A6FNPX1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=78885
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(Karamata's Inequality) Let $f$ be a convex function from $\mathbb{R}$ to $\mathbb{R}$. Let $x_{1} \leqslant x_{2} \leqslant \cdots \leqslant x_{n}$ and $y_{1} \leqslant y_{2} \leqslant \cdots \leqslant y_{n}$ be such that for every integer $p$ between 1 and $n$:

$$
\begin{aligned}
x_{1}+\cdots+x_{p} & \leqslant y_{1}+\cdots+y_{p} \text { and } \\
x_{1}+\cdots+x_{n} & =y_{1}+\cdots+y_{n}
\end{aligned}
$$

Show that

$$
f\left(x_{1}\right)+\cdots+f\left(x_{n}\right) \geqslant f\left(y_{1}\right)+\cdots+f\left(y_{n}\right)
$$

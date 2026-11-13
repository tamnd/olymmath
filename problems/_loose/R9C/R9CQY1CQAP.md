---
tag: R9CQY1CQAP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=265298
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
An ant starts at the point $(0,0)$ in the coordinate plane. It can make moves from lattice point $(x_1,y_1)$ to lattice point $(x_2,y_2)$ whenever $x_2\geq x_1$, $y_2\geq y_1$, and $(x_1,y_1)\neq(x_2,y_2)$. For all nonnegative integers $m,n$, define $a_{m,n}$ to be the number of possible sequences of moves from $(0,0)$ to $(m,n)$ (e.g. $a_{0,0}=1$ and $a_{1,1}=3$). Compute
$$
\sum_{m=0}^{\infty}\sum_{n=0}^{\infty} \frac{a_{m,n}}{10^{m+n}}.
$$

*2020 CCA Math Bonanza Individual Round #14*

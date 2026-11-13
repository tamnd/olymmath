---
tag: QNS695TARW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=93252
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
14-52 Let $s, t$ be non-negative integers, satisfying $s+t=n, p$ be a prime number, write $n$ in the following expression
$$
n=n_{k} p^{k}+n_{k-1} p^{k-1}+\cdots+n_{1} p+n_{0},
$$

where $0 \leqslant n_{i}<p, 0 \leqslant i \leqslant k$.
There are similar expressions for $s, t$.
(1) Prove that $\frac{\left(s_{0}+t_{0}-n_{0}\right)+\left(s_{1}+t_{1}-n_{1}\right)+\cdots+\left(s_{k}+t_{k}-n_{k}\right)}{p-1}$

is the highest power of $p$ that divides the binomial coefficient $C_{n}^{s}$.
(2) Prove that there are exactly $\left(n_{0}+1\right)\left(n_{1}+1\right) \cdots\left(n_{k}+1\right)$ binomial coefficients $C_{n}^{s}, 0 \leqslant s \leqslant n$, that are not divisible by $p$.
(Canadian Mathematical Olympiad Training Problem, 1988)

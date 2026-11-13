---
tag: 6YA163DRRF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=81192
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider a function $f$ from $\mathbb{Z}$ to $\mathbb{R}$ satisfying, for all integers $n$,

$$
\mathrm{f}(\mathrm{n}+1)=|\mathrm{f}(\mathrm{n})|-\mathrm{f}(\mathrm{n}-1)
$$

a) Suppose $f(1)=3$ and $f(2)=2$. Calculate $f(12)$ and $f(0)$.

b) Show that for all integers $n$, at least one of the three values $f(n), f(n+1), f(n+2)$ is non-negative.

c) Show that for all integers $n$, at least one of the four values $f(n), f(n+1), f(n+2), \mathrm{f}(\mathrm{n}+3)$ is non-positive.

d) Show that there exists an integer $k$ such that: $0 \leqslant k \leqslant 4, f(k) \leqslant 0$ and $f(k+1) \geqslant 0$.

e) Suppose that $f(0)=-a \leqslant 0$ and $f(1)=b \geqslant 0$. Calculate $f(9)$ and $f(10)$.

f) Show that for all integers $n, f(n+9)=f(n)$

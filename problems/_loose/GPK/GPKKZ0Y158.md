---
tag: GPKKZ0Y158
kind: problem
type: answer
answer: (y)=\int_{0}^{y}F^{-1}(z)=F^{-1}(y)y-\mathrm{E}(F^{-1}(y)-X)^{+}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33813
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f=f(x)$ be a convex function defined on $\mathbb{R}$.

(a) The Legendre transformation of the function $f$ is defined as

$$
g(y)=\sup _{x}[x y-f(x)]
$$

Establish that $g=g(y)$ is a convex function on $\mathbb{R}$, and the Legendre transformation $\sup _{y}[x y-g(y)]$ of $g$ is nothing but $f=f(x)$.

Remark. By the definition of the function $g=g(y)$, the Young's inequality holds:

$$
x y \leqslant f(x)+g(y), x, y \in \mathbb{R}
$$

(b) Prove that any such convex function $f$, such that $f(-\infty)=0$, can be represented as

$$
f(x)=\int_{-\infty}^{x} h(u) d u, x \in \mathbb{R}
$$

for some non-decreasing non-negative function $h=h(u)$. Using this fact, find an explicit expression for $g(y)=\sup _{x}[x y-f(x)]$. In particular, establish that if $f(x)=\left(x^{+}\right)^{p} / p, x \in \mathbb{R}$, for some $p \geqslant 1$, then $g(y)=y^{q} / q, y \geqslant 0$, with $q=p /(p-1)$.

(c) Let $X$ be a random variable, $\mathrm{E} X^{-}<\infty$ and $f(x)=\mathrm{E}(x-X)^{+}$. Find $g(y)$.

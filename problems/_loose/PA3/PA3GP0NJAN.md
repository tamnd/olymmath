---
tag: PA3GP0NJAN
kind: problem
type: answer
answer: "0"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=82884
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all values of the parameter $a$ such that the equation

$$
a x^{2}-(a+3) x+2=0
$$

admits two real roots of opposite signs.

Definition. Let $n \geq 1$ be an integer. Let $z_{1}, \ldots, z_{n} \in \mathbb{K}$. For $1 \leq k \leq n$, the $k$-th elementary symmetric function is defined as

$$
\sigma_{k}\left(z_{1}, \ldots, z_{n}\right)=\sum_{1 \leq i_{1}<\cdots<i_{k} \leq n} z_{i_{1}} \cdots z_{i_{k}}
$$

When the elements $z_{1}, \ldots, z_{n}$ are understood, for simplicity, we sometimes write $\sigma_{k}$ instead of $\sigma_{k}\left(z_{1}, \ldots, z_{n}\right)$.

Thus, for example, for $n=3$, we have $\sigma_{1}=z_{1}+z_{2}+z_{3}, \sigma_{2}=z_{1} z_{2}+z_{1} z_{3}+z_{2} z_{3}$ and $\sigma_{3}=z_{1} z_{2} z_{3}$.

Proposition (Vieta's formulas in the general case). Let $P(x)=a_{n} x^{n}+a_{n-1} x^{n-1}+$ $\cdots+a_{1} x+a_{0} \in \mathbb{K}[X]$ with $a_{n} \neq 0$. Suppose that $P$ has $n$ roots $z_{1}, \ldots, z_{n} \in \mathbb{K}$ counted with multiplicity (i.e., if $z$ is a root of order $k, z$ appears $k$ times in the list $z_{1}, \ldots, z_{n}$). Then, for any integer $1 \leq k \leq n$,

$$
\sigma_{k}\left(z_{1}, \ldots, z_{k}\right)=(-1)^{k} \frac{a_{n-k}}{a_{n}}
$$

In other words,

$$
\sum_{i=1}^{n} z_{i}=-\frac{a_{n-1}}{a_{n}}, \sum_{1 \leq i<j \leq n} z_{i} z_{j}=-\frac{a_{n-2}}{a_{n}}, \ldots, \prod_{i=1}^{n} z_{i}=(-1)^{n} \frac{a_{0}}{a_{n}}
$$

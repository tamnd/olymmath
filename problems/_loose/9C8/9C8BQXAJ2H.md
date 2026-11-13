---
tag: 9C8BQXAJ2H
kind: problem
type: answer
answer: "142"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=120301
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For an integer $x \geqslant 1$, let $p(x)$ be the smallest prime that does not divide $x$, and $q(x)$ be the product of all primes less than $p(x)$. In particular, $p(1)=2$, and if there is some $x$ such that $p(x)=2$, then $q(x)=1$.
The sequence $x_{0}, x_{1}, x_{2}, \cdots$ is defined by:
$$
\begin{array}{c}
x_{0}=1, \\
x_{n+1}=\frac{x_{n} p\left(x_{n}\right)}{q\left(x_{n}\right)}
\end{array}
$$

where $n \geqslant 0$, find all integers $n$ such that $x_{n}=1995$.
(36th International Mathematical Olympiad Preliminary Question, 1995)

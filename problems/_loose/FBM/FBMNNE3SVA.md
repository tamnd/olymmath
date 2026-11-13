---
tag: FBMNNE3SVA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=161674
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\left\{a_{n}\right\}_{n \geqslant 0}$ and $\left\{b_{n}\right\}_{n \geqslant 0}$ be sequences given by $a_{0}=b_{0}=1$ and for $n \geqslant 1$

$$
\begin{aligned}
& a_{n}=9 a_{n-1}-2 b_{n-1} \\
& b_{n}=2 a_{n-1}+4 b_{n-1}
\end{aligned}
$$

Let $c_{n}=a_{n}+b_{n}$ for $n \geqslant 0$. Prove that there do not exist distinct natural numbers $k, r$ and $m$ such that $c_{r}^{2}=c_{k} \cdot c_{m}$.

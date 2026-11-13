---
tag: R30YV4ZWC0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=77384
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_{0}, a_{1}, \ldots, a_{d}$ be integers such that $\operatorname{GCD}\left(a_{0}, a_{1}\right)=1$. For all integers $n \geqslant 1$, we define

$$
u_{n}=\sum_{k=0}^{d} a_{k} \varphi(n+k)
$$

Prove that 1 is the only natural number that divides all integers $u_{n}$.

We recall that $\varphi(n+k)$ is the number of natural numbers $\ell<n+k$ such that $\operatorname{GCD}(\ell, n+k)=1$.

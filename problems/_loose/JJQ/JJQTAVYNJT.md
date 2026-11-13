---
tag: JJQTAVYNJT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=108889
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a positive integer $n$, let
$$
f(z)=\left(z-z_{1}\right)\left(z-z_{2}\right) \cdots\left(z-z_{n}\right) \text {, }
$$
where $z_{1}, z_{2}, \cdots, z_{n}$ are complex numbers, $\Omega$ is the convex hull formed by the $n$ points $z_{1}, z_{2}, \cdots, z_{n}$ in the complex plane, and $\omega$ is a zero of $f^{\prime}(z)$. Prove: $\omega \in \Omega$ (i.e., prove that there exist non-negative real numbers $\alpha_{1}$, $\alpha_{2}, \cdots, \alpha_{n}$, $\alpha_{1}+\alpha_{2}+\cdots+\alpha_{n}=1$, such that $\omega=\alpha_{1} z_{1}+$ $\left.\alpha_{2} z_{2}+\cdots+\alpha_{n} z_{n}\right)$

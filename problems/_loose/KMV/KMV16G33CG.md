---
tag: KMV16G33CG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=108082
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let the sequence $\left\{a_{n}\right\}$ satisfy
$$
\begin{aligned}
a_{1}=3, a_{2} & =7, \\
a_{n}^{2}+5 & =a_{n-1} a_{n+1}(n \geqslant 2) .
\end{aligned}
$$

Prove: if $a_{n}+(-1)^{n}$ is a prime number, then there must exist a non-negative integer $m$, such that $n=3^{m}$.

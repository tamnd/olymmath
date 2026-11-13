---
tag: J269KN4RNX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=81033
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider a sequence $\left(p_{\mathfrak{n}}\right)$ of prime numbers defined by $p_{0}, p_{1}$ and for all $\mathfrak{n} \geqslant 1$, $p_{n+1}$ is the largest prime factor of $p_{n-1}+p_{n}+100$. Show that this sequence is bounded (that is, there exists $P$ such that for all $n, p_{n} \leqslant P$).

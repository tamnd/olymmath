---
tag: P0QA33YKRG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=38764
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove that any bounded sequence $\left\{a_{n}\right\}$ contains a convergent subsequence $\left\{a_{n_{k}}\right\}$, i.e., one can choose a strictly increasing sequence of natural numbers $n_{1}, n_{2}, n_{3}, \ldots$ such that the sequence $\left\{b_{k}\right\}$, where $b_{k}=a_{n_{k}}$, converges.

A sequence $\left\{a_{n}\right\}$ is called increasing (non-decreasing) if $a_{n+1}>a_{n}\left(a_{n+1} \geqslant a_{n}\right)$ for all $n$.

A sequence $\left\{a_{n}\right\}$ is called bounded from above if one can choose a number $c$ such that $a_{n} \leqslant c$ for all $n$.

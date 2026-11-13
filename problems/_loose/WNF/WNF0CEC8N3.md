---
tag: WNF0CEC8N3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=116494
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $p$ and $q$ be two coprime positive integers, and the sequences $\left\{a_{n}\right\}$ and $\left\{b_{n}\right\}$ satisfy $a_{1}=p, b_{1}=q$. For $n \geqslant 2$, define $a_{n}$ and $b_{n}$ such that
$$
\frac{a_{n}}{b_{n}}-\frac{a_{n-1}}{b_{n-1}}=\frac{1}{b_{n} b_{n-1}},
$$

and $a_{n}>a_{n-1}$, making $a_{n}$ the smallest positive integer. Prove: $\left\{a_{n}-b_{n}\right\}$ is an arithmetic sequence.
(Zhao Yan)

---
tag: TXTZASQGAT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=120776
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $P$ be the set of all prime numbers. The set $M \subseteq P, |M| \geqslant 3$, satisfies for $k \in \mathbf{Z}_{+}$,
$$
A=\left\{p_{1}, p_{2}, \cdots, p_{k}\right\} \varsubsetneqq M,
$$

all prime factors of $p_{1} p_{2} \cdots p_{k}-1$ form a subset of $M$. Prove: $M=P$.

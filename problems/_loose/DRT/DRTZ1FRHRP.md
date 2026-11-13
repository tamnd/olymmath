---
tag: DRTZ1FRHRP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=91562
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $c_{1}, c_{2}, \cdots$ be a sequence of positive integers, and for any positive integer $m, n$ satisfying $1 \leqslant m \leqslant \sum_{i=1}^{n} c_{i}$, there exist positive integers $a_{1}, a_{2}, \cdots, a_{n}$, such that
$$
m=\sum_{i=1}^{n} \frac{c_{i}}{a_{i}} .
$$

For each fixed $i\left(i \in \mathbf{N}^{*}\right)$, find the maximum value of $c_{i}$.

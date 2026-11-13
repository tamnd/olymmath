---
tag: D6JAJ5STXZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=161562
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a sequence $0 \leqslant x_{0} \leqslant x_{1} \leqslant x_{2} \leqslant \cdots$ of integers such that for every $k \geqslant 0$ the number of terms not greater than $k$ is finite (denote this number by $y_{k}$). Prove that for all natural numbers $m, n$ the following holds:

$$
\sum_{i=0}^{n} x_{i}+\sum_{j=0}^{m} y_{j} \geqslant(n+1)(m+1)
$$

(Romania)

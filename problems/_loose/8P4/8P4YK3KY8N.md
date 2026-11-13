---
tag: 8P4YK3KY8N
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=101784
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given positive sequences $\left\{a_{n}\right\}$ and $\left\{b_{n}\right\}$ satisfy
$$
\sum_{i=1}^{n} a_{i}=\sum_{i=1}^{n} b_{i},
$$

and $a_{1} \leqslant a_{2} \leqslant \cdots \leqslant a_{n}$,
$$
a_{n} \geqslant b_{n} \geqslant b_{n-1} \geqslant \cdots \geqslant b_{1} \geqslant a_{1},
$$

for any $1 \leqslant i<j \leqslant n$, we have $a_{j}-a_{i} \geqslant b_{j}-b_{i}$.
Prove: $\prod_{i=1}^{n} a_{i} \leqslant \prod_{i=1}^{n} b_{i}$.

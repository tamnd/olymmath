---
tag: 4W87VJARDP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=242062
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n\geq 2$ be integer. On a plane there are $n+2$ points $O,\ P_{0},\ P_{1},\ \cdots P_{n}$ which satisfy the following conditions as follows.

[1] $\angle{P_{k-1}OP_{k}}=\frac{\pi}{n}\ (1\leq k\leq n),\ \angle{OP_{k-1}P_{k}}=\angle{OP_{0}P_{1}}\ (2\leq k\leq n).$
[2] $\overline{OP_{0}}=1,\ \overline{OP_{1}}=1+\frac{1}{n}.$
Find $\lim_{n\to\infty}\sum_{k=1}^{n}\overline{P_{k-1}P_{k}}.$

---
tag: 3X4Y2DWTJE
kind: problem
type: answer
answer: '|X|\geqslant\frac{nr^{2}}{r+(n-1)k}'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=79956
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $A_{1}, A_{2}, \ldots, A_{n}$ be subsets of size $r$ of a set $X$, such that $\left|A_{i} \cap A_{j}\right| \leqslant k$ for all $1 \leqslant i<j \leqslant n$. Show that:

$$
|X| \geqslant \frac{n r^{2}}{r+(n-1) k}
$$

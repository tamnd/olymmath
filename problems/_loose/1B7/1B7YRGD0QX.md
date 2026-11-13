---
tag: 1B7YRGD0QX
kind: problem
type: answer
answer: 34C_{36}^{3}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=136700
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $X=\left\{A_{1}, A_{2}, \cdots, A_{n}\right\}$ be a family of distinct three-element subsets of $I=\{1,2,3, \cdots, 36\}$, satisfying:
(1) For any $1 \leqslant i<j \leqslant n, A_{i} \cap A_{j} \neq \varnothing$,
(2) $A_{1} \cap A_{2} \cap \cdots \cap A_{n}=\varnothing$.

Find the maximum value of $n$, and how many different families $X$ are there when $n$ reaches its maximum value?

---
tag: 7XZC0YTWS8
kind: problem
type: answer
answer: N\leq\lfloor\frac{n^{2}}{4}\rfloor
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=83007
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n \geq 2$ be an integer. We call a subset $A \subseteq \{1, \ldots, n\}$ an interval if there exist $1 \leq a < b \leq n$ such that $A = \{a, a+1, \ldots, b-1, b\}$. Let $A_{1}, \ldots, A_{N}$ be subsets of $\{1, \ldots, n\}$ such that if $1 \leq i < j \leq n$ then $A_{i} \cap A_{j}$ is an interval. Show that $N \leq \left\lfloor\frac{n^{2}}{4}\right\rfloor$ and that this bound is optimal.

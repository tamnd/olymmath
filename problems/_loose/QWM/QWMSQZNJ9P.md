---
tag: QWMSQZNJ9P
kind: problem
type: answer
answer: c = n
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=246957
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\mathcal F = \{ f: [0,1] \to [0,\infty) \mid f$ continuous $\}$ and $n$ an integer, $n\geq 2$. Find the smallest real constant $c$ such that for any $f\in \mathcal F$ the following inequality takes place $$ \int^1_0 f \left( \sqrt [n] x \right) dx \leq c \int^1_0 f(x) dx. $$

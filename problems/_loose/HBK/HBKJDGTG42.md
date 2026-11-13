---
tag: HBKJDGTG42
kind: problem
type: answer
answer: 1902 \le f(23) + f(2011) \le 2034
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=209084
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f : \mathbb{N} \longrightarrow \mathbb{N}$ be a function such that $(x + y)f (x) \le x^2 + f (xy) + 110$, for all $x, y$ in $\mathbb{N}$. Determine the minimum and maximum values of $f (23) + f (2011)$.

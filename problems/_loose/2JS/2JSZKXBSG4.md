---
tag: 2JSZKXBSG4
kind: problem
type: answer
answer: "1012"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=239284
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f : \mathbb{N} \to \mathbb{N}$ be a function such that the following conditions hold:

$ \ (1) f(1) = 1.$

$ \ (2) \dfrac{(x + y)}{2} < f(x + y) \le f(x) + f(y) \forall x, y \in \mathbb{N}.$

$ \ (3) f(4n + 1) < 2f(2n + 1) \forall n \ge 0.$

$ \ (4) f(4n + 3) \le 2f(2n + 1) \forall n \ge 0.$

Find the sum of all possible values of $f(2023)$.

---
tag: 79Y9HYCRFM
kind: problem
type: answer
answer: 0, 1, 2, \ldots, n-1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=212937
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n\geq2$ be a positive integer. Determine all possible values of the sum
$$ S=\left\lfloor x_{2}-x_{1}\right\rfloor +\left\lfloor x_{3}-x_{2}\right\rfloor+...+\left\lfloor x_{n}-x_{n-1}\right\rfloor $$
where $x_i\in \mathbb{R}$ satisfying $\lfloor{x_i}\rfloor=i$ for $i=1,2,\ldots n$.

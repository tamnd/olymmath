---
tag: XG9NQ04CFD
kind: problem
type: answer
answer: a_{1}\ldotsa_{n}+1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=81474
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_{1}, \ldots, a_{n} \in \mathbb{Z}$. Construct a number $a>1$ such that for all $i \in\{1, \ldots, n\}, a_{i} \wedge a=1$.

(Note: Here, $a_{i} \wedge a$ denotes the greatest common divisor (gcd) of $a_i$ and $a$.)

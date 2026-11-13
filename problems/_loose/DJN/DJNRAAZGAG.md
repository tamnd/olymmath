---
tag: DJNRAAZGAG
kind: problem
type: answer
answer: \frac{1}{722}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=265665
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $G$ be the set of points $(x, y)$ such that $x$ and $y$ are positive integers less than or equal to 20. Say that a ray in the coordinate plane is *ocular* if it starts at $(0, 0)$ and passes through at least one point in $G$. Let $A$ be the set of angle measures of acute angles formed by two distinct ocular rays. Determine
$$
\min_{a \in A} \tan a.
$$

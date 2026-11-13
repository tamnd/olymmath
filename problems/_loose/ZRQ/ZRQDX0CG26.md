---
tag: ZRQDX0CG26
kind: problem
type: answer
answer: \sum_{k=1}^n k^3 y_k = 0
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=216702
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n\geq 4$ and $y_1,\dots, y_n$ real with
$$\sum_{k=1}^n y_k=\sum_{k=1}^n k y_k=\sum_{k=1}^n k^2y_k=0$$
and
$$y_{k+3}-3y_{k+2}+3y_{k+1}-y_k=0$$
for $1\leq k\leq n-3$. Prove that
$$\sum_{k=1}^n k^3y_k=0$$

---
tag: 9M5G4CZTJE
kind: problem
type: answer
answer: M
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=218544
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a positive integer. Suppose there are exactly $M$ squarefree integers $k$ such that $\left\lfloor\frac nk\right\rfloor$ is odd in the set $\{ 1, 2,\ldots, n\}$. Prove $M$ is odd.

An integer is *squarefree* if it is not divisible by any square other than $1$.

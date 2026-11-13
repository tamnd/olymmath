---
tag: TEQRGQZ986
kind: problem
type: answer
answer: (1, k)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=205058
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all pairs of positive integers $(n, k)$ such that all sufficiently large odd positive integers $m$ are representable as $$m=a_1^{n^2}+a_2^{(n+1)^2}+\ldots+a_k^{(n+k-1)^2}+a_{k+1}^{(n+k)^2}$$ for some non-negative integers $a_1, a_2, \ldots, a_{k+1}$.

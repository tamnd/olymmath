---
tag: 3880YNJZGB
kind: problem
type: answer
answer: n-2^{}+1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=39160
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a sequence of $n$ numbers. Prove that for its merge sort, no more than $m n-2^{m}+1$ comparisons of pairs of numbers are required, where the number $m$ is determined by the inequalities $m-1<\log _{2} n \leqslant m$.

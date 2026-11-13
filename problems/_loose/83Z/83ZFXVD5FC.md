---
tag: 83ZFXVD5FC
kind: problem
type: answer
answer: \frac{1}{n}+\frac{1}{n-1}+\frac{1}{n-2}+\cdots+\frac{1}{2}+1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=120585
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
2・66 Let $\left[a_{1}, a_{2}, \cdots, a_{n}\right]$ be a permutation of $1,2, \cdots, n$. If $a_{i}>a_{j}$ for all $j>i$, then $a_{i}$ is called a "large" number in this permutation.
Try to calculate the arithmetic mean of all "large" numbers in all $n$! permutations.

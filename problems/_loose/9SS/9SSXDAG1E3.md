---
tag: 9SSXDAG1E3
kind: problem
type: answer
answer: 2^{n+1}-2n-2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=145605
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let the positive integer $M$ in its $n$-ary representation have all distinct digits, and each digit, except the leftmost one, differs from some digit to its left by $\pm 1$. Find the number of all such positive integers $M$. (The answer should be given as an explicit function of $n$ in its simplest form)

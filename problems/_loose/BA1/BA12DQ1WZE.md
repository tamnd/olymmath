---
tag: BA12DQ1WZE
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
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=120929
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Try to find the number of all such positive integers: their representation in base $n$ has distinct digits, and each digit, except the leftmost one, differs by $\pm 1$ from some digit to its left (express the answer as a simple explicit function of $n$), and prove your conclusion.

 in base $n$ such that:
1. All digits are distinct.
2. Each digit, except the leftmost one, differs by $\pm 1$ from some digit to its left.

Let's denote the number of such integers by $f(n)$.

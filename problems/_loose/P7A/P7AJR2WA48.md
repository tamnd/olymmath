---
tag: P7AJR2WA48
kind: problem
type: answer
answer: (\sqrt{2}+1)(\sqrt{2^{n}}-1)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=128236
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a set $A=\left\{a_{1}, a_{2}, \cdots, a_{n}\right\}$ consisting of $n$ positive integers that satisfies: for any two different subsets of set $A$, the sums of their respective elements are not equal. Find the minimum value of $\sum_{i=1}^{n} \sqrt{a_{i}}$.

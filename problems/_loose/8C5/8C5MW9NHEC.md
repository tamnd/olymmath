---
tag: 8C5MW9NHEC
kind: problem
type: answer
answer: n = 2k
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=242730
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a finite set $A$ of positive integers and its subset $B$, call $B$ a *half subset* of $A$ when it satisfies the equation $\sum_{a\in A}a=2\sum_{b\in B}b$. For example, if $A=\{1,2,3\}$, then $\{1,2\}$ and $\{3\}$ are half subset of $A$. Determine all positive integers $n$ such that there exists a finite set $A$ which has exactly $n$ half subsets.

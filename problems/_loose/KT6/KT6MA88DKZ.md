---
tag: KT6MA88DKZ
kind: problem
type: answer
answer: k(n) = n + 1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=245967
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $S_{n}=\{1,n,n^{2},n^{3}, \cdots \}$, where $n$ is an integer greater than $1$. Find the smallest number $k=k(n)$ such that there is a number which may be expressed as a sum of $k$ (possibly repeated) elements in $S_{n}$ in more than one way. (Rearrangements are considered the same.)

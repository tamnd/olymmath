---
tag: 1TT4R05JKQ
kind: problem
type: answer
answer: "27"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=178228
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a non-zero natural number. We will say that a set $A$ of natural numbers is complete of size $n$ if its elements are non-zero, and the set of all remainders obtained by dividing an element of $A$ by an element of $A$ is $\{0,1,2, \ldots, n\}$. For example, the set $\{3,4,5\}$ is a complete set of size 4.

Determine the minimum number of elements of a complete set of size 100.

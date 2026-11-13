---
tag: MBH4PZRKBZ
kind: problem
type: answer
answer: n! \cdot F_{n+1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=232553
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $M=\{1,2,...,n\}$. Prove that the number of pairs $(A,a)$, where $A\subset M$ and $a$ is a permutation of $M$, for which $a(A)\cap A=\emptyset $, is equal to $n!.F_{n+1}$, where $F_{n+1}$ is the $n+1$ member of the Fibonacci sequence.

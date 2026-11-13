---
tag: VWV9X3GWTX
kind: problem
type: answer
answer: n + 1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231675
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A set $S$ consists of $k$ sequences of $0,1,2$ of length $n$. For any two sequences $(a_i),(b_i)\in S$ we can construct a new sequence $(c_i)$ such that $c_i=\left\lfloor\frac{a_i+b_i+1}2\right\rfloor$ and include it in $S$. Assume that after performing finitely many such operations we obtain all the $3n$ sequences of $0,1,2$ of length $n$. Find the least possible value of $k$.

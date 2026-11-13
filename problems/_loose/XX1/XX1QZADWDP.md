---
tag: XX1QZADWDP
kind: problem
type: answer
answer: f(x_{1},x_{2},\cdots,x_{n},\cdots)=\sum_{i=1}^{n}a_{i}x_{i}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=121656
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $A$ be the set of all integer sequences. Find all $f: A \rightarrow \mathbf{Z}$ such that for any $x, y \in A$, we have $f(x+y)=f(x)+f(y)$.
(Zheng Jiu)

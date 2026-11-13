---
tag: QCPMPAP6QB
kind: problem
type: answer
answer: F(n)=C_{2n}^{n}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=114134
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $M$ be the set of all integer points on the plane, and a set of points $\left\{p_{0}, p_{1}, \cdots, p_{n}\right\}$ in $M$ form a broken line satisfying $p_{i-1} p_{i}=1, i=1,2, \cdots, n$, then the length of the broken line is said to be $n . F(n)$ represents the number of different broken lines of length $n$ starting from the origin $p_{0}$ and ending at a point $p_{n}$ on the $x$-axis. Prove that $F(n)=C_{2 n}^{n}$.
(1991 Polish Olympiad Problem)

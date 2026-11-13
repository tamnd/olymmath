---
tag: 7ABQJV2HH3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=221730
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For all integers $x,y$, a non-negative integer $f(x,y)$ is written on the point $(x,y)$ on the coordinate plane. Initially, $f(0,0) = 4$ and the value written on all remaining points is $0$.
For integers $n, m$ that satisfies $f(n,m) \ge 2$, define 'Seehang' as the act of reducing $f(n,m)$ by $1$, selecting 3 of $f(n,m+1), f(n,m-1), f(n+1,m), f(n-1,m)$ and increasing them by 1.
Prove that after a finite number of 'Seehang's, it cannot be $f(n,m)\le 1$ for all integers $n,m$.

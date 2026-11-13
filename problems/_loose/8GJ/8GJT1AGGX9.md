---
tag: 8GJT1AGGX9
kind: problem
type: answer
answer: "128"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=96349
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $N_{0}$ be the set of non-negative integers, and $f: N_{0} \rightarrow N_{0}$ be a function such that $f(0)=0$, and for any $n \in N_{0}$, we have $[f(2 n+1)]^{2}-[f(2 n)]^{2}=6 f(n)+1, f(2 n)>f(n)$. How many elements in $f\left(N_{0}\right)$ are less than $2004 ?$

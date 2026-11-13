---
tag: P1PKVTKHH6
kind: problem
type: answer
answer: "653210"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=182700
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n=\sum_{i=0}^{5} a_{i} \cdot 10^{i}$ be a 6-digit natural number, where $0 \leq a_{i} \leq 9, a_{i} \in N$, and $Q(n)=\sum_{i=0}^{5} a_{i}$ be its digit sum, and it holds that: $1. a_{i}>a_{k}$ for $i>k ; 2.10^{98}<n^{Q(n)}<10^{99}$.

Which numbers $n$ satisfy these conditions?

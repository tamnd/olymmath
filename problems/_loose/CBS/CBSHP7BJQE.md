---
tag: CBSHP7BJQE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=123387
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A communication network composed of some terminals is called "triconnected" if among any three terminals, at least two are directly connected. We also refer to a communication network that satisfies the following conditions as a "windmill" with $n$ "blades": $n$ pairs of terminals $\left\{A_{i}, B_{i}\right\}$ where $A_{i}$ and $B_{i}$ are directly connected, and there exists a terminal $O$ that is connected to both $A_{i}$ and $B_{i}$ $(i=1,2, \cdots, n)$. If any "triconnected" communication network contains a "windmill" with $n$ "blades" and has the minimum number of terminals denoted as $f(n)$, find the value of $f(n)$.

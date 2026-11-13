---
tag: 9N7K8QWFWG
kind: problem
type: answer
answer: n + 2n^{\frac{2}{3}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=242717
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a country there are infinitely many towns and for every pair of towns there is one road connecting them. Initially there are $n$ coin in each city. Every day traveller Hong starts from one town and moves on to another, but if Hong goes from town $A$ to $B$ on the $k$-th day, he has to send $k$ coins from $B$ to $A$, and he can no longer use the road connecting $A$ and $B$. Prove that Hong can't travel for more than $n+2n^\frac{2}{3}$ days.

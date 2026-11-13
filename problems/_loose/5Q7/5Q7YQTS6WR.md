---
tag: 5Q7YQTS6WR
kind: problem
type: answer
answer: D_{n}=n!\sum_{k=0}^{n}(-1)^{k}/k!
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=121654
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\pi=a_{1} a_{2} \cdots a_{n}$ be any permutation of $1,2, \cdots, n$. If $a_{i}=$ $i(1 \leqslant i \leqslant n)$, then $i$ is said to be in its position in the permutation $\pi$. Let $D_{n}$ denote the number of permutations of $1,2, \cdots, n$ in which no number is in its position. Find the counting formula for $D_{n}$.

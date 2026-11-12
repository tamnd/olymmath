---
tag: YXQR17GN6M
kind: problem
type: answer
answer: \frac{n(n-1)(n-2)}{N(N-1)(N-2)}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33479
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
From an urn containing $N$ balls, of which $n$ are white and $N-n$ are black, a selection without replacement is made ( $n \geqslant 2$ ). Consider ordered samples of size $M$. What is the probability of events $A_{i, j}$ and $A_{i, j, k}$, where $A_{i, j}$ is the event that white balls are in the $i$-th and $j$-th positions ( $i<j \leqslant M$ ) and $A_{i, j, k}$ is the event that white balls are in the positions with numbers $i, j, k(i<j<k \leqslant M)$?

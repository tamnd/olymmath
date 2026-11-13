---
tag: WXPSQ9FC3W
kind: problem
type: answer
answer: "6"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=194154
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For each positive integer $n$, define the point $P_{n}$ to have coordinates $\left((n-1)^{2}, n(n-1)\right)$ and the point $Q_{n}$ to have coordinates $\left((n-1)^{2}, 0\right)$. For how many integers $n$ with $2 \leq n \leq 99$ is the area of trapezoid $Q_{n} P_{n} P_{n+1} Q_{n+1}$ a perfect square?

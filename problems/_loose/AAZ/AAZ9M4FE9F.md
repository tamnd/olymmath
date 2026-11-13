---
tag: AAZ9M4FE9F
kind: problem
type: answer
answer: "25"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Belarus/train/0000.parquet#row=72
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: by-mo
    source: hf-mathnet
    label: Belarus Belarusian Mathematical Olympiad
---
Let $S(n)$ be the sum of all digits in the decimal representation of $n \in \mathbb{N}$. How many numbers $n$, $1 \le n \le 999$, satisfy the following condition $S(n) = \text{GCD}(n, n+6)$?

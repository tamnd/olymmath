---
tag: W819TASEMB
kind: problem
type: answer
answer: 'For A = 7: (n, k) = (0, 0), (2, 4), (3, 3). For A = 2012: (n, k) = (0, 0) only.'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Austria/train/0000.parquet#row=42
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: at-oemo
    source: hf-mathnet
    label: Austria Austrian Mathematical Olympiad
---
The equation $n! + A \cdot n = n^k$ has $(n, k) = (0, 0)$ as a solution for every non-negative integer $A$. Determine all non-negative integer solutions of this equation for $A = 7$ and $A = 2012$.

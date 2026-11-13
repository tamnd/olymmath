---
tag: 298N7PYKHQ
kind: problem
type: answer
answer: All n of the form 2^k - 2 for integers k >= 2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Iran/train/0000.parquet#row=21
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo
    source: hf-mathnet
    label: Iran Iranian Mathematical Olympiad
---
Find all natural numbers $n \ge 2$ such that for every pair of integers $i, j \in [0, n]$, $i + j$ and $\begin{pmatrix} n \\ i \end{pmatrix} + \begin{pmatrix} n \\ j \end{pmatrix}$ have the same parity.

---
tag: RZS3CFHD11
kind: problem
type: answer
answer: largest = 50 - 1/200, smallest = 3/196
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Belarus/train/0000.parquet#row=22
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: by-mo
    source: hf-mathnet
    label: Belarus 60th Belarusian Mathematical Olympiad
---
Basil considers all quadratic polynomials $y = ax^2 + bx + c$ with negative discriminants, where $a$, $b$, $c$ are positive integers not greater than $50$. For each polynomial Basil writes its minimal value.
Find the largest and the smallest numbers among the written numbers.

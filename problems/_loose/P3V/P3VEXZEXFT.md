---
tag: P3VEXZEXFT
kind: problem
type: answer
answer: 2025, 3025, 9801
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Singapore/train/0000.parquet#row=135
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: sg-smo
    source: hf-mathnet
    label: Singapore Singapore Mathematical Olympiad (SMO)
---
For any 4-digit positive integer $n$, define $f(n) = (a+b)^2$, where $a, b$ are the numbers formed by the first two and last two digits of $n$, respectively (leading zeroes are allowed). Find all 4-digit positive integers $n$ such that $f(n) = n$.

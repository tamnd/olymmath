---
tag: S035WTFTV0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Estonia/train/0000.parquet#row=98
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ee-mo
    source: hf-mathnet
    label: Estonia Estonian Math Competitions
---
For any positive integer $n$ let $a_n$ be the largest power of $2$ that divides $n$ (e.g. $a_{2011} = 1$, $a_{2012} = 4$). Prove that for any positive integers $i$ and $j$ with $i < j$, the sum $\frac{1}{a_i} + \frac{1}{a_{i+1}} + \dots + \frac{1}{a_j}$ is a fractional number.

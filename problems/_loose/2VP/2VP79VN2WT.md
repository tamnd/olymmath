---
tag: 2VP79VN2WT
kind: problem
type: answer
answer: 3^{m+n} * 2^{mn}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0001.parquet#row=346
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We are given an $m \times n$ grid and three colors. We wish to color each segment of the grid with one of the three colors so that each unit square has two sides of one color and two sides of a second color. How many such colorings are possible?

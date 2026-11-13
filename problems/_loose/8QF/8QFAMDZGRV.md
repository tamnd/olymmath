---
tag: 8QFAMDZGRV
kind: problem
type: answer
answer: n^3(n^6 + n^2 + 2)/4
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Vietnam/train/0000.parquet#row=77
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: vn-vmo
    source: hf-mathnet
    label: Vietnam Vietnamese Mathematical Olympiad
---
Given a positive integer $n$. Given a square table of sizes $3 \times 3$. One uses $n$ colors to paint the squares of the table in such a way, that each square is painted by one color. Two ways of painting is considered to be similar if they can be obtained from each other by rotating the table around its center. How many non-similar ways of painting are there?

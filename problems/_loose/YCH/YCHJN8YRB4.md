---
tag: YCHJN8YRB4
kind: problem
type: answer
answer: n = 2; {x1, x2} = {4, 13}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Belarus/train/0000.parquet#row=200
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
Find all integers $n$ and $x_1, \ldots, x_n$ ($1 \le x_i \le 50$) such that
$$ \sum_{i=1}^{n} x_i(100 - x_i) = 1515. $$

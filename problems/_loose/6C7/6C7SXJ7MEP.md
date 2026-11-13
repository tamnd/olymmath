---
tag: 6C7SXJ7MEP
kind: problem
type: answer
answer: n = 5, k = 3
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Belarus/train/0001.parquet#row=226
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: by-mo
    source: hf-mathnet
    label: Belarus 69th Belarusian Mathematical Olympiad
---
There are $n \ge 5$ cities in some country. Some of the cities are connected with each other by roads, and the next three conditions are satisfied:
1) there is at most one road between any two cities;
2) not all cities are connected with each other;
3) there are exactly $k \ge 1$ roads between any four cities.
Find all $n$ and $k$ at which this situation is possible.

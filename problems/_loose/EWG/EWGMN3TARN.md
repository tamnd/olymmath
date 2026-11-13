---
tag: EWGMN3TARN
kind: problem
type: answer
answer: a) n - 1; b) 2n - 3
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Bulgaria/train/0001.parquet#row=4
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the minimum possible number of the edges of a graph with $n$ vertices having the following property:

a) If we draw an arbitrary new edge then a new triangle (3-clique) appears.

b) If we draw an arbitrary new edge then a new 4-clique appears.

---
tag: RNW5B8WF4E
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Mongolia/train/0001.parquet#row=157
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: mn-mo
    source: hf-mathnet
    label: Mongolia Mongolian Mathematical Olympiad
---
For real numbers $-1 < x_1, x_2, \dots, x_n < 1$ with sum $x_1 + x_2 + \dots + x_n = 0$, prove that we have
$$
\sum_{i=1}^{n} \sum_{j=1}^{n} x_i x_j \sqrt{1 - x_i^2 x_j^2} \le 0
$$
and determine the conditions under which equality holds.

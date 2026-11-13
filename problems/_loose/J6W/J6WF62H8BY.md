---
tag: J6WF62H8BY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Mongolia/train/0000.parquet#row=241
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: mn-mo
    source: hf-mathnet
    label: Mongolia 51st Mongolian National Mathematical Olympiad
---
For a positive integer $n$, denote by $c_n$ the number of triples $(x, y, z)$ of integers such that $0 \le x \le y \le z \le x+y$ and $x+y+z=n$. Prove that, for $n \ge 2$,
$$
n \cdot c_n \le 9 \cdot (c_0 + c_1 + \dots + c_{n-2}).
$$

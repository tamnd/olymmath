---
tag: C39NYKMVYD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ireland/train/0000.parquet#row=284
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ie-irmo
    source: hf-mathnet
    label: Ireland Irish
---
A non-degenerate triangle is formed by three points that are not collinear. A triangle is called *nice* if it is non-degenerate and its vertices have integer coordinates $(x, y)$ such that $0 \le x \le 2018$ and $0 \le y \le 2018$. Let $V_n$ denote the number of nice isosceles triangles for which the coordinates of each vertex satisfy $y \le n$. Prove that
$$
V_{n+1} = 2V_n - 2V_{n-2} + V_{n-3} \text{for all } n > 2018^2.
$$

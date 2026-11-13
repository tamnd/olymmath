---
tag: GQKDSS7FK4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ireland/train/0000.parquet#row=283
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
Define a sequence $x_n : n = 1, 2, 3, \dots$ by $x_1 = 1$ and $x_n = x_{n-1} + \sqrt{n}$ for $n \ge 2$. Show that:
$$
\sum_{n=1}^{2018} \frac{1}{x_n} < 3.
$$

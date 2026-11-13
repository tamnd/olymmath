---
tag: A68FXEVG3H
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Belarus/train/0000.parquet#row=194
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: by-mo/2013
    source: hf-mathnet
    label: Belarus BelarusMO 2013_s
---
Given real positive numbers $x_1, \dots, x_n$ ($n \ge 3$) such that $x_1 \cdot \dots \cdot x_n = 1$, prove that
$$
\frac{x_1^8}{(x_1^4 + x_2^4)x_2} + \frac{x_2^8}{(x_2^4 + x_3^4)x_3} + \dots + \frac{x_n^8}{(x_n^4 + x_1^4)x_1} \ge \frac{n}{2}.
$$
(I. Voronovich)

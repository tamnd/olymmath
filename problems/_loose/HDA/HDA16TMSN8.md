---
tag: HDA16TMSN8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ukraine/train/0001.parquet#row=107
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $x_1, x_2, ..., x_{14}$ be non-negative numbers, sum of which is equal to $1$. Prove that:
$$
x_1x_2x_3x_4 + x_2x_3x_4x_5 + \dots + x_{11}x_{12}x_{13}x_{14} + x_{12}x_{13}x_{14}x_1 + x_{13}x_{14}x_1x_2 + x_{14}x_1x_2x_3 \le \frac{1}{4^4}. \text{(Serhiy Zhyliaiev)}
$$

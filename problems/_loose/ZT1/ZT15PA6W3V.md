---
tag: ZT15PA6W3V
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250770
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0000.parquet#row=173
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the maximum and the minimum values of $S = (1 - x_1)(1 -y_1) + (1 - x_2)(1 - y_2)$ for real numbers $x_1, x_2, y_1,y_2$ with $x_1^2 + x_2^2 = y_1^2 + y_2^2 = 2013$.

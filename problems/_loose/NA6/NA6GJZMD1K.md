---
tag: NA6GJZMD1K
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204898
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Turkey/train/0000.parquet#row=302
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a,b,c,d$ be positive real numbers. What is the minimum value of $$ \frac{(a^2+b^2+2c^2+3d^2)(2a^2+3b^2+6c^2+6d^2)}{(a+b)^2(c+d)^2}$$

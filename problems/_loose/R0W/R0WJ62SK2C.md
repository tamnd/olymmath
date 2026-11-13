---
tag: R0WJ62SK2C
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=217578
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Mongolia/train/0001.parquet#row=10
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: mn-mo
    source: hf-mathnet
    label: Mongolia Mongolian National Mathematical Olympiad
---
Let $x_1 \le x_2 \le \ldots \le x_{2n-1}$ be real numbers whose arithmetic mean equals $A$. Prove that
$$2\sum_{i=1}^{2n-1}\left( x_{i}-A\right)^2 \ge \sum_{i=1}^{2n-1}\left( x_{i}-x_{n}\right)^2.$$

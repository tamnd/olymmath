---
tag: ABJA1C51XY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=93369
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let the sequences of positive real numbers $\left\{a_{n}\right\},\left\{b_{n}\right\}$ satisfy: for any integer $n \geqslant 101$, we have
$$
a_{n}=\sqrt{\frac{1}{100} \sum_{j=1}^{100} b_{n-j}^{2}}, b_{n}=\sqrt{\frac{1}{100} \sum_{j=1}^{100} a_{n-j}^{2}} .
$$

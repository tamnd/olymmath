---
tag: BPSV11CXTS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=110060
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In the sequence $\left\{a_{n}\right\}$,
$$
a_{1}=2, a_{n+1}=\frac{a_{n}^{2}}{a_{n}+2} \text {. }
$$

Prove: $\sum_{k=1}^{n} \frac{2 k a_{k}}{a_{k}+2}<4$.

---
tag: JK4PXR9ZKZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90352
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0001.parquet#row=29
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine if there exist positive integers $a, b, m, n$ such that $a \neq b, m \geq 2, n \geq 2$, and

$$
\underbrace{a^{a^{\cdot \cdot a}}}_{m}=\underbrace{b^{b^{\cdot \cdot b}}}_{n} .
$$

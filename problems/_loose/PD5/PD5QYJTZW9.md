---
tag: PD5QYJTZW9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=78980
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0007.parquet#row=2
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a, b, x, y, z$ be strictly positive real numbers, show that

$$
\frac{x}{a y+b z}+\frac{y}{a z+b x}+\frac{z}{a x+b y} \geq \frac{3}{a+b}
$$

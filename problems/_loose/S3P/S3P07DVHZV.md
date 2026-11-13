---
tag: S3P07DVHZV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=219104
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Hong_Kong/train/0000.parquet#row=332
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given that $a,b$, and $c$ are positive real numbers such that $ab + bc + ca \geq 1$, prove that
$$ \frac{1}{a^2} + \frac{1}{b^2} + \frac{1}{c^2} \geq \frac{\sqrt{3}}{abc} .$$

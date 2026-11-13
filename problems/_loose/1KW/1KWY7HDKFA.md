---
tag: 1KWY7HDKFA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=77655
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Greece/train/0000.parquet#row=59
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $x, y$ be two strictly positive real numbers. Show that

$$
\left(x+\frac{2}{y}\right)\left(\frac{y}{x}+2\right) \geqslant 8
$$

When do we have equality?

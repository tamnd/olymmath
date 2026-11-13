---
tag: SSNCG6R211
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90419
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0001.parquet#row=36
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove that if positive real numbers $x, y, z$ have sum 1 , then

$$
\frac{x}{x+y z}+\frac{y}{y+z x}+\frac{z}{z+x y} \leq \frac{2}{1-3 x y z} .
$$

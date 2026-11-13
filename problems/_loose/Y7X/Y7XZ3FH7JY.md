---
tag: Y7XZ3FH7JY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90549
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0003.parquet#row=328
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
If real numbers $a, b, c, d$ satisfy

$$
\frac{a+b}{c+d}=\frac{b+c}{a+d} \neq-1,
$$

prove that $a=c$.

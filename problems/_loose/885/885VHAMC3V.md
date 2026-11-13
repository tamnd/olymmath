---
tag: 885VHAMC3V
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90611
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0000.parquet#row=427
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $S>0$. If $a, b, c, x, y, z$ are positive real numbers such that $a+x=b+y=c+z=S$, prove that

$$
a y+b z+c x<S^{2}
$$

---
tag: GP5K12NFHB
kind: problem
type: answer
answer: "9"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90603
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0000.parquet#row=131
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
If $a, b, c, d$ are positive real numbers such that $\frac{5 a+b}{5 c+d}=\frac{6 a+b}{6 c+d}$ and $\frac{7 a+b}{7 c+d}=9$, calculate $\frac{9 a+b}{9 c+d}$.

---
tag: 3Q12NKC4NT
kind: problem
type: answer
answer: CA = CB
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=205055
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Bulgaria/train/0001.parquet#row=253
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $ABC$ be an acute triangle with midpoint $M$ of $AB$. The point $D$ lies on the segment $MB$ and $I_1, I_2$ denote the incenters of $\triangle ADC$ and $\triangle BDC$. Given that $\angle I_1MI_2=90^{\circ}$, show that $CA=CB$.

---
tag: TAPNJ3HT6E
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=203671
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given an integer $n\geq2$, let $x_1<x_2<\cdots<x_n$ and $y_1<y_2<\cdots<y_n$ be positive reals. Prove that for every value $C\in (-2,2)$ (by taking $y_{n+1}=y_1$) it holds that

$\hspace{122px}\sum_{i=1}^{n}\sqrt{x_i^2+Cx_iy_i+y_i^2}<\sum_{i=1}^{n}\sqrt{x_i^2+Cx_iy_{i+1}+y_{i+1}^2}$.

*Proposed by Mirko Petrusevski*

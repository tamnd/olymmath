---
tag: KN9C1RKPCQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=238746
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/India/train/0000.parquet#row=255
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given that $a_1, a_2, \dots, a_{10}$ are positive real numbers, determine the smallest possible value of $$\sum \limits_{i = 1}^{10} \left\lfloor \frac{7a_i}{a_i+a_{i+1}}\right\rfloor$$ where we define $a_{11} = a_1$.

*Proposed by Sutanay Bhattacharya*

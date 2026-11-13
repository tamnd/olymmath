---
tag: S72G68FXNR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=264430
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Two sequences of nonzero reals $a_1, a_2, a_3, \dots$ and $b_2, b_3, \dots$ are such that $b_n=\prod_{i=1}^{n} a_i$ and $a_n=\frac{b_n^2}{3b_n-3}$ for all integers $n > 1$. Given that $a_1=\frac{1}{2}$, find $\lvert b_{60}\rvert$.

*Proposed by Andrew Zhao*

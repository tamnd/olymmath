---
tag: 2FFT2Z1TT1
kind: problem
type: answer
answer: \frac{\sin\frac{A+B}{2}\sin\frac{A-B}{2}}{2^{n}\sin\frac{A+B}{2^{n+1}}\sin\frac{A-B}{2^{n+1}}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=132221
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the product $T_{n}=\left(\cos \frac{A}{2}+\cos \frac{B}{2}\right) \cdot\left(\cos \frac{A}{2^{2}}+\cos \frac{B}{2^{2}}\right) \cdots \cdots\left(\cos \frac{A}{2^{n}}+\cos \frac{B}{2^{n}}\right)$.

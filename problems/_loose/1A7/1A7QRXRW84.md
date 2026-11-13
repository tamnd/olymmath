---
tag: 1A7QRXRW84
kind: problem
type: answer
answer: P(x)=x^{2}+12x-11
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=75627
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all polynomials $P(x)=a x^{2}+b x+c$ with integer coefficients satisfying

$$
1<P(1)<P(2)<P(3) \text { and at the same time } \frac{P(1) \cdot P(2) \cdot P(3)}{4}=17^{2} \text {. }
$$

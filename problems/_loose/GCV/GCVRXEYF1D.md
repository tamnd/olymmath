---
tag: GCVRXEYF1D
kind: problem
type: answer
answer: -\frac{1}{3}+\frac{2}{3^{2}}(z-3)-\frac{2^{2}}{3^{3}}(z-3)^{2}+\frac{2^{3}}{3^{4}}(z-3)^{3}-\cdots
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=31049
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Expand the function in powers of the difference $z-3$

$$
f(z)=\frac{1}{3-2 z}
$$

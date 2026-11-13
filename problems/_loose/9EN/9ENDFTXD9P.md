---
tag: 9ENDFTXD9P
kind: problem
type: answer
answer: (1+\sqrt{1+x^{2}})\ln(1+\sqrt{1+x^{2}})-\sqrt{1+x^{2}}+\mathcal{C}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=177904
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine the family of primitives

$$
I=\int \frac{x \ln \left(1+\sqrt{1+x^{2}}\right)}{\sqrt{1+x^{2}}} d x
$$

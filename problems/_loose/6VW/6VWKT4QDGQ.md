---
tag: 6VWKT4QDGQ
kind: problem
type: answer
answer: \frac{e-1}{5}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=45987
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Calculate the definite integral:

$$
\int_{0}^{5} e^{\sqrt{(5-x) /(5+x)}} \cdot \frac{d x}{(5+x) \sqrt{25-x^{2}}}
$$

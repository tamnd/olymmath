---
tag: BRM95ZBA79
kind: problem
type: answer
answer: n\cdot2^{n}-2^{n+1}+2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=178805
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Calculate: $\left[\frac{1^{2}}{2}\right]+2^{1} \cdot\left[\frac{2^{2}}{3}\right]+2^{2} \cdot\left[\frac{3^{2}}{4}\right]+\ldots+2^{n-1} \cdot\left[\frac{n^{2}}{n+1}\right]$.

---
tag: A4R2H0VWJT
kind: problem
type: answer
answer: -\frac{1}{x}\cdot\cos[\ln(x+1)]-\cos[\ln(x+1)]-\lnx\cdot\sin[\ln(x+1)]+C
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=178577
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Calculate: $\int \frac{x+1-x^{2} \cdot \ln x}{x^{3}+x^{2}} \cdot \cos [\ln (x+1)] d x, x>0$.

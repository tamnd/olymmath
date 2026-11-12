---
tag: J975N1CNEA
kind: problem
type: answer
answer: \frac{y^{2}-x^{2}}{2}+e^{y}-\ln\frac{x+\sqrt{1+x^{2}}}{2+\sqrt{5}}=e-\frac{3}{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=31315
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Integrate the differential equation $y^{\prime}=\frac{x \sqrt{1+x^{2}}+1}{\sqrt{1+x^{2}}\left(y+e^{y}\right)}$ and also find the particular solution that satisfies the Cauchy condition: $x_{0}=2, y_{0}=1$.

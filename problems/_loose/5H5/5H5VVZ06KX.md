---
tag: 5H5VVZ06KX
kind: problem
type: answer
answer: \ln(1+\sqrt{2})+\frac{\sqrt{2}}{2}-1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=179414
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider the function $f:(-1, \infty) \rightarrow \mathbb{R}, f(x)=\frac{\sqrt{x^{2}+1}}{x+1}$.

a) Calculate $f^{\prime}(x), x>-1$.

b) Calculate $\int_{0}^{1} \frac{x^{2}+3 x}{(x+1)^{2} \sqrt{x^{2}+1}} d x$.

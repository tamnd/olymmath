---
tag: DF7VKD1JRN
kind: problem
type: answer
answer: P(x)=(x^{2}-5)Q((x^{2}-5)^{2})+\frac{C}{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=89833
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine all polynomials $P$ with real coefficients such that the expression

$$
P(x+3 y)+P(3 x-y)
$$

has the same value for all real numbers $x, y$ for which $x^{2}+y^{2}=1$.

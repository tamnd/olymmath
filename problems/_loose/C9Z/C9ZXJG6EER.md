---
tag: C9ZXJG6EER
kind: problem
type: answer
answer: \frac{(x^{\frac{n-q}{2}+2}-1)(x^{\frac{n+q}{2}+1}-1)}{(x-1)(x^{2}-1)}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=168093
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Simplify the expression

$$
K=x^{n}+x^{n-1}+2 x^{n-2}+2 x^{n-3}+3 x^{n-4}+\ldots+3 x^{4}+2 x^{3}+2 x^{2}+x+1
$$

where, moving from both left and right towards the center, after two equal coefficients, a coefficient that is 1 greater follows.

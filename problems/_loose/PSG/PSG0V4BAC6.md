---
tag: PSG0V4BAC6
kind: problem
type: answer
answer: "1990"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=189885
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $x_{0}=1990$ and $x_{n}=-\frac{1990}{n}\left(x_{0}+x_{1}+\ldots+x_{n-1}\right)$, for $n \geq 1$. Calculate the sum

$$
x_{0}+2 x_{1}+2^{2} x_{2}+\ldots+2^{1990} x_{1990}
$$

---
tag: 6CR1EDF3DJ
kind: problem
type: answer
answer: x_{n}=n!\sum_{=2}^{n}\frac{(-1)^{}}{!}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=41713
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
What formula? Find the formula for the general term of the sequence $\left\{x_{n}\right\}$, defined recursively:

$$
x_{n}=(n-1)\left(x_{n-1}+x_{n-2}\right), n \geqslant 4, x_{2}=1, x_{3}=2
$$

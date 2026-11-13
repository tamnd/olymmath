---
tag: DR7T4JKWTM
kind: problem
type: answer
answer: x = 1 or x = -1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0002.parquet#row=289
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a, b, c \in (0, \infty)$, not all equal. Solve the equation
$$
(a^x + b^x + c^x) (a^{-x} + b^{-x} + c^{-x}) = 3 + \frac{a^2 + b^2}{ab} + \frac{b^2 + c^2}{bc} + \frac{c^2 + a^2}{ca}.
$$

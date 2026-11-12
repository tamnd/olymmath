---
tag: ED92QQX4F0
kind: problem
type: answer
answer: \frac{n^{2}}{\sqrt{2}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=7649
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given numbers $x_{1}, \ldots, x_{n}$ from the interval $\left[0, \frac{\pi}{2}\right]$. Find the maximum value of the expression

$$
A=\left(\sqrt{\sin x_{1}}+\ldots+\sqrt{\sin x_{n}}\right) \cdot\left(\sqrt{\cos x_{1}}+\ldots+\sqrt{\cos x_{n}}\right) .
$$

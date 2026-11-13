---
tag: BA58QPJW8R
kind: problem
type: answer
answer: \frac{\sqrt{5}-1}{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=186063
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\left(x_{n}\right)$ be the sequence of real numbers for which $x_{1}=1$ and it holds that:

$$
x_{n+1}=\frac{4 x_{n}^{2}+1}{5 x_{n}+1} (n=1,2,3, \ldots)
$$

Investigate whether this sequence is convergent, and determine its limit if it exists.

---
tag: NS0K0ZQ92E
kind: problem
type: answer
answer: \frac{1}{1347}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=87878
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A sequence of real numbers $\left(a_{n}\right)$ is defined recursively by

$$
a_{1}=1, a_{2}=\frac{3}{5}, a_{n}=\frac{a_{n-2} \cdot a_{n-1}}{2 a_{n-2}-a_{n-1}} \text { for } n \geqslant 3
$$

Determine $a_{2020}$.

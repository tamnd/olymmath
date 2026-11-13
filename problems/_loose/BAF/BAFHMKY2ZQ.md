---
tag: BAFHMKY2ZQ
kind: problem
type: answer
answer: "1365"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=221126
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f(n)$ denote the largest odd factor of $n$, including possibly $n$. Determine the value of
$$\frac{f(1)}{1} + \frac{f(2)}{2} + \frac{f(3)}{3} + \cdots + \frac{f(2048)}{2048},$$
rounded to the nearest integer.

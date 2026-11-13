---
tag: KMDEAJE1NF
kind: problem
type: answer
answer: \frac{n^{2}(n+1)^{2}}{4}-\frac{n(n+1)(2n+1)}{6}=\binom{n+1}{3}\cdot\frac{3n+2}{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=172866
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let's calculate the sum of the first $n$ terms of the following series:

$$
0 \cdot 1^{2}+1 \cdot 2^{2}+2 \cdot 3^{2}+3 \cdot 4^{2}+4 \cdot 5^{2}+\ldots=0+4+18+48+100+\ldots
$$

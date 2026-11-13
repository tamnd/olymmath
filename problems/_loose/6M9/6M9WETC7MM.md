---
tag: 6M9WETC7MM
kind: problem
type: answer
answer: 33\ldots3
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=179877
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider the sequence $\left(d_{n}\right)_{n \geq 1}$ defined descriptively as follows:

$$
d_{1}=0.1 ; d_{2}=0.11 ; d_{3}=0.111 ; \ldots ; d_{n}=0, \underbrace{11 \ldots 1}_{n \text { times }}
$$

a) Find the first 2016 decimal places of the number $\sqrt{d_{4032}}$.

b) Find the sum: $\sum_{k=1}^{n} 10^{k} \cdot d_{k}$.

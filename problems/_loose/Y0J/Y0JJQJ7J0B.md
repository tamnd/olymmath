---
tag: Y0JJQJ7J0B
kind: problem
type: answer
answer: a_{n}=3^{n}-2^{n}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=88543
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given is the sequence $\left(a_{n}\right)$,

$$
a_{1}=1, a_{n}=3 a_{n-1}+2^{n-1}, \text { for } n \geq 2
$$

Express the general term of the sequence $a_{n}$ in terms of $n$.

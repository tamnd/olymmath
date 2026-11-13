---
tag: 5AQ0RWAKH6
kind: problem
type: answer
answer: 7\times2^{98}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=154248
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A sequence of numbers is defined using the relation
$$
a_{n}=-a_{n-1}+6 a_{n-2}
$$
where $a_{1}=2, a_{2}=1$. Find $a_{100}+3 a_{99}$.

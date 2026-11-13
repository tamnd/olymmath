---
tag: 20DV6KNHSS
kind: problem
type: answer
answer: '[3;53;2],[5;31;2],[11;13;2]'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=184128
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine all ordered triples $\left[P_{1} ; P_{2} ; P_{3}\right]$ of prime numbers $P_{1}, P_{2}, P_{3}$ with $P_{2}>P_{3}$, that satisfy the equation:

$$
P_{1}\left(P_{2}+P_{3}\right)=165
$$

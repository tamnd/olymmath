---
tag: KG4VZV37AB
kind: problem
type: answer
answer: \frac{a_{1}^{2n}-a_{2}^{2n}}{a_{2}^{2(n-1)}(a_{1}^{2}-a_{2}^{2})^{2}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=173732
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
If the numbers

$$
a_{1}, a_{2}, a_{3}, \ldots a_{n}, a_{n+1}
$$

are terms of a geometric sequence, then it must be shown that the

$$
a_{1}^{2}-a_{2}^{2}, a_{2}^{2}-a_{3}^{2}, a_{3}^{2}-a_{4}^{2}, \ldots
$$

expressions have reciprocals that also form a geometric sequence. Calculate the sum of this sequence.

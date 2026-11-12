---
tag: GT8FD9KN6V
kind: problem
type: answer
answer: "2019"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=17787
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The sequence is defined recursively: $a_{1}=1, a_{2}=2, a_{n+2}=\frac{a_{n+1}}{a_{n}}$. Find the sum of the first 1730 terms of this sequence.

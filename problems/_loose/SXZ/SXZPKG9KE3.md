---
tag: SXZPKG9KE3
kind: problem
type: answer
answer: (1,1,1),(1,1,2),(1,2,1),(2,1,1),(1,3,2),(2,1,3),(3,2,1),(3,5,4),(4,3,5),(5,4,3)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90082
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine all triples $(a, b, c)$ of natural numbers for which

$$
a \mid (b+1), b \mid (c+1) \text{and} c \mid (a+1)
$$

---
tag: FDXFNV6FG9
kind: problem
type: answer
answer: "3331"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=96347
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
From the sequence of positive integers $1,2,3,4, \cdots$, remove the multiples of 3 and 4, but retain all multiples of 5 (for example, 15 and 120 are not removed). The remaining numbers form a new sequence: $a_{1}=1, a_{2}=2, a_{3}=5, a_{4}=7, \cdots$. Find $a_{1999}$.

---
tag: D8YZRE9MKP
kind: problem
type: answer
answer: 57,i=32,=2,=29
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=183843
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A person answers the question about their birthday:

"In the year 1989, I was $a$ years old. I was born on the $t$-th day of the $m$-th month of the year $(1900+j)$. The numbers $a, j, m, t$ are natural numbers; for them, $a \cdot j \cdot m \cdot t=105792.$"

Determine whether the numbers $a, j, m, t$ are uniquely determined by this information! If this is the case, provide these numbers!

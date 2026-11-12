---
tag: 4TAATT9J7Z
kind: problem
type: answer
answer: 2^{n-1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=41449
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Representation of an integer as a sum. The number 3 can be represented in four ways as the sum of one or more positive numbers, namely: as $3, 1+2, 2+1$ and $1+1+1$. Show that any positive integer $n$ can similarly be expressed in $2^{n-1}$ ways.

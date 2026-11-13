---
tag: BZKCNC1GZG
kind: problem
type: answer
answer: "9"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=140927
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Fill the numbers $1 \sim 9$ into a $3 \times 3$ grid such that each cell contains a unique number. Two cells with a common edge are called a "number pair." Determine the maximum number of number pairs, where one number in the pair is a multiple of the other.

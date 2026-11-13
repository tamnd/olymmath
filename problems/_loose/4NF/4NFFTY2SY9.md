---
tag: 4NFFTY2SY9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=227430
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Each two-digit natural number is *assigned * a digit as follows: Its digits are multiplied. If the result is a digit, this is the assigned digit. If the result is a two-digit number, these two figures are multiplied, and if the result is a digit, this is the assigned digit. Otherwise, the operation is repeated. For example, the digit assigned to $32$ is $6$ since $3 \times = 6$; the digit assigned to $93$ is $4$ since $9 \times 3 = 27$, $2 \times 7 = 14$, $1 \times 4 = 4$. Find all the two-digit numbers that are assigned $8$.

---
tag: PCK1R12KS3
kind: problem
type: answer
answer: "5"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210569
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Define a list of number with the following properties:
- The first number of the list is a one-digit natural number.
- Each number (since the second) is obtained by adding $9$ to the number before in the list.
- The number $2012$ is in that list.
Find the first number of the list.

---
tag: XSW2FHJSDA
kind: problem
type: answer
answer: "4"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=31436
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a statistical series - the number of days missed due to illness by employees of a laboratory.

| Number of days | 0 | 2 | 3 | 4 | 5 | 7 | 10 | Total |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Number of employees | 7 | 3 | 5 | 2 | 5 | 6 | 2 | 30 |

Determine the average number of days missed due to illness per person and the dispersion of this number around the average.

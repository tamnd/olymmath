---
tag: J6CXXE0S9C
kind: problem
type: answer
answer: "1024"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=164663
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
If we write down the first four rows of Pascal's triangle in the usual way, and then add the numbers that fall below each other, we get the following seven numbers: $1,1,4,3,4,1,1$.

| 1 | | | | | |
| :---: | :---: | :---: | :---: | :---: | :---: |
| | | 1 | | 1 | |
| | | | | | 1 |
| 1 | | 3 | | 3 | 1 |
| | | | | | 11 |

If we write down the first 1024 rows of Pascal's triangle and add the numbers that fall below each other, how many odd numbers will there be among the 2047 numbers thus obtained?

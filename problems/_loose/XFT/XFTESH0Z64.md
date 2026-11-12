---
tag: XFTESH0Z64
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=26267
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a numerical triangle, each number is equal to the sum of three numbers from the previous row:

| | | | | | | | | |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| | | | | 1 | | | | |
| | | | 1 | 1 | 1 | | | |
| | | 1 | 2 | 3 | 2 | 1 | | |
| | 1 | 3 | 6 | 7 | 6 | 3 | 1 | |
| 1 | 4 | 10 | 16 | 19 | 16 | 10 | 4 | 1 |

Prove that in each row, starting from the 3rd, there will be even numbers.

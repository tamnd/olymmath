---
tag: MZPTW4Q8RC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=166007
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a table of function values, for the cube roots of the numbers 2, 16, 54, .., 1024, rounded to seven decimal places, we found the following:

| $2:$ | 1,2599210, | $250:$ | 6,2996053 |
| ---: | ---: | ---: | ---: |
| $16:$ | 2,5198421, | $432:$ | 7,5595263 |
| $54:$ | 3,7797631, | $686:$ | 8,8194474 |
| $128:$ | 5,0396842, | $1024:$ | 10,0793684 |

Show that not all the data can be correctly rounded. How can the data be corrected with minimal effort?

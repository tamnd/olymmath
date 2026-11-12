---
tag: T2PGS1H5DP
kind: problem
type: answer
answer: "n"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=54425
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In each cell of a secret $n \times n$ table, one of the digits from 1 to 9 is written. From these, $n$-digit numbers are formed, written from left to right in the rows and from top to bottom in the columns. Petya wants to write an $n$-digit number without zeros in its representation, such that neither this number nor its reverse matches any of the $2n$ numbers in the rows and columns of the table. What is the minimum number of cells Petya needs to know the digits of to achieve this?

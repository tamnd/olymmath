---
tag: BZ718SF8HA
kind: problem
type: answer
answer: odd\n
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=54209
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given an $n \times n$ table, the columns of which are numbered from 1 to $n$. The cells of the table are filled with numbers $1, \ldots, n$ such that all numbers in each row and each column are distinct. We will call a cell good if the number in it is greater than the number of the column in which it is located. For which $n$ does there exist a placement where all rows have the same number of good cells?

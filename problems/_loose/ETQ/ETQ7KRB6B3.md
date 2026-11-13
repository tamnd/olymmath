---
tag: ETQ7KRB6B3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=189483
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We are given an $n \times n$ board. Rows are labeled with numbers 1 to $n$ downwards and columns are labeled with numbers 1 to $n$ from left to right. On each field of the board we write the number $x^{2}+y^{2}$ where $(x, y)$ are its coordinates. We are given a figure and can initially place it on any field. In every step we can move the figure from one field to another if the other field has not already been visited and if at least one of the following conditions is satisfied:

- the numbers in those 2 fields give the same remainders when divided by $n$,
- those fields are point reflected with respect to the center of the board.

Can all the fields be visited in case:
a) $n=4$,
b) $n=5$ ?

(Josip Pupić)

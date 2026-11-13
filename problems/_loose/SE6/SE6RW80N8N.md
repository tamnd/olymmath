---
tag: SE6RW80N8N
kind: problem
type: answer
answer: "10"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=69330
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a row, 10 integers are written. The second row is constructed as follows: under each number $A$ in the first row, a number is written that is equal to the count of numbers in the first row that are greater than $A$ and are located to the right of $A$. The third row is constructed similarly from the second row, and so on.

a) Prove that all rows, starting from some point, are zero (consist entirely of zeros).

b) What is the maximum possible number of non-zero rows (containing at least one number different from zero)?

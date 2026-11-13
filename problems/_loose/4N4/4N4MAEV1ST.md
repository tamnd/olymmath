---
tag: 4N4MAEV1ST
kind: problem
type: answer
answer: \frac{(3n)!}{6^n \cdot n!}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=221253
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A $3n$-table is a table with three rows and $n$ columns containing all the numbers $1, 2, …, 3n$. Such a table is called *tidy * if the $n$ numbers in the first row appear in ascending order from left to right, and the three numbers in each column appear in ascending order from top to bottom. How many tidy $3n$-tables exist?

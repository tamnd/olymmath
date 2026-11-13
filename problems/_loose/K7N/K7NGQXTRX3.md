---
tag: K7NGQXTRX3
kind: problem
type: answer
answer: "1950"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=144653
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Fill the integers from $1 \sim 10000$ into a $100 \times 100$ table in natural order, with each row from left to right being: the first row 1 to 100, the second row $101 \sim 200, \cdots$, the hundredth row $9901 \sim 10000$. If the row and column containing number A have no perfect squares, then A is called a free number. How many free numbers are there in the table?

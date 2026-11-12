---
tag: NJNYVPP3SA
kind: problem
type: answer
answer: "3"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=41293
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Difference Squares. Can you arrange 9 digits in a square so that in any row, any column, and on each of the main diagonals, the differences between the sum of two digits and the third digit are the same? In the square provided in our diagram, all rows and columns meet the required condition - the difference in them is 3 (for example, $4+2-3,1+9-7,6+5-8$, etc.), but the diagonals "fall short," since the differences $8-(4+1)$ and $6-(1+2)$ are obtained in a prohibited manner: one digit should not be subtracted from the sum of two others, but rather the sum of two minus one.

How many solutions exist in total?

| 4 | 3 | 2 |
| :--- | :--- | :--- |
| 7 | 1 | 9 |
| 6 | 5 | 8 |

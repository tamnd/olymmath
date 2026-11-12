---
tag: TDTHEZD97C
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=53001
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A triangular table is constructed according to the following rule: in the top row, there is a single natural number $a>1$, and below each number $k$ on the left, we write the number $k^{2}$, and on the right - the number $k+1$. Prove that in each row of the table, all numbers are different.

For example, for $a=2$, the second row consists of the numbers 4 and 3, the third row consists of the numbers $16,5,9$ and 4, and the fourth row consists of the numbers $256,17,25,6,81,10,16$ and 5.

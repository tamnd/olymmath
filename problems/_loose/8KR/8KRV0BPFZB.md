---
tag: 8KRV0BPFZB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=94929
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a $10 \times 10$ table, fill in the numbers from 1 to 100, with the cell in the $i$-th row and $j$-th column filled with $10(i-1)+j$. Each operation is as follows: choose a cell, either decrease the number in this cell by 2 and increase the numbers in two opposite neighboring cells by 1 each; or increase the number in this cell by 2 and decrease the numbers in two opposite neighboring cells by 1 each. Prove: if after some steps the table contains the numbers 1 to 100 again, then they are in the original order.

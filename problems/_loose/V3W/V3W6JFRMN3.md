---
tag: V3W6JFRMN3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=55284
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given an $n \times n$ table filled with numbers according to the following rule: in the cell located in the $i$-th row and $j$-th column of the table, the number $\frac{1}{i+j-1}$ is written. In the table, $n$ numbers are crossed out in such a way that no two crossed-out numbers are in the same column or the same row. Prove that the sum of the crossed-out numbers is not less than 1.

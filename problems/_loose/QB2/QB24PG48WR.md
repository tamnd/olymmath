---
tag: QB24PG48WR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=122700
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $A_{1}, A_{2}, \cdots, A_{2004}$ be 2004 points arranged sequentially on the circumference of a circle. Initially, the number marked on $A_{1}$ is 0, and the numbers marked on $A_{2}, A_{3}, \cdots, A_{2004}$ are 1. The following operation is allowed: Choose any point $A_{j}$, if the number marked on $A_{j}$ is 1, then simultaneously change the numbers $a, b, c$ marked on $A_{j-1}, A_{j}, A_{j+1}$ to $1-a, 1-b, 1-c$ (at this time, $A_{0} = A_{2004}, A_{2005} = A_{1}$). Can all the numbers marked on the points be changed to 0 after a finite number of such operations?

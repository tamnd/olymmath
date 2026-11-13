---
tag: ATN2AJSW0G
kind: problem
type: answer
answer: "1250"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=87893
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The rows of a $50 \times 50$ table are labeled with numbers $a_{1}, \ldots, a_{50}$, and the columns with numbers $b_{1}, \ldots, b_{50}$. These 100 numbers are all distinct, and exactly 50 of them are rational numbers. The table is filled such that for $i, j=1,2, \ldots, 50$, the number $a_{i}+b_{j}$ is written in the cell $(i, j)$. Determine the maximum possible number of rational numbers written in the cells of the table.

---
tag: Z5XMD40DG1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=243038
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a $m \times n$ rectangle where $m,n\geq 2023$. The square in the $i$-th row and $j$-th column is filled with the number $i+j$ for $1\leq i \leq m, 1\leq j \leq n$. In each move, Alice can pick a $2023 \times 2023$ subrectangle and add $1$ to each number in it. Alice wins if all the numbers are multiples of $2023$ after a finite number of moves. For which pairs $(m,n)$ can Alice win?

*Proposed by Boon Qing Hong*

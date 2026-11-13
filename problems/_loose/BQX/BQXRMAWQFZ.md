---
tag: BQXRMAWQFZ
kind: problem
type: answer
answer: "5"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=243095
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The cells of a $2021\times 2021$ table are filled with numbers using the following rule. The bottom left cell, which we label with coordinate $(1, 1)$, contains the number $0$. For every other cell $C$, we consider a route from $(1, 1)$ to $C$, where at each step we can only go one cell to the right or one cell up (not diagonally). If we take the number of steps in the route and add the numbers from the cells along the route, we obtain the number in cell $C$. For example, the cell with coordinate $(2, 1)$ contains $1 = 1 + 0$, the cell with coordinate $(3, 1)$ contains $3 = 2 + 0 + 1$, and the cell with coordinate $(3, 2)$ contains $7 = 3 + 0 + 1 + 3$. What is the last digit of the number in the cell $(2021, 2021)$?

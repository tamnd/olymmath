---
tag: 8AS1MSQFM9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=79483
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Lucie has placed seven boxes on a table: she labels them $B_{1}, \ldots, B_{7}$. She then places a token in each of them, and allows herself operations of the following two types: (1) choose an integer $k \leqslant 6$ such that the box $B_{k+1}$ is not empty, remove a token from the box $B_{k+1}$, and add two tokens to the box $B_{k}$; (2) choose an integer $k \leqslant 5$ such that the box $B_{k+2}$ is not empty, remove a token from the box $B_{k+2}$, and swap the contents of the boxes $B_{k}$ and $B_{k+1}$. Is it possible that, after a finite number of operations, Lucie ends up with exactly $2019^{2019^{2019 . .}}$ tokens in the box $B_{1}$ and none elsewhere, where the number 2019 appears 13 times in the last expression?

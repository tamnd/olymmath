---
tag: E51ACJYSKC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=241852
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a positive integer. There are $n+2$ cells lined up in a row. Each of the $n$ cells, except for the two cells at the ends, is marked with either $L$ or $R$, and there is a piece placed in one of the cells other than the two cells at the ends. Until the piece is placed on either of the two cells at the ends, the following operation is repeated:

- If the cell the piece is on is marked with $L$, change the mark to $R$ and move the piece to the any left cell.

- If the cell the piece is on is marked with $R$, change the mark to $L$ and move the piece to the any right cell.

(1) Prove that for any initial configuration (marks on cells and location of the piece), only a finite number of operations can be performed.
(2) Consider a two-player game where each player takes turns performing the above operation. The player who performs the last operation loses. Find all initial configurations such that the second player can win, regardless of the first player's move.

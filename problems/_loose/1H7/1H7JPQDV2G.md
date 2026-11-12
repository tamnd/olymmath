---
tag: 1H7JPQDV2G
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2019 India IMO Training Camp
    url: https://artofproblemsolving.com/community/c6h1876791
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=17773
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: in-tst/2019
    source: hf-ai-mo-aops
    label: 2019 India IMO Training Camp
---
Let $n$ be a natural number. A tiling of a $2n \times 2n$ board is a placing of $2n^2$ dominos (of size $2 \times 1$ or $1 \times 2$ ) such that each of them covers exactly two squares of the board and they cover all the board.Consider now two *sepearate tilings* of a $2n \times 2n$ board: one with red dominos and the other with blue dominos. We say two squares are red neighbours if they are covered by the same red domino in the red tiling; similarly define blue neighbours.

Suppose we can assign a non-zero integer to each of the squares such that the number on any square equals the difference between the numbers on it's red and blue neighbours i.e the number on it's red neigbhbour minus the number on its blue neighbour. Show that $n$ is divisible by $3$

*Proposed by Tejaswi Navilarekallu*

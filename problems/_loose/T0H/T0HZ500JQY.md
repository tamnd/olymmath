---
tag: T0HZ500JQY
kind: problem
type: answer
answer: "2"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=18795
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Pasha is playing a computer game. The game takes place on an infinite grid. Each cell contains either a treasure or a natural number. The number indicates the distance to the nearest treasure in cells (if it takes $A$ steps vertically and $B$ steps horizontally to reach the treasure, the cell contains the number $A+B$). In one move, Pasha can reveal the contents of one cell. The goal of the game is to find at least one treasure.

a) Pasha revealed three cells in a row horizontally. Each of them contained the number 5. What is the minimum number of additional moves Pasha needs to make to definitely find a treasure?

(2 points)

b) Pasha revealed some three cells, and they contained numbers. Could it be that from this information, Pasha can definitely find a treasure with the next move?

(3 points)

c) Pasha knows that each number on the field does not exceed some fixed $K \geqslant 3$. Can Pasha definitely find a treasure by making no more than $K+3$ moves?

2) Pasha knows that each number on the field does not exceed 2023. Will 20 moves be enough for Pasha to definitely find a treasure?

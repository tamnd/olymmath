---
tag: RG00BKXG8V
kind: problem
type: answer
answer: 3n^{2}-4n+1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=190896
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a game board consisting of $n \times n$ square fields, where $n \geq 2$. Fields that are directly horizontally or vertically adjacent to a field are called its neighbors. At the beginning, $k$ game pieces are distributed on the fields, with multiple or no game pieces possibly being on a single field.

In each move, one selects a field that has at least as many game pieces as neighbors and places one of these game pieces on each neighboring field. The game ends when there is no such field to choose from.

(a) Determine the smallest $k$ for which the game does not end for any possible initial arrangement and choice of moves.

(b) Determine the largest $k$ for which the game ends for any possible initial arrangement and choice of moves.

(Theresia Eisenkölbl)

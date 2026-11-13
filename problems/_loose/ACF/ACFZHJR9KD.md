---
tag: ACFZHJR9KD
kind: problem
type: answer
answer: "1010"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=76998
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a positive integer. Tom and Jerry play a game on a board consisting of a row of 2018 cells. Initially, Jerry places a piece at some cell. In each subsequent step, Tom says an integer from the interval $[1, n]$ and Jerry moves the piece by the said number of cells, by his choice either to the left or to the right. Tom wins whenever Jerry cannot make a move. Find the smallest $n$ for which Tom can pick numbers such that he wins after a finite number of moves.

(Josef Tkadlec)

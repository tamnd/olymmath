---
tag: ZB891E6DFP
kind: problem
type: answer
answer: "2360"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=53734
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are $N>2$ piles on the table, each containing one nut. Two players take turns. On a turn, a player must choose two piles where the numbers of nuts are coprime and merge these piles into one. The player who makes the last move wins. For each $N$, determine which of the players can always win, regardless of how their opponent plays.

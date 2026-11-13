---
tag: XGPX8A56SE
kind: problem
type: answer
answer: "14"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261522
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Two players play a game on a pile of $n$ beans. On each player's turn, they may take exactly $1$, $4$, or $7$ beans from the pile. One player goes first, and then the players alternate until somebody wins. A player wins when they take the last bean from the pile. For how many $n$ between $2014$ and $2050$ (inclusive) does the second player win?

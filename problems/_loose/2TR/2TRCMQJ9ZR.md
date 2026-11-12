---
tag: 2TRCMQJ9ZR
kind: problem
type: answer
answer: The\\player\wins
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=37328
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Two players play the following game. There is a board on which the number 1000 is written, and a pile of 1000 matches. On each turn, each player (they take turns) can either take from the pile,
or add no more than five matches to it (initially, neither player has any matches), and then the number of matches in the pile after this move is written on the board. The player who, after their move, writes a number that has already appeared on the board loses. Who wins with correct play: the first player or their opponent?

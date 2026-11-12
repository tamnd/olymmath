---
tag: QZ195M8WGW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=37188
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A game for two players consists of a rectangular field $1 \times 25$, divided into 25 square cells, and 25 tokens. The cells are sequentially numbered with the numbers $1,2, \ldots, 25$. In one move, a player either places a new token in one of the free cells or moves a previously placed token to the nearest free cell with a higher number. In the initial position, all cells are free. The game ends when all cells are occupied by tokens, and the winner is the player who made the last move. The players take turns. Who will win with correct play: the first player or his opponent?

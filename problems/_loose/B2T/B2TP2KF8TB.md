---
tag: B2TP2KF8TB
kind: problem
type: answer
answer: "2021"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=162963
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A table of size $1 \times 2022$ is given. The fields of the table are numbered sequentially from left to right with numbers from 1 to 2022. A black token is placed on field 1, and a white token on field 2. Two players, black and white, take turns playing the following game. The black player moves only the black token, and the white player only the white token. The player whose turn it is moves their token to an empty field on the table, in the direction towards the opponent's token. During this move, the player can either jump over the opponent's token or not. If the player whose turn it is cannot make a move, the game ends. The black player goes first. Determine the largest natural number $k$ such that the black player can force the white player to eventually move the white token to one of the fields numbered greater than or equal to $k$.

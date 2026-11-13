---
tag: BBXG98B3RG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=252826
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Alice and Bob are playing the following game: They have an $8\times8$ chessboard. Initially, all grids are white. Each round, Alice chooses a white grid and paints it black. Then Bob chooses one of the neighbors of that grid and paints it black. Or he does nothing. After that, Alice may decide to continue the game or not. The goal of Alice is to maximize the number of connected components of black grids, on the other hand, Bob wants to minimize that number. If both of them are extremely smart, how many connected components will be in the end of the game?

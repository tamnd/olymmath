---
tag: X8NJWPPN47
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90373
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0007.parquet#row=125
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Alice and Bob play a game. There are 9 cards numbered 1 through 9 on a table, and the players alternate taking the cards, with Alice going first. A player wins if at any point they hold three cards with sum 15 ; if all nine cards are taken before this occurs, the game is a tie. Does either player have a winning strategy?

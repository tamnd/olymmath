---
tag: DQJAJXAARF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=247471
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0002.parquet#row=451
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Ana and Bogdan play the following turn based game: Ana starts with a pile of $n$ ($n \ge 3$) stones. At his turn each player has to split one pile. The winner is the player who can make at his turn all the piles to have at most two stones. Depending on $n$, determine which player has a winning strategy.

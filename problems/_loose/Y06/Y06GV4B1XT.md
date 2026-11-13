---
tag: Y06GV4B1XT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=264930
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Michael and Andrew are playing the game Bust, which is played as follows: Michael chooses a positive integer less than or equal to $99$, and writes it on the board. Andrew then makes a move, which consists of him choosing a positive integer less than or equal to $ 8$ and increasing the integer on the board by the integer he chose. Play then alternates in this manner, with each person making exactly one move, until the integer on the board becomes greater than or equal to $100$. The person who made the last move loses. Let S be the sum of all numbers for which Michael could choose initially and win with both people playing optimally. Find S.

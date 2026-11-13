---
tag: 81S9DF1CMK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=181640
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Alberto and Barbara challenge each other to the following game: initially, there are several piles of tokens on a table (the number of tokens can vary from pile to pile). Taking turns, starting with Alberto, one of the two players makes one and only one of the following moves:

- either removes a token from a pile of their choice and eliminates it from the game;
- or splits a pile into two smaller piles, each containing at least one token (without adding or removing tokens from the table).

The player who removes the last token from the table wins. Determine, depending on the number of piles present on the table at the beginning and how many tokens they contain, which of the two players has a winning strategy.

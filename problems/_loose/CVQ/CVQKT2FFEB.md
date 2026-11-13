---
tag: CVQKT2FFEB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=252939
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are $2022$ stones on a table. At the start of the game, Teacher Tseng will choose a positive integer $m$ and let Ming and LTF play a game. LTF is the first to move, and he can remove at most $m$ stones on his round. Then the two people take turns removing stone, each round they must remove at least one stone, and they cannot remove more than twice the amount of stones the last person removed. The player unable to move loses. Find the smallest positive integer $m$ such that LTF has a winning strategy.

*Proposed by ltf0501*

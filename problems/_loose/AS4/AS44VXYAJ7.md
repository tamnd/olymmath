---
tag: AS44VXYAJ7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236261
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are $k$ heaps on the table, each containing a different positive number of stones. Juri and Mari make moves alternatingly, Juri starts. On each move, the player making the move has to pick a heap and remove one or more stones in it from the table; in addition, the player is allowed to distribute any number of remaining stones from that heap in any way between other non-empty heaps. The player to remove the last stone from the table wins. For which positive integers $k$ does Juri have a winning strategy for any initial state that satisfies the conditions?

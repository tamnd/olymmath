---
tag: S48BGRA73M
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=38635
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The game "15" is as follows. In a square with a side of 4, there are 15 tiles - squares with a side of 1. The tiles are numbered from 1 to 15:

| 1 | 2 | 3 | 4 |
| :---: | :---: | :---: | :---: |
| 5 | 6 | 7 | 8 |
| 9 | 10 | 11 | 12 |
| 13 | 14 | 15 | |

Any tile that borders (by side) with the empty cell can be moved to the empty cell (thereby freeing up another cell). Is it possible to swap the tiles 14 and 15, so that the empty cell remains in its original position?

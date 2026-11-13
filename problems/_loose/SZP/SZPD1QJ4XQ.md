---
tag: SZPD1QJ4XQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=75026
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On an $n \times n$ board consisting of white square fields, Markéta and Tereza take turns in $v$ moves in the following game. First, Markéta places a stone on any field and colors this field blue. Then, the player whose turn it is always moves the stone to a field that is still white and colors this field blue. By a move, we mean the usual move of a chess knight, i.e., moving the stone two fields vertically or horizontally and simultaneously one field in the other direction. The player who is next to move and cannot do so loses. Decide, for $n=4,5,6$, which of the players can play in such a way that they win regardless of the moves of the other player.

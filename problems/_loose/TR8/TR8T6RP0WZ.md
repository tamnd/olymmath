---
tag: TR8T6RP0WZ
kind: problem
type: answer
answer: "210"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=203710
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Mariana plays with an $8\times 8$ board with all its squares blank. She says that two houses are *neighbors * if they have a common side or vertex, that is, two houses can be neighbors vertically, horizontally or diagonally. The game consists of filling the $64$ squares on the board, one after the other, each with a number according to the following rule: she always chooses a house blank and fill it with an integer equal to the number of neighboring houses that are still in White. Once this is done, the house is no longer considered blank.
Show that the value of the sum of all $64$ numbers written on the board at the end of the game does not depend in the order of filling. Also, calculate the value of this sum.

Note: A house is not neighbor to itself.

---
tag: 7GP79WHT9H
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=230388
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There is a 100 x100 square table, a real number being written in each cell.$A$ and $B$ play the following game. They choose, turn by turn, some row of the table (if it has not been chosen before). When $A$ and $B$ have $50$ rows chosen each, they sum the numbers in the corresponding cells of the chosen rows, and then sum the squares of all $100$ obtained numbers and compare the results. $A$ player who has the greater result wins. Player $A$ begins. Show that $A$ can avoid a defeat.

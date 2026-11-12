---
tag: XF2NN3RB83
kind: problem
type: answer
answer: thefirstplayerwins
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=12553
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Note that $2017=13 \cdot 155+2$, i.e., all the stones on the table can be divided into 155 equal piles of 13 stones each, plus 2 additional stones.

The first player takes 2 stones on the first move, and then proceeds as follows:

1) if the second player takes $k$ stones from the table, the first player takes $13-k$ stones from the table;
2) if the second player puts $k$ stones on the table, the first player takes $k$ stones from the table.

By applying these operations, the first player will ensure that the second player will not have a move, as there will be no stones left on the table or in the second player's hand.

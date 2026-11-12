---
tag: 1CMZY09E8X
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=53659
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In each cell of a $101 \times 101$ square, except the central one, there is one of two signs: "turn" or "straight." A machine enters from outside into any cell on the border of the square, after which it drives parallel to the sides of the cells, adhering to two rules:

1) in a cell with the "straight" sign, it continues in the same direction;
2) in a cell with the "turn" sign, it turns $90^{\circ}$ (in any direction of its choice).

The central cell of the square is occupied by a house. Is it possible to place the signs in such a way that the machine has no chance of crashing into the house?

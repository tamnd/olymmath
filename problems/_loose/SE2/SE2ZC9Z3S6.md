---
tag: SE2ZC9Z3S6
kind: problem
type: answer
answer: "28"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=184701
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a domino game with the numbers $0,1, \ldots, 6$, each tile is divided into two halves, each half bearing one of the numbers. In a domino set, all combinations of two of the numbers $0,1, \ldots, 6$ appear exactly once (including those where the same number appears on both halves of a tile).

A "chain" is formed when multiple tiles are placed next to each other in a sequence such that adjacent halves of neighboring tiles always bear the same number (domino game rule).

A chain is called "closed" if the two tile halves at the free ends of the chain also bear the same number (so that the chain, if it consists of enough tiles, can be led back to its beginning and closed there).

a) Determine the number of all tiles belonging to a domino set!

b) Determine the largest number of such tiles from a domino set that can form a closed chain!

---
tag: CM9HENDEA4
kind: problem
type: answer
answer: "120"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=99924
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are 10 cards, each card has two different numbers from $1,2,3,4,5$, and no two cards have the same pair of numbers. These 10 cards are to be placed into five boxes labeled $1,2,3,4,5$, with the rule that a card with numbers $i, j$ can only be placed in box $i$ or box $j$. A placement is called "good" if the number of cards in box 1 is more than the number of cards in any other box. The number of "good" placements is $ $.

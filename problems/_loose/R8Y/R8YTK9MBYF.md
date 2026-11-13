---
tag: R8YTK9MBYF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=186071
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Two players $A$ and $B$ play the following game:

Each of the two players receives nine cards, on which the numbers 2, 3, 4, 5, 6, 7, 8, 9, 10 are marked, each of these numbers on exactly one card (of the respective player).

$A$ starts and places one of his cards on the table; then $B$ places one of his cards on the table, then $A$ again, and then $B$ and so on. The sum of the numbers on the table is determined each time. The game is over when a sum greater than 99 is reached. The player whose card caused this sum to be reached loses; the other player wins.

Investigate whether there is a strategy by which player $B$ can force a win regardless of the order in which $A$ plays his cards. If this is true, provide such a strategy.

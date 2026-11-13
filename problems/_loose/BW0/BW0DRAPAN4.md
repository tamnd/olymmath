---
tag: BW0DRAPAN4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=106145
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Xintong plays a game of turning one six-digit number into another. The numbers can have leading zeros, but cannot go over 6 digits or below 0 . He can only make the following moves, any number of times in any order:
- R: rotate the last digit to the start, for example, $092347 \rightarrow 709234$, or
- A: add 1001 to the number, for example, $709234 \rightarrow 710235$, or
- S: subtract 1001 from the number, for example, $709234 \rightarrow 708233$.
a. Show that it is possible to turn 202122 into 313233 .
b. Show that turning 999999 into 000000 can be done in eight moves.
c. Show that any multiple of 11 remains a multiple of 11 after any sequence of moves.
d. Show that it is impossible to turn 112233 into 000000 .

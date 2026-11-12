---
tag: 5TNC5VYKRZ
kind: problem
type: answer
answer: Forallpexcept23
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=1124
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: pl-om/2009
    source: hf-numinamath-1-5
    label: LX OM - I - Task 12
---
Given a prime number $ p $. On the left side of the board, the numbers $ 1, 2, 3, \cdots, p - 1 $ are written,
while on the right side, the number $ 0 $ is written. We perform a sequence of $ p - 1 $ moves, each of which proceeds
as follows: We select one of the numbers written on the left side of the board, add it to all the
remaining numbers on the board, and then erase the selected number.
Determine for which values
of $ p $ it is possible to choose the numbers in such a way that the number remaining on the board after
all moves have been performed is divisible by $ p $.

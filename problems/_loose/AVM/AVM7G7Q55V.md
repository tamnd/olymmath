---
tag: AVM7G7Q55V
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=4107
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=151283
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hmmt/2011
    source: hf-numina-olympiads
    label: HMMT February
---
Alice and Bob play a game in which two thousand and eleven $2011 \times 2011$ grids are distributed between the two of them, 1 to Bob, and the other 2010 to Alice. They go behind closed doors and fill their grid(s) with the numbers $1,2, \ldots, 2011^{2}$ so that the numbers across rows (left-to-right) and down columns (top-to-bottom) are strictly increasing. No two of Alice's grids may be filled identically. After the grids are filled, Bob is allowed to look at Alice's grids and then swap numbers on his own grid, two at a time, as long as the numbering remains legal (i.e. increasing across rows and down columns) after each swap. When he is done swapping, a grid of Alice's is selected at random. If there exist two integers in the same column of this grid that occur in the same row of Bob's grid, Bob wins. Otherwise, Alice wins. If Bob selects his initial grid optimally, what is the maximum number of swaps that Bob may need in order to guarantee victory?

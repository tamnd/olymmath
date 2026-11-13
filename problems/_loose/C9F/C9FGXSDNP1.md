---
tag: C9FGXSDNP1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2020 Caucasus Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h2031577
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=18675
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220198
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: caucasus/2020
    source: hf-ai-mo-aops
    label: 2020 Caucasus Mathematical Olympiad
---
Peter and Basil play the following game on a horizontal table $1\times{2019}$ . Initially Peter chooses $n$ positive integers and writes them on a board. After that Basil puts a coin in one of the cells. Then at each move, Peter announces a number s among the numbers written on the board, and Basil needs to shift the coin by $s$ cells, if it is possible: either to the left, or to the right, by his decision. In case it is not possible to shift the coin by $s$ cells neither to the left, nor to the right, the coin stays in the current cell. Find the least $n$ such that Peter can play so that the coin will visit all the cells, regardless of the way Basil plays.

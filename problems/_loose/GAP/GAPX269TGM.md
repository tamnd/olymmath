---
tag: GAPX269TGM
kind: problem
type: answer
answer: "45"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Turkey/train/0000.parquet#row=227
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are $k$ heaps of beads on the table containing 2019 beads in total. In each move we choose a heap: either remove it from the table or divide it into two not necessarily equal parts. Find the maximal possible value of $k$ such that for any initial distribution of beads after finite number of moves one can get $k$ heaps with pairwise distinct number of beads.

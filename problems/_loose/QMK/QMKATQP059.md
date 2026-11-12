---
tag: QMKATQP059
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2017 Taiwan TST Round 2
    url: https://artofproblemsolving.com/community/c6h1626539
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=61150
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tw-tst/2017
    source: hf-ai-mo-aops
    label: 2017 Taiwan TST Round 2
---
There is a $2n\times 2n$ rectangular grid and a chair in each cell of the grid. Now, there are $2n^2$ pairs of couple are going to take seats. Define the distance of a pair of couple to be the sum of column difference and row difference between them. For example, if a pair of couple seating at $(3,3)$ and $(2,5)$ respectively, then the distance between them is $|3-2|+|3-5|=3$ . Moreover, define the total distance to be the sum of the distance in each pair. Find the maximal total distance among all possibilities.

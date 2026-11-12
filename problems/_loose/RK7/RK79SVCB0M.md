---
tag: RK79SVCB0M
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1339725
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=14566
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2016
    source: hf-ai-mo-aops
    label: 2016 Online Math Open Problems
---
Mark the Martian and Bark the Bartian live on planet Blok, in the year $2019$ . Mark and Bark decide to play a game on a $10 \times 10$ grid of cells. First, Mark randomly generates a subset $S$ of $\{1, 2, \dots, 2019\}$ with $|S|=100$ . Then, Bark writes each of the $100$ integers in a different cell of the $10 \times 10$ grid. Afterwards, Bark constructs a solid out of this grid in the following way: for each grid cell, if the number written on it is $n$ , then she stacks $n$ $1 \times 1 \times 1$ blocks on top of one other in that cell. Let $B$ be the largest possible surface area of the resulting solid, including the bottom of the solid, over all possible ways Bark could have inserted the $100$ integers into the grid of cells. Find the expected value of $B$ over all possible sets $S$ Mark could have generated.

*Proposed by Yang Liu*

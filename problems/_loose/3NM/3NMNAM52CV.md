---
tag: 3NMNAM52CV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2021 Taiwan TST Round 1
    url: https://artofproblemsolving.com/community/c6h2493291
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=20558
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=222070
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tw-tst/2021
    source: hf-ai-mo-aops
    label: 2021 Taiwan TST Round 1
---
Let $n$ and $k$ be positive integers satisfying $k\leq2n^2$ . Lee and Sunny play a game with a $2n\times2n$ grid paper. First, Lee writes a non-negative real number no greater than $1$ in each of the cells, so that the sum of all numbers on the paper is $k$ . Then, Sunny divides the paper into few pieces such that each piece is constructed by several complete and connected cells, and the sum of all numbers on each piece is at most $1$ . There are no restrictions on the shape of each piece. (Cells are connected if they share a common edge.)
Let $M$ be the number of pieces. Lee wants to maximize $M$ , while Sunny wants to minimize $M$ . Find the value of $M$ when Lee and Sunny both play optimally.

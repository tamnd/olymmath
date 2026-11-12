---
tag: TSVVXG9XAJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2019 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1947326
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=18178
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2019
    source: hf-ai-mo-aops
    label: 2019 Online Math Open Problems
---
Let $k$ be a positive integer. Marco and Vera play a game on an infinite grid of square cells. At the beginning, only one cell is black and the rest are white.
A turn in this game consists of the following. Marco moves first, and for every move he must choose a cell which is black and which has more than two white neighbors. (Two cells are neighbors if they share an edge, so every cell has exactly four neighbors.) His move consists of making the chosen black cell white and turning all of its neighbors black if they are not already. Vera then performs the following action exactly $k$ times: she chooses two cells that are neighbors to each other and swaps their colors (she is allowed to swap the colors of two white or of two black cells, though doing so has no effect). This, in totality, is a single turn. If Vera leaves the board so that Marco cannot choose a cell that is black and has more than two white neighbors, then Vera wins; otherwise, another turn occurs.
Let $m$ be the minimal $k$ value such that Vera can guarantee that she wins no matter what Marco does. For $k=m$ , let $t$ be the smallest positive integer such that Vera can guarantee, no matter what Marco does, that she wins after at most $t$ turns. Compute $100m + t$ .

*Proposed by Ashwin Sah*

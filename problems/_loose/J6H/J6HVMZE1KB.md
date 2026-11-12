---
tag: J6HVMZE1KB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 Azerbaijan National Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h3353554
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=30721
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: az-mo/2024
    source: hf-ai-mo-aops
    label: 2024 Azerbaijan National Mathematical Olympiad
---
A $9 \times 10$ board is divided into $90$ unit cells. There are certain rules for moving a non-standard chess queen from one square to another:

- The queen can only move along the column or row it is in each step.
- For any natural number $n$ , if $x$ cells move made in $(2n-1)$ th step, then $9-x$ cells move will be done in $(2n)$ th step. The last cell it stops at during these steps is considered the visited cell.

Is it possible for the queen to move from any square on the board and return to the square where it started after visiting all the squares of the board exactly once?

Note: At each step, the queen chooses the right, left, up, and down direction within the above condition can choose.

---
tag: Y8BYV2MZDC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2025 Bulgarian Winter Tournament
    url: https://artofproblemsolving.com/community/c6h3488507
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=2495
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: bg-winter/2025
    source: hf-ai-mo-aops
    label: 2025 Bulgarian Winter Tournament
---
We have $ n $ chips that are initially placed on the number line at position 0. On each move, we select a position $ x \in \mathbb{Z} $ where there are at least two chips; we take two of these chips, then place one at $ x-1 $ and the other at $ x+1 $.

a) Prove that after a finite number of moves, regardless of how the moves are chosen, we will reach a final position where no two chips occupy the same number on the number line.

b) For every possible final position, let $ \Delta $ represent the difference between the numbers where the rightmost and the leftmost chips are located. Find all possible values of $ \Delta $ in terms of $ n $.

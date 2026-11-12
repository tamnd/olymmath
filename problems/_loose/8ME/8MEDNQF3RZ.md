---
tag: 8MEDNQF3RZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2025 Iran MO (2nd Round)
    url: https://artofproblemsolving.com/community/c6h3552217
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=2699
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo-r2/2025
    source: hf-ai-mo-aops
    label: 2025 Iran MO (2nd Round)
---
Ali and Shayan are playing a turn-based game on an infinite grid. Initially, all cells are white. Ali starts the game, and in the first turn, he colors one unit square black. In the following turns, each player must color a white square that shares at least one side with a black square. The game continues for exactly 2808 turns, after which each player has made 1404 moves. Let $A$ be the set of black cells at the end of the game. Ali and Shayan respectively aim to minimize and maximise the perimeter of the shape $A$ by playing optimally. (The perimeter of shape $A$ is defined as the total length of the boundary segments between a black and a white cell.)

What are the possible values of the perimeter of $A$ , assuming both players play optimally?

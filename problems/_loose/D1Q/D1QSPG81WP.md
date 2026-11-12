---
tag: D1QSPG81WP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2025 Iran MO (3rd Round)
    url: https://artofproblemsolving.com/community/c6h3647992
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44504
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo/2025
    source: hf-ai-mo-aops
    label: 2025 Iran MO (3rd Round)
---
Two players play a game with the numbers 1 to $n>1404$ . The first player arranges the numbers 1 to $n$ in an arbitrary order around a circle. The second player then selects one of the numbers. Each time the second player selects a number, that number is removed from the circle, and the first player declares whether the number is assigned to the first player, to the second player, or discarded. From the second move onward, the second player must select a number that has at most one neighbor (i.e., one of the endpoints of an arc of consecutive numbers), and the process repeats.

In every three consecutive moves, the first player can assign at most one number to themselves and at most one number to be discarded. Prove that the first player can play in such a way that the sum of the numbers assigned to them is greater than the sum of the numbers assigned to the second player.

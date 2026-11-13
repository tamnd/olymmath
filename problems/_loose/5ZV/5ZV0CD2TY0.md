---
tag: 5ZV0CD2TY0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1997 Estonia National Olympiad
    url: https://artofproblemsolving.com/community/c6h2029102
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=38609
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=235955
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ee-mo/1997
    source: hf-ai-mo-aops
    label: 1997 Estonia National Olympiad
---
Mari and Yuri play the next play. At first, there are two piles on the table, with $m$ and $n$ candies, respectively. At each turn, players eats one pile of candy from the table and distribute another pile of candy into two non-empty parts ,. Everything is done in turn and wins the player who can no longer share the pile (when there is only one candy left). Which player will win if both use the optimal strategy and Mari makes the first move?

---
tag: 38HW6WKWJ3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2010 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h427560
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=5488
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=207635
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: pumac/2010
    source: hf-ai-mo-aops
    label: 2010 Princeton University Math Competition
---
Consider the following two-player game: player $A$ (first mover) and $B$ take turns to write a positive integer less than or equal to $10$ on the blackboard. The integer written at any step cannot be a factor of any existing integer on board. Determine, with proof, who wins.

---
tag: 3DRQK14R9B
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 CMIMC Team
    url: https://artofproblemsolving.com/community/c6h3306400
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=70904
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cmimc/2024
    source: hf-ai-mo-aops
    label: 2024 CMIMC Team
---
An ant is currently on a vertex of the top face on a 6-sided die. The ant wants to travel to the opposite vertex of the die (the vertex that is farthest from the start), and the ant can travel along edges of the die to other vertices that are on the top face of the die.

Every second, the ant picks a valid edge to move along, and the die randomly flips to an adjacent face. If the ant is on any of the bottom vertices after the flip, it is crushed and dies. What is the probability that the ant makes it to its target? (If the ant makes it to the target and the die rolls to crush it, it achieved its dreams before dying, so this counts.)

*Proposed by Lohith Tummala*

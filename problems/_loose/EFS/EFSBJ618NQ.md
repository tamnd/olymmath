---
tag: EFSBJ618NQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1987 Tournament Of Towns
    url: https://artofproblemsolving.com/community/c6h2068562
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=28027
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228375
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 1987 Tournament Of Towns
---
A certain town is represented as an infinite plane, which is divided by straight lines into squares. The lines are streets, while the squares are blocks. Along a certain street there stands a policeman on each $100$ th intersection . Somewhere in the town there is a bandit , whose position and speed are unknown, but he can move only along the streets. The aim of the police is to see the bandit . Does there exist an algorithm available to the police to enable them to achieve their aim?

(A. Andjans, Riga)

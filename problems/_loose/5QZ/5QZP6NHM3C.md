---
tag: 5QZP6NHM3C
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 CMIMC
    url: https://artofproblemsolving.com/community/c6h2791492
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=171
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=203820
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cmimc/2022
    source: hf-ai-mo-aops
    label: 2022 CMIMC
---
The CMU Kiltie Band is attempting to crash a helicopter via grappling hook. The helicopter starts parallel (angle $0$ degrees) to the ground. Each time the band members pull the hook, they tilt the helicopter forward by either $x$ or $x+1$ degrees, with equal probability, if the helicopter is currently at an angle $x$ degrees with the ground. Causing the helicopter to tilt to $90$ degrees or beyond will crash the helicopter. Find the expected number of times the band must pull the hook in order to crash the helicopter.

*Proposed by Justin Hsieh*

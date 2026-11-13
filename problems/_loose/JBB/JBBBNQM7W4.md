---
tag: JBBBNQM7W4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 Tournament of Towns
    url: https://artofproblemsolving.com/community/c6h2038291
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=29034
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=229039
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 2013 Tournament of Towns
---
A spacecraft landed on an asteroid. It is known that the asteroid is either a ball or a cube. The rover started its route at the landing site and finished it at the point symmetric to the landing site with respect to the center of the asteroid. On its way, the rover transmitted its spatial coordinates to the spacecraft on the landing site so that the trajectory of the rover movement was known. Can it happen that this information is not suffcient to determine whether the asteroid is a ball or a cube?

---
tag: BAYRF3163W
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 CMIMC
    url: https://artofproblemsolving.com/community/c6h2791426
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=130
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=203779
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
There are $9$ points arranged in a $3\times 3$ square grid. Let two points be adjacent if the distance between them is half the side length of the grid. (There should be $12$ pairs of adjacent points). Suppose that we wanted to connect $8$ pairs of adjacent points, such that all points are connected to each other. In how many ways is this possible?

*Proposed by Kevin You*

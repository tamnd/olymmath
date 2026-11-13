---
tag: DPV4B3P65Z
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2021 Bangladeshi National Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h2522663
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=19827
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=221346
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: bd-bdmo/2021
    source: hf-ai-mo-aops
    label: 2021 Bangladeshi National Mathematical Olympiad
---
Two toads named Gamakichi and Gamatatsu are sitting at the points $(0,0)$ and $(2,0)$ respectively. Their goal is to reach $(5,5)$ and $(7,5)$ respectively by making one unit jumps in positive $x$ or $y$ direction at a time. How many ways can they do this while ensuring that there is no point on the plane where both Gamakichi And Gamatatsu land on?

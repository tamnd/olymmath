---
tag: FGNWX6DB21
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 South Africa National Olympiad
    url: https://artofproblemsolving.com/community/c6h3489198
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=2157
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/South_Africa/train/0000.parquet#row=293
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: za-samo/2024
    source: hf-ai-mo-aops
    label: 2024 South Africa National Olympiad
  - at: za-samo
    source: hf-mathnet
    label: South Africa The South African Mathematical Olympiad Third Round
---
A cube of side length $n$ is made up of $n^3$ smaller unit cubes. Some of the six faces of the large cube are fully painted. When the large cube is taken apart, 245 smaller cubes do not have any paint on them.

Determine the value(s) of $n$ and how many faces of the large cube were painted.

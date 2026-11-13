---
tag: X49K0JP8YR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2014 Stanford Mathematics Tournament
    url: https://artofproblemsolving.com/community/c6h2949247
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=74009
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263495
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: smt/2014
    source: hf-ai-mo-aops
    label: 2014 Stanford Mathematics Tournament
---
A square $ABCD$ with side length $1$ is inscribed in a circle. A smaller square lies in the circle with two vertices lying on segment $AB$ and the other two vertices lying on minor arc $AB$ . Compute the area of the smaller square.

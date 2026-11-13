---
tag: TWEX38NEYJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2007 Stanford Mathematics Tournament
    url: https://artofproblemsolving.com/community/c6h338564
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73954
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263441
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: smt/2007
    source: hf-ai-mo-aops
    label: 2007 Stanford Mathematics Tournament
---
Let there be $ 4n + 2$ distinct paths in space with exactly $ 2n^2 + 6n + 1$ points at which exactly two of the paths intersect. (A path never intersects itself.) What is the maximum number of points where exactly three paths intersect?

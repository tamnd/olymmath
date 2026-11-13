---
tag: 9KKEZBDDVY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2007 Stanford Mathematics Tournament
    url: https://artofproblemsolving.com/community/c6h338562
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73952
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263439
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
A farmer wants to build a rectangular region, using a river as one side and some fencing as the other three sides. He has 1200 feet of fence which he can arrange to different dimensions. He creates the rectangular region with length $ L$ and width $ W$ to enclose the greatest area. Find $ L+W$ .

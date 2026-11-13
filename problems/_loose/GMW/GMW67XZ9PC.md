---
tag: GMW67XZ9PC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2014 Singapore Senior Math Olympiad
    url: https://artofproblemsolving.com/community/c6h595544
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=11948
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=213894
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: sg-smo/2014
    source: hf-ai-mo-aops
    label: 2014 Singapore Senior Math Olympiad
---
Some blue and red circular disks of identical size are packed together to form a triangle. The top level has one disk and each level has 1 more disk than the level above it. Each disk not at the bottom level touches two disks below it and its colour is blue if these two disks are of the same colour. Otherwise its colour is red.

Suppose the bottom level has 2048 disks of which 2014 are red. What is the colour of the disk at the top?

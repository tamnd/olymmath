---
tag: 5QXCTYBDVB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 CMIMC
    url: https://artofproblemsolving.com/community/c6h1221833
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=13787
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=215624
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cmimc/2016
    source: hf-ai-mo-aops
    label: 2016 CMIMC
---
Ryan has three distinct eggs, one of which is made of rubber and thus cannot break; unfortunately, he doesn't know which egg is the rubber one. Further, in some 100-story building there exists a floor such that all normal eggs dropped from below that floor will not break, while those dropped from at or above that floor will break and cannot be dropped again. What is the minimum number of times Ryan must drop an egg to determine the floor satisfying this property?

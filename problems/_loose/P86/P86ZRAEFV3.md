---
tag: P86ZRAEFV3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2011 Tournament of Towns
    url: https://artofproblemsolving.com/community/c6h2022125
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=28921
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228931
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 2011 Tournament of Towns
---
In a country, there are $100$ towns. Some pairs of towns are joined by roads. The roads do not intersect one another except meeting at towns. It is possible to go from any town to any other town by road. Prove that it is possible to pave some of the roads so that the number of paved roads at each town is odd.

---
tag: ASVQ37DTH1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2019 239 Open Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h2215212
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=54952
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=230381
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-239-open/2019
    source: hf-ai-mo-aops
    label: 2019 239 Open Mathematical Olympiad
---
Given a natural number $k> 1$ . Prove that if through any edge of the graph $G$ passes less than $[e(k-1)! - 1]$ simple cycles, then the vertices of this graph can be colored with $k$ colors in the correct way.

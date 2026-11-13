---
tag: 4X5TZ2PGS6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2017 BMT Spring
    url: https://artofproblemsolving.com/community/c6h2746820
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=70004
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=260939
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: bmt/2017
    source: hf-ai-mo-aops
    label: 2017 BMT Spring
---
Given a cube with side length $ 1$ , we perform six cuts as follows: one cut parallel to the $xy$ -plane, two cuts parallel to the $yz$ -plane, and three cuts parallel to the $xz$ -plane, where the cuts are made uniformly independent of each other. What is the expected value of the volume of the largest piece?

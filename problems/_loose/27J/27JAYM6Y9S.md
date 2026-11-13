---
tag: 27JAYM6Y9S
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Bangladesh Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h3013534
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=566
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204231
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: bd-bdmo/2023
    source: hf-ai-mo-aops
    label: 2023 Bangladesh Mathematical Olympiad
---
$2023$ balls are divided into several buckets such that no bucket contains more than $99$ balls. We can remove balls from any bucket or remove an entire bucket, as many times as we want. Prove that we can remove them in such a way that each of the remaining buckets will have an equal number of balls and the total number of remaining balls will be at least $100$ .

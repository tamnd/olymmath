---
tag: MVZRGHB8KE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2021 Azerbaijan Senior NMO
    url: https://artofproblemsolving.com/community/c6h2962822
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=30764
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=87783
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0003.parquet#row=11
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: az-mo/2021
    source: hf-ai-mo-aops
    label: 2021 Azerbaijan Senior NMO
---
Find all triples of natural numbers $(a, b, c)$ for which the number $$ 2^a + 2^b + 2^c + 3 $$ is the square of an integer.

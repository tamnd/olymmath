---
tag: EDB7HHBB6S
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2020 Irish Math Olympiad
    url: https://artofproblemsolving.com/community/c6h2199676
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=18976
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220499
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ireland/train/0000.parquet#row=289
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ie-irmo/2020
    source: hf-ai-mo-aops
    label: 2020 Irish Math Olympiad
  - at: ie-irmo/2020
    source: hf-mathnet
    label: Ireland IRL_ABooklet_2020
---
A round table has $2 N$ chairs around it. Due to social distancing guidelines, no two people are allowed to sit next to each other. How many different ways are there to choose seats around the table on which $N-1$ guests can be seated?

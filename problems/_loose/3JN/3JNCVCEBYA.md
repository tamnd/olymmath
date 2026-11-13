---
tag: 3JNCVCEBYA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2017 Taiwan TST Round 2
    url: https://artofproblemsolving.com/community/c6h1626531
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=61147
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=253150
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: zh
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Taiwan/train/0000.parquet#row=209
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tw-tst/2017
    source: hf-ai-mo-aops
    label: 2017 Taiwan TST Round 2
---
Find all tuples of positive integers $(a,b,c)$ such that $$ a^b+b^c+c^a=a^c+b^a+c^b $$

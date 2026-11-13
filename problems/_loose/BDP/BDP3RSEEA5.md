---
tag: BDP3RSEEA5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 USA Team Selection Test
    url: https://artofproblemsolving.com/community/c6h546349
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=10560
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00002-of-00003.parquet#row=148069
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0005.parquet#row=157
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: us-tst/2013
    source: hf-ai-mo-aops
    label: 2013 USA Team Selection Test
---
Determine if there exists a (three-variable) polynomial $P(x,y,z)$ with integer coefficients satisfying the following property: a positive integer $n$ is *not* a perfect square if and only if there is a triple $(x,y,z)$ of positive integers such that $P(x,y,z) = n$ .

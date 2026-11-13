---
tag: TSW4JNMS89
kind: problem
appearances:
  - at: bmt/2021/ge6
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: berkeley-mt
    name: Berkeley Math Tournament 2021 official paper
    url: https://berkeley.mt/archives/bmt-2021/general-problems.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2021 BMT
    url: https://artofproblemsolving.com/community/c6h3164376
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=70357
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261294
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A toilet paper roll is a cylinder of radius $8$ and height $6$ with a hole in the shape of a cylinder of radius $2$ and the same height. That is, the bases of the roll are annuli with inner radius $2$ and outer radius $8$ . Compute the surface area of the roll.

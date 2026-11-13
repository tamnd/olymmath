---
tag: FFBJQ4TFVX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 Singapore Senior Math Olympiad
    url: https://artofproblemsolving.com/community/c6h2042223
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=59403
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=251540
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Singapore/train/0000.parquet#row=59
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: sg-smo/2016
    source: hf-ai-mo-aops
    label: 2016 Singapore Senior Math Olympiad
  - at: sg-smo
    source: hf-mathnet
    label: Singapore Singapur
---
Let $n$ be a positive integer. Determine the minimum number of lines that can be drawn on the plane so that they intersect in exactly $n$ distinct points.

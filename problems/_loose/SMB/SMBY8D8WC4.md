---
tag: SMBY8D8WC4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 Hong Kong TST
    url: https://artofproblemsolving.com/community/c6h1155577
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=14046
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=215847
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Hong_Kong/train/0000.parquet#row=294
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hk-pc/2016
    source: hf-ai-mo-aops
    label: 2016 Hong Kong TST
---
Find all natural numbers $n$ such that $n$ , $n^2+10$ , $n^2-2$ , $n^3+6$ , and $n^5+36$ are all prime numbers.

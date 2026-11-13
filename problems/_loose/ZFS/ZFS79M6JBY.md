---
tag: ZFS79M6JBY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2012 Morocco TST
    url: https://artofproblemsolving.com/community/c6h1078996
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=48662
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=161197
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Slovenia/train/0000.parquet#row=235
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ma-tst/2012
    source: hf-ai-mo-aops
    label: 2012 Morocco TST
  - at: si-mo
    source: hf-mathnet
    label: Slovenia National Math Olympiad
---
Find all positive integer $n$ and prime number $p$ such that $p^2+7^n$ is a perfect square

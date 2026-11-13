---
tag: FF6AKH1MVR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2025 Singapore Junior Math Olympiad
    url: https://artofproblemsolving.com/community/c6h3600165
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=59265
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Singapore/train/0000.parquet#row=132
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: sg-smo/2025
    source: hf-ai-mo-aops
    label: 2025 Singapore Junior Math Olympiad
  - at: sg-smo
    source: hf-mathnet
    label: Singapore Singapore Mathematical Olympiad (SMO)
---
Find all 6 digit integers $n$ such that $n$ is a perfect square and that the number formed by the last 3 digits of $n$ is 1 more than the number formed by the first 3 digits of $n$ .

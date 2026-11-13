---
tag: 9VRNX9E20B
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2015 China Second Round Olympiad
    url: https://artofproblemsolving.com/community/c6h1238141
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=12423
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=107739
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-league/2015
    source: hf-ai-mo-aops
    label: 2015 China Second Round Olympiad
---
Find all positive integers $k$ such that for any positive integer $n$ , $2^{(k-1)n+1}$ does not divide $\frac{(kn)!}{n!}$ .

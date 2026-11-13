---
tag: 2XM5K9WGHN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2004 Rioplatense Mathematical Olympiad, Level 3
    url: https://artofproblemsolving.com/community/c6h420363
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=27533
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00002-of-00003.parquet#row=148988
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: rioplatense/2004
    source: hf-ai-mo-aops
    label: 2004 Rioplatense Mathematical Olympiad, Level 3
---
Find the smallest integer $n$ such that each subset of $\{1,2,\ldots, 2004\}$ with $n$ elements has two distinct elements $a$ and $b$ for which $a^2-b^2$ is a multiple of $2004$ .

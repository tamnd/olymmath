---
tag: YH3TPMZDPR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2017 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1541549
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=78596
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=267443
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2017
    source: hf-ai-mo-aops
    label: 2017 Online Math Open Problems
---
Find the number of integers $1\leq k\leq1336$ such that $\binom{1337}{k}$ divides $\binom{1337}{k-1}\binom{1337}{k+1}$ .

*Proposed by Tristan Shin*

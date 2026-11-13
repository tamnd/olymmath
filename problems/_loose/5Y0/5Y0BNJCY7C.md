---
tag: 5Y0BNJCY7C
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Rioplatense Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h3211845
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=27637
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228025
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: rioplatense/2023
    source: hf-ai-mo-aops
    label: 2023 Rioplatense Mathematical Olympiad
---
A positive integer $N$ is *rioplatense* if it satifies the following conditions:
1 -There exist $34$ consecutive integers such that its product is divisible by $N$ , but none of them is divisible by $N$ .
2 - There **not** exist $30$ consecutive integers such that its product is divisible by $N$ , but none of them is divisible by $N$ .
Determine all rioplatense numbers.

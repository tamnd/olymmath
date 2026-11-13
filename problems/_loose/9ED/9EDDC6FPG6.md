---
tag: 9EDDC6FPG6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2008 Irish Math Olympiad
    url: https://artofproblemsolving.com/community/c6h204252
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44874
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=241112
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ie-irmo/2008
    source: hf-ai-mo-aops
    label: 2008 Irish Math Olympiad
---
How many sequences $ a_1,a_2,...,a{}_2{}_0{}_0{}_8$ are there such that each of the numbers $ 1,2,...,2008$ occurs once in the sequence, and $ i \in (a_1,a_2,...,a_i)$ for each $ i$ such that $ 2\le i \le2008$ ?

---
tag: E74KSCXSFH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2021 Argentina National Olympiad
    url: https://artofproblemsolving.com/community/c6h2830131
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=29842
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=229562
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ar-oma/2021
    source: hf-ai-mo-aops
    label: 2021 Argentina National Olympiad
  - at: ie-irmo/2004
    source: hf-ai-mo-aops
    label: 2004 Irish Math Olympiad
---
Determine all pairs of prime numbers $p$ and $q$ greater than $1$ and less than $100$ , such that the following five numbers: $$ p+6,p+10,q+4,q+10,p+q+1, $$ are all prime numbers.

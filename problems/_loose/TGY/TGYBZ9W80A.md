---
tag: TGYBZ9W80A
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2001 Moldova National Olympiad
    url: https://artofproblemsolving.com/community/c6h2525853
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=48196
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=244089
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: md-mo/2001
    source: hf-ai-mo-aops
    label: 2001 Moldova National Olympiad
---
Find all permutations of the numbers $1,2,\ldots,9$ in which no two adjacent numbers have a sum divisible by $7$ or $13$ .

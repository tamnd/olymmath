---
tag: ZP1X8TSAPR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2011 Tournament of Towns
    url: https://artofproblemsolving.com/community/c6h2022117
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=28917
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228927
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 2011 Tournament of Towns
---
A dragon gave a captured knight $100$ coins. Half of them are magical, but only dragon knows which are. Each day, the knight should divide the coins into two piles (not necessarily equal in size). The day when either magic coins or usual coins are spread equally between the piles, the dragon set the knight free. Can the knight guarantee himself a freedom in at most
(a) $50$ days?
(b) $25$ days?

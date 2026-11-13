---
tag: MFF9MTXMVR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2007 Irish Math Olympiad
    url: https://artofproblemsolving.com/community/c6h287221
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44868
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=241106
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ie-irmo/2007
    source: hf-ai-mo-aops
    label: 2007 Irish Math Olympiad
---
Find the number of zeros in which the decimal expansion of $ 2007!$ ends. Also find its last non-zero digit.

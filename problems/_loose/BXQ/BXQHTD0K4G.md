---
tag: BXQHTD0K4G
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2010 Tournament Of Towns
    url: https://artofproblemsolving.com/community/c6h390406
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=5922
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=208072
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 2010 Tournament Of Towns
---
Each of six fruit baskets contains pears, plums and apples. The number of plums in each basket equals the total number of apples in all other baskets combined while the number of apples in each basket equals the total number of pears in all other baskets combined. Prove that the total number of fruits is a multiple of $31$ .

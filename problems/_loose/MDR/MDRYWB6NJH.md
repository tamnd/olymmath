---
tag: MDRYWB6NJH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 Hong Kong TST
    url: https://artofproblemsolving.com/community/c6h3362399
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=40757
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Hong_Kong/train/0000.parquet#row=410
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hk-pc/2022
    source: hf-ai-mo-aops
    label: 2022 Hong Kong TST
  - at: hk-pc
    source: hf-mathnet
    label: Hong Kong IMO HK TST
---
Four non-overlapping families dine at a restaurant together. Each family consists of one father, one mother and three children. There are five tables, which are red, blue, yellow, green and brown respectively. Every table can accomodate four people, and every person must sit at some table. How many ways are there to assign the 20 people to tables so that each child sits at the same table as at least one of his/her parents? (We do not distinguish between the four seats at the same table.)

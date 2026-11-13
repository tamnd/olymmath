---
tag: NKXAFTWJGS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023-24 IOQM India
    url: https://artofproblemsolving.com/community/c6h3148218
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=42360
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=238940
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: in-prmo-ioqm/2023
    source: hf-ai-mo-aops
    label: 2023-24 IOQM India
---
In the land of Binary , the unit of currency is called Ben and currency notes are available in denominations $1,2,2^2,2^3,..$ Bens. The rules of the Government of Binary stipulate that one can not use more than two notes of any one denomination in any transaction. For example, one can give change for $2$ Bens in two ways : $2$ one Ben notes or $1$ two Ben note. For $5$ Ben one can given $1$ one Ben and $1$ four Ben note or $1$ Ben note and $2$ two Ben notes. Using $5$ one Ben notes or $3$ one Ben notes and $1$ two Ben notes for a $5$ Ben transaction is prohibited. Find the number of ways in which one can give a change $100$ Bens following the rules of the Government.

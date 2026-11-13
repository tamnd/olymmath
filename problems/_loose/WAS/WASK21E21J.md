---
tag: WASK21E21J
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2015 India IMO Training Camp
    url: https://artofproblemsolving.com/community/c6h1113221
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=12644
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=214531
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Mongolia/train/0000.parquet#row=189
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: in-tst/2015
    source: hf-ai-mo-aops
    label: 2015 India IMO Training Camp
  - at: mn-mo
    source: hf-mathnet
    label: Mongolia Mongolian Mathematical Olympiad
---
Every cell of a $3\times 3$ board is coloured either by red or blue. Find the number of all colorings in which there are no $2\times 2$ squares in which all cells are red.

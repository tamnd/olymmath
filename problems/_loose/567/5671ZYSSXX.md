---
tag: 5671ZYSSXX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2014 India IMO Training Camp
    url: https://artofproblemsolving.com/community/c6h597378
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=11236
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=213181
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: in-tst/2014
    source: hf-ai-mo-aops
    label: 2014 India IMO Training Camp
---
In how many ways rooks can be placed on a $8$ by $8$ chess board such that every row and every column has at least one rook?
(Any number of rooks are available,each square can have at most one rook and there is no relation of attacking between them)

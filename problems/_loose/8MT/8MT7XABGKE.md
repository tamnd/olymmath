---
tag: 8MT7XABGKE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1950 Moscow Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h1890182
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=56673
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=26315
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-moscow/1950
    source: hf-ai-mo-aops
    label: 1950 Moscow Mathematical Olympiad
---
Is it possible to draw $10$ bus routes with stops such that for any $8$ routes there is a stop that does not belong to any of the routes, but any $9$ routes pass through all the stops?

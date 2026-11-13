---
tag: VDS6E6R7DF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2017 Iran MO (3rd round)
    url: https://artofproblemsolving.com/community/c6h1511909
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44402
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240676
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo/2017
    source: hf-ai-mo-aops
    label: 2017 Iran MO (3rd round)
---
Two persons are playing the following game on a $n\times m$ table, with drawn lines:
Person $\#1$ starts the game. Each person in their move, folds the table on one of its lines. The one that could not fold the table on their turn loses the game.
Who has a winning strategy?

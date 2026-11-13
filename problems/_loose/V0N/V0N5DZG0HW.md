---
tag: V0N5DZG0HW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 Argentina National Olympiad
    url: https://artofproblemsolving.com/community/c6h2996173
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=29814
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=229535
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ar-oma/2016
    source: hf-ai-mo-aops
    label: 2016 Argentina National Olympiad
---
Agustín and Lucas, by turns, each time mark a box that has not yet been marked on a $101\times 101$ grid board. Augustine starts the game. You cannot check a box that already has two checked boxes in its row or column. The one who can't make his move loses. Decide which of the two players has a winning strategy.

---
tag: JKDMZMTRYX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2012 Argentina National Olympiad
    url: https://artofproblemsolving.com/community/c6h2995340
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=29792
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=229513
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ar-oma/2012
    source: hf-ai-mo-aops
    label: 2012 Argentina National Olympiad
---
In each square of a $2012\times 2012$ board there's a person. People are either honest, who always tell the truth, or liars, who always lie. At a given moment, each person makes the same statement: "In my row there are the same number of liars as in my column." Determine the minimum number of honest people that can be on the board.

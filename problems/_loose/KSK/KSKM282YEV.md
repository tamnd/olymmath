---
tag: KSKM282YEV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1985 Bundeswettbewerb Mathematik
    url: https://artofproblemsolving.com/community/c6h2965038
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=39314
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236614
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: de-bundeswettbewerb/1985
    source: hf-ai-mo-aops
    label: 1985 Bundeswettbewerb Mathematik
---
Sixty-four dice with the numbers "one" to "six" are placed on one table and formed into a square with eight horizontal and eight vertical rows of cubes pushed together. By rotating the dice, while maintaining their place, we want to finally have all sixty-four dice the "one" points upwards. Each dice however, may not be turned individually, but only every eight dice in a horizontal or vertical row together by $90^o$ to the longitudinal axis of this row may turn. Prove that it is always possible to solve the dice by repeatedly applying the permitted type of rotation to the required end position.

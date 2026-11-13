---
tag: 4DBVWV1V09
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1949 Moscow Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h1879136
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=56658
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=249556
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-moscow/1949
    source: hf-ai-mo-aops
    label: 1949 Moscow Mathematical Olympiad
---
Two squares are said to be *juxtaposed* if their intersection is a point or a segment. Prove that it is impossible to *juxtapose* to a square more than eight non-overlapping squares of the same size.

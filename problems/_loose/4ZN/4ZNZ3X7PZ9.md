---
tag: 4ZNZ3X7PZ9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Azerbaijan National Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h3141647
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=30712
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=230081
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: az-mo/2023
    source: hf-ai-mo-aops
    label: 2023 Azerbaijan National Mathematical Olympiad
---
For any natural number, let's call the numbers formed from its digits and have the same "digit" arrangement with the initial number as the "partial numbers". For example, the partial numbers of $149$ are ${1, 4, 9, 14,19, 49, 149},$ and the partial numbers of $313$ are ${3, 1, 31,33, 13, 313}.$ Find all natural numbers whose partial numbers are all prime. Justify your opinion.

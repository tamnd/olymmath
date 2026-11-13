---
tag: X5Y8FJMDMC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2009 Tournament Of Towns
    url: https://artofproblemsolving.com/community/c6h2024485
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=4346
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=206530
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 2009 Tournament Of Towns
---
Each square of a $10\times 10$ board contains a chip. One may choose a diagonal containing an even number of chips and remove any chip from it. Find the maximal number of chips that can be removed from the board by these operations.

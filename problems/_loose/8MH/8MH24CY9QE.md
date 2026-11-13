---
tag: 8MH24CY9QE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2018 Hong Kong TST
    url: https://artofproblemsolving.com/community/c6h1685019
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=16558
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=218201
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hk-pc/2018
    source: hf-ai-mo-aops
    label: 2018 Hong Kong TST
---
On a rectangular board with $m$ rows and $n$ columns, where $m\leq n$ , some squares are coloured black in a way that no two rows are alike. Find the biggest integer $k$ such that for every possible colouring to start with one can always color $k$ columns entirely red in such a way that no two rows are still alike.

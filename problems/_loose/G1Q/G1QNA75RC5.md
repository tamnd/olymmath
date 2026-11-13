---
tag: G1QNA75RC5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2008 Tournament Of Towns
    url: https://artofproblemsolving.com/community/c6h2024417
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=28877
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228887
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 2008 Tournament Of Towns
---
We may permute the rows and the columns of the table below.
How may different tables can we generate?

1 2 3 4 5 6 7
7 1 2 3 4 5 6
6 7 1 2 3 4 5
5 6 7 1 2 3 4
4 5 6 7 1 2 3
3 4 5 6 7 1 2
2 3 4 5 6 7 1

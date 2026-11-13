---
tag: VZX5VSXX6P
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2012 Tournament of Towns
    url: https://artofproblemsolving.com/community/c6h2038186
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=28984
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228992
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 2012 Tournament of Towns
---
Some cells of a $11 \times 11$ table are filled with pluses. It is known that the total number of pluses in the given table and in any of its $2 \times 2$ sub-tables is even. Prove that the total number of pluses on the main diagonal of the given table is also even.
( $2 \times 2$ sub-table consists of four adjacent cells, four cells around a common vertex).

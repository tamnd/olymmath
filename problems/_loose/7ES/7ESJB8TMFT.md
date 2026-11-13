---
tag: 7ESJB8TMFT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2003 Peru Cono Sur TST
    url: https://artofproblemsolving.com/community/c6h3065505
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=50325
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=246038
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: pe-conosur-tst/2003
    source: hf-ai-mo-aops
    label: 2003 Peru Cono Sur TST
---
Eight tiles are located on an $8\times 8$ board in such a way that no pair of them
are in the same row or in the same column. Prove that, among the distances between each pair of tiles, we can find two of them that are equal (the distance between two tiles is the distance between the centers of the squares in which they are located).

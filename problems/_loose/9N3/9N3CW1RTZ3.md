---
tag: 9N3CW1RTZ3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2015 Peru Cono Sur TST
    url: https://artofproblemsolving.com/community/c6h3108651
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=50394
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=246049
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: pe-conosur-tst/2015
    source: hf-ai-mo-aops
    label: 2015 Peru Cono Sur TST
---
Let $n$ be a positive integer. On a $2n\times 2n$ board, the $2n^2$ squares were painted white and the other $2n^2$ squares were painted black. One operation is to choose a $2\times 2$ subtable and mirror its $4$ cells about the vertical or horizontal axis of symmetry of that subtable. For what values of $n$ is it always possible to obtain a chess-like coloring from any initial coloring?

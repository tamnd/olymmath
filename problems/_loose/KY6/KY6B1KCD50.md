---
tag: KY6B1KCD50
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2000 France Team Selection Test
    url: https://artofproblemsolving.com/community/c6h523065
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=39041
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236373
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: fr-tst/2000
    source: hf-ai-mo-aops
    label: 2000 France Team Selection Test
---
Some squares of a $1999\times 1999$ board are occupied with pawns. Find the smallest number of pawns for which it is possible that for each empty square, the total number of pawns in the row or column of that square is at least $1999$ .

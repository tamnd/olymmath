---
tag: J6G73MYYV1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 Tournament of Towns
    url: https://artofproblemsolving.com/community/c6h2038267
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=29024
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=229030
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 2013 Tournament of Towns
---
Eight rooks are placed on a chessboard so that no two rooks attack each other. Prove that one can always move all rooks, each by a move of a knight so that in the final position no two rooks attack each other as well. (In intermediate positions several rooks can share the same square).

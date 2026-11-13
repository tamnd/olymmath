---
tag: WY1SQJM5NM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2007 Switzerland - Final Round
    url: https://artofproblemsolving.com/community/c6h2984864
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=60505
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=91124
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ch-smo/2007
    source: hf-ai-mo-aops
    label: 2007 Switzerland - Final Round
---
The plane is divided into unit squares. Each box should be be colored in one of $n$ colors , so that if four squares can be covered with an $L$ -tetromino, then these squares have four different colors (the $L$ -Tetromino may be rotated and be mirrored). Find the smallest value of $n$ for which this is possible.

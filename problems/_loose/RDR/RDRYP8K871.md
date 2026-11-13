---
tag: RDRYP8K871
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=10917
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=187321
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ibero/2000
    source: hf-numina-olympiads
    label: IberoAmerican_MO
---
Label the vertices of a regular $n$-gon from 1 to $n>3$. Draw all the diagonals. Show that if $n$ is odd then we can label each side and diagonal with a number from 1 to $n$ different from the labels of its endpoints so that at each vertex the sides and diagonals all have different labels.

---
tag: GX9Z26H9FX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2003 All-Russian Olympiad
    url: https://artofproblemsolving.com/community/c6h375581
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=55800
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=249201
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian/2003
    source: hf-ai-mo-aops
    label: 2003 All-Russian Olympiad
---
On a line are given $2k -1$ white segments and $2k -1$ black ones. Assume that each white segment intersects at least $k$ black segments, and each black segment intersects at least $k$ white ones. Prove that there are a black segment intersecting all the white ones, and a white segment intersecting all the black ones.

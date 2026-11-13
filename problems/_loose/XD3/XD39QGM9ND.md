---
tag: XD39QGM9ND
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2004 All-Russian Olympiad
    url: https://artofproblemsolving.com/community/c6h5511
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=55827
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=249228
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian/2004
    source: hf-ai-mo-aops
    label: 2004 All-Russian Olympiad
---
A sequence of non-negative rational numbers $ a(1), a(2), a(3), \ldots$ satisfies $ a(m) + a(n) = a(mn)$ for arbitrary natural $ m$ and $ n$ . Show that not all elements of the sequence can be distinct.

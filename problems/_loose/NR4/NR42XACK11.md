---
tag: NR42XACK11
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2015 Caucasus Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h1828589
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=21960
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00002-of-00003.parquet#row=148613
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: caucasus/2015
    source: hf-ai-mo-aops
    label: 2015 Caucasus Mathematical Olympiad
---
The workers laid a floor of size $n \times n$ with tiles of two types: $2 \times 2$ and $3 \times 1$ .
It turned out that they were able to completely lay the floor in such a way that the same number of tiles of each type was used. Under what conditions could this happen?
(You can't cut tiles and also put them on top of each other.)

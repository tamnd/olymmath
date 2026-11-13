---
tag: AHTDFMEX8Y
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2010 All-Russian Olympiad
    url: https://artofproblemsolving.com/community/c6h366049
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=4559
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=206707
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian/2010
    source: hf-ai-mo-aops
    label: 2010 All-Russian Olympiad
---
In the county some pairs of towns connected by two-way non-stop flight. From any town we can flight to any other (may be not on one flight). Gives, that if we consider any cyclic (i.e. beginning and finish towns match) route, consisting odd number of flights, and close all flights of this route, then we can found two towns, such that we can't fly from one to other.
Proved, that we can divided all country on $4$ regions, such that any flight connected towns from other regions.

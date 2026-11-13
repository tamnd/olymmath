---
tag: 49B9KHJHW9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2004 All-Russian Olympiad
    url: https://artofproblemsolving.com/community/c6h5530
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=55834
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=249235
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
Prove that there is no finite set which contains more than $ 2N,$ with $ N > 3,$ pairwise non-collinear vectors of the plane, and to which the following two characteristics apply:

1) for $ N$ arbitrary vectors from this set there are always further $ N-1$ vectors from this set so that the sum of these is $ 2N-1$ vectors is equal to the zero-vector;

2) for $ N$ arbitrary vectors from this set there are always further $ N$ vectors from this set so that the sum of these is $ 2N$ vectors is equal to the zero-vector.

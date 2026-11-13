---
tag: EZXHETCX38
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1961 All-Soviet Union Olympiad
    url: https://artofproblemsolving.com/community/c6h1124401
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=55035
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=248393
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian/1961
    source: hf-ai-mo-aops
    label: 1961 All-Soviet Union Olympiad
---
Consider $n$ points, some of them connected by segments. These segments do not intersect each other. You can reach every point from any every other one in exactly one way by traveling along the segments. Prove that the total number of segments is $n-1$ .

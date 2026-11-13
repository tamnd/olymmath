---
tag: GF436HHNSX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1985 All Soviet Union Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h1889064
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=55437
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=248804
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian/1985
    source: hf-ai-mo-aops
    label: 1985 All Soviet Union Mathematical Olympiad
---
$n$ straight lines are drawn in a plane. They divide the plane onto several parts. Some of the parts are painted.
Not a pair of painted parts has non-zero length common bound. Prove that the number of painted parts is not more than $\frac{n^2 + n}{3}$ .

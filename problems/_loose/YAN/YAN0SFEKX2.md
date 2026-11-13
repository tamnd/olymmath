---
tag: YAN0SFEKX2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1983 All Soviet Union Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h1884190
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=55399
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=248766
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian/1983
    source: hf-ai-mo-aops
    label: 1983 All Soviet Union Mathematical Olympiad
---
The $M$ set consists of $k$ non-intersecting segments on the line. It is possible to put an arbitrary segment shorter than $1$ cm on the line in such a way, that his ends will belong to $M$ . Prove that the total sum of the segment lengths is not less than $1/k$ cm.

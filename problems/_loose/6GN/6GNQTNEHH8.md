---
tag: 6GNQTNEHH8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2021 239 Open Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h2544738
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=19708
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=221234
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-239-open/2021
    source: hf-ai-mo-aops
    label: 2021 239 Open Mathematical Olympiad
---
Given $n$ lines on the plane, they divide the plane onto several
bounded or bounded polygonal regions. Define the rank of a region as
the number of vertices on its boundary (a vertex is a point which
belongs to at least two lines). Prove that the sum of squares of
ranks of all regions does not exceed $10n^2$ .
(D. Fomin)

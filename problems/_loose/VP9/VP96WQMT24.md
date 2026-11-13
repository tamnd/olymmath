---
tag: VP96WQMT24
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2015 Argentina National Olympiad
    url: https://artofproblemsolving.com/community/c6h2996146
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=29809
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=229530
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ar-oma/2015
    source: hf-ai-mo-aops
    label: 2015 Argentina National Olympiad
---
An segment $S$ of length $50$ is covered by several segments of length $1$ , all of them contained in $S$ . If any of these unit segments were removed, $S$ would no longer be completely covered. Find the maximum number of unit segments with this property.

Clarification: Assume that the segments include their endpoints.

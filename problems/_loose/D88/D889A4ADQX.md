---
tag: D889A4ADQX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 Grosman Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h2927855
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=45046
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=241258
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: il-grossman/2022
    source: hf-ai-mo-aops
    label: 2022 Grosman Mathematical Olympiad
---
$n$ lines are given in the plane so that no three of them concur and no two are parallel.
Show that there is a non-self-intersecting path consisting of $n$ straight segments so that each of the given lines contains exactly one of the segments of the path.

---
tag: JQ6X9VY6AQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1998 All-Russian Olympiad
    url: https://artofproblemsolving.com/community/c6h514556
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=55713
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=249098
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian/1998
    source: hf-ai-mo-aops
    label: 1998 All-Russian Olympiad
---
Let $k$ be a positive integer. Some of the $2k$ -element subsets of a given set are marked. Suppose that for any subset of cardinality less than or equal to $(k+1)^2$ all the marked subsets contained in it (if any) have a common element. Show that all the marked subsets have a common element.

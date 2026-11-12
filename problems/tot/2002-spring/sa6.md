---
tag: 8HMS720E9D
kind: problem
appearances:
  - at: tot/2002-spring/sa6
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: ru
    source: problems-ru
    name: problems.ru, problem 98578
    url: https://problems.ru/view_problem_details_new.php?id=98578
    origin: H2
    zone: Z3
    kind: transcription
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: AI-MO AoPS
    url: https://huggingface.co/datasets/project-numina/aops
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-aops-wiki
    name: AoPS wiki problems
    url: https://artofproblemsolving.com/community/c6h589409p3490237
    origin: D
    zone: Z2
    kind: transcription
  - id: S4
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=55292
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The $52$ cards of a standard deck are placed in a $13\times 4$ array. If every two adjacent cards, vertically or horizontally, have the same suit or have the same value, prove that all $13$ cards of the same suit are in the same row.

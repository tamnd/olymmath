---
tag: EZMPNBC7HE
kind: problem
appearances:
  - at: tot/2020-spring/sa6
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: ru
    source: problems-ru
    name: problems.ru, problem 66863
    url: https://problems.ru/view_problem_details_new.php?id=66863
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
    url: https://artofproblemsolving.com/community/c6h2132543p15598112
    origin: D
    zone: Z2
    kind: transcription
  - id: S4
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=221049
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are $2n$ consecutive integers on a board. It is permitted to split them into pairs and simultaneously replace each pair by their difference (not necessarily positive) and their sum. Prove that it is impossible to obtain any $2n$ consecutive integers again.

Alexandr Gribalko

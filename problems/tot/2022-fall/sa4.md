---
tag: RD134WRHB1
kind: problem
appearances:
  - at: tot/2022-fall/sa4
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: ru
    source: problems-ru
    name: problems.ru, problem 67162
    url: https://problems.ru/view_problem_details_new.php?id=67162
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
    url: https://artofproblemsolving.com/community/c6h3016097p27099833
    origin: D
    zone: Z2
    kind: transcription
  - id: S4
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=229169
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a checkered square, there is a closed door between any two cells adjacent by side. A beetle starts from some cell and travels through cells, passing through doors; she opens a closed door in the direction she is moving and leaves that door open. Through an open door, the beetle can only pass in the direction the door is opened. Prove that if at any moment the beetle wants to return to the starting cell, it is possible for her to do that.

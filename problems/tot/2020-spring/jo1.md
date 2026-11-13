---
tag: GBNXYDVYST
kind: problem
appearances:
  - at: tot/2020-spring/jo1
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: ru
    source: problems-ru
    name: problems.ru, problem 66841
    url: https://problems.ru/view_problem_details_new.php?id=66841
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
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=221051
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The Quadrumland map is a 6 × 6 square where each square cell is either a kingdom or a disputed territory. There are 27 kingdoms and 9 disputed territories. Each disputed territory is claimed by those and only those kingdoms that are neighbouring with it (adjacent by an edge or a vertex). Is it possible that for each disputed territory the numbers of claims are different?

---
tag: 7THRBD0H33
kind: problem
appearances:
  - at: tot/2001-fall/sa4
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: ru
    source: problems-ru
    name: problems.ru, problem 98552
    url: https://problems.ru/view_problem_details_new.php?id=98552
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
    url: https://artofproblemsolving.com/community/c6h425073p2405498
    origin: D
    zone: Z2
    kind: transcription
  - id: S4
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228614
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $F_1$ be an arbitrary convex quadrilateral. For $k\ge2$ , $F_k$ is obtained by cutting $F_{k-1}$ into two pieces along one of its diagonals, flipping one piece over, and the glueing them back together along the same diagonal. What is the maximum number of non-congruent quadrilaterals in the sequence $\{F_k\}$ ?

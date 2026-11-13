---
tag: D9SNBQCM9A
kind: problem
appearances:
  - at: tot/2001-spring/ja4
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: ru
    source: problems-ru
    name: problems.ru, problem 98521
    url: https://problems.ru/view_problem_details_new.php?id=98521
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
    url: https://artofproblemsolving.com/community/c6h424958p2404850
    origin: D
    zone: Z2
    kind: transcription
  - id: S4
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228582
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Several non-intersecting diagonals divide a convex polygon into triangles. At each vertex of the polygon the number of triangles adjacent to it is written. Is it possible to reconstruct all the diagonals using these numbers if the diagonals are erased?

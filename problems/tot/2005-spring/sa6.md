---
tag: GFYX8TVS2R
kind: problem
appearances:
  - at: tot/2005-spring/sa6
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: ru
    source: problems-ru
    name: problems.ru, problem 65581
    url: https://problems.ru/view_problem_details_new.php?id=65581
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
    url: https://artofproblemsolving.com/community/c6h1069672p4646355
    origin: D
    zone: Z2
    kind: transcription
  - id: S4
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228759
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A *lazy* rook can only move from a square to a vertical or a horizontal neighbour. It follows a path which visits each square of an $8 \times 8$ chessboard exactly once. Prove that the number of such paths starting at a corner square is greater than the number of such paths starting at a diagonal neighbour of a corner square.

*(7 points)*

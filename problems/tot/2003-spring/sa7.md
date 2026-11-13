---
tag: 81GPS81XV7
kind: problem
appearances:
  - at: tot/2003-spring/sa7
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: ru
    source: problems-ru
    name: problems.ru, problem 98626
    url: https://problems.ru/view_problem_details_new.php?id=98626
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
    url: https://artofproblemsolving.com/community/c6h411895p2311963
    origin: D
    zone: Z2
    kind: transcription
  - id: S4
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228678
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A square is triangulated in such way that no three vertices are collinear. For every vertex (including vertices of the square) the number of sides issuing from it is counted. Can it happen that all these numbers are even?

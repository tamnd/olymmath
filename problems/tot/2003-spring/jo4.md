---
tag: FZMMX4ZE5G
kind: problem
appearances:
  - at: tot/2003-spring/jo4
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: ru
    source: problems-ru
    name: problems.ru, problem 98607
    url: https://problems.ru/view_problem_details_new.php?id=98607
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
    url: https://artofproblemsolving.com/community/c6h411665p2310134
    origin: D
    zone: Z2
    kind: transcription
  - id: S4
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228660
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Each term of a sequence of positive integers is obtained from the previous term by adding to it its largest digit. What is the maximal number of successive odd terms in such a sequence?

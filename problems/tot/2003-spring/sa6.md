---
tag: WZZ8KHE6XC
kind: problem
appearances:
  - at: tot/2003-spring/sa6
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: ru
    source: problems-ru
    name: problems.ru, problem 98625
    url: https://problems.ru/view_problem_details_new.php?id=98625
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
    url: https://artofproblemsolving.com/community/c6h411894p2311961
    origin: D
    zone: Z2
    kind: transcription
  - id: S4
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228677
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The signs " $+$ " or " $-$ " are placed in all cells of a $4 \times 4$ square table. It is allowed to change a sign of any cell altogether with signs of all its adjacent cells (i.e. cells having a common side with it). Find the number of different tables that could be obtained by iterating this procedure.

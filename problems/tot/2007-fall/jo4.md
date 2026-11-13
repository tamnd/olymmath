---
tag: P2RGNZS1JD
kind: problem
appearances:
  - at: tot/2007-fall/jo4
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: ru
    source: problems-ru
    name: problems.ru, problem 111359
    url: https://problems.ru/view_problem_details_new.php?id=111359
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
    url: https://artofproblemsolving.com/community/c6h428419p2425069
    origin: D
    zone: Z2
    kind: transcription
  - id: S4
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=69733
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Each cell of a $29 \times 29$ table contains one of the integers $1, 2, 3, \ldots , 29$ , and each of these integers appears $29$ times. The sum of all the numbers above the main diagonal is equal to three times the sum of all the numbers below this diagonal. Determine the number in the central cell of the table.

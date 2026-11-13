---
tag: CWP3Z0215E
kind: problem
appearances:
  - at: tot/2022-spring/sa7
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: ru
    source: problems-ru
    name: problems.ru, problem 67085
    url: https://problems.ru/view_problem_details_new.php?id=67085
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
    url: https://artofproblemsolving.com/community/c6h2844649p25205408
    origin: D
    zone: Z2
    kind: transcription
  - id: S4
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=229128
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A starship is located in a halfspace at the distance $a$ from its boundary. The crew knows this but does not know which direction to move to reach the boundary plane. The starship may travel through the space by any path, may measure the way it has already travelled and has a sensor that signals when the boundary is reached. Is it possible to reach the boundary for sure, having passed no more than: $a)14a$ $b)13a$ ?

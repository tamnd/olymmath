---
tag: 1Q42R18P13
kind: problem
appearances:
  - at: tot/2022-spring/ja3
    primary: true
  - at: tot/2022-spring/sa1
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: ru
    source: problems-ru
    name: problems.ru, problem 67073
    url: https://problems.ru/view_problem_details_new.php?id=67073
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
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=229123
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For each of the $9$ positive integers $n,2n,3n,\dots , 9n$ Alice take the first decimal digit (from the left) and writes it onto a blackboard. She selected $n$ so that among the nine digits on the blackboard there is the least possible number of different digits. What is this number of different digits equals to?

---
tag: PQD8E51PG0
kind: problem
appearances:
  - at: tot/2020-spring/ja7
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: ru
    source: problems-ru
    name: problems.ru, problem 66857
    url: https://problems.ru/view_problem_details_new.php?id=66857
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
    url: https://artofproblemsolving.com/community/c6h2141899p15731365
    origin: D
    zone: Z2
    kind: transcription
  - id: S4
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=221066
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Gleb picked positive integers $N$ and $a$ ( $a < N$ ). He wrote the number $a$ on a blackboard. Then each turn he did the following: he took the last number on the blackboard, divided the number $N$ by this last number with remainder and wrote the remainder onto the board. When he wrote the number $0$ onto the board, he stopped. Could he pick $N$ and $a$ such that the sum of the numbers on the blackboard would become greater than $100N$ ?

Ivan Mitrofanov

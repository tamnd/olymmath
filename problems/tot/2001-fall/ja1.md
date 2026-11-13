---
tag: MRMGZNZQKN
kind: problem
appearances:
  - at: tot/2001-fall/ja1
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: ru
    source: problems-ru
    name: problems.ru, problem 98542
    url: https://problems.ru/view_problem_details_new.php?id=98542
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
    url: https://artofproblemsolving.com/community/c6h425056p2405462
    origin: D
    zone: Z2
    kind: transcription
  - id: S4
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228603
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Do there exist postive integers $a_1<a_2<\cdots<a_{100}$ such that for $2\le k\le100$ the greatest common divisor of $a_{k-1}$ and $a_k$ is greater than the greatest common divisor of $a_k$ and $a_{k+1}$ ?

---
tag: M1WCSSNEAR
kind: problem
appearances:
  - at: tot/2007-fall/so2
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: ru
    source: problems-ru
    name: problems.ru, problem 111353
    url: https://problems.ru/view_problem_details_new.php?id=111353
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
    url: https://artofproblemsolving.com/community/c6h428693p2426208
    origin: D
    zone: Z2
    kind: transcription
  - id: S4
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00002-of-00003.parquet#row=149026
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Initially, the number $1$ and two positive numbers $x$ and $y$ are written on a blackboard. In each step, we can choose two numbers on the blackboard, not necessarily different, and write their sum or their difference on the blackboard. We can also choose a non-zero number of the blackboard and write its reciprocal on the blackboard. Is it possible to write on the blackboard, in a finite number of moves, the number
[list]**a)** $x^2$ ;**b)** $xy$ ?[/list]

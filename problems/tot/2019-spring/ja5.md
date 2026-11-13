---
tag: CGBJKMSGAY
kind: problem
appearances:
  - at: tot/2019-spring/ja5
    primary: true
  - at: tot/2019-spring/sa4
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: ru
    source: problems-ru
    name: problems.ru, problem 66749
    url: https://problems.ru/view_problem_details_new.php?id=66749
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
    url: https://artofproblemsolving.com/community/c6h2102844p15208927
    origin: D
    zone: Z2
    kind: transcription
  - id: S4
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00002-of-00003.parquet#row=149036
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
One needs to ffll the cells of an $n\times n$ table ( $n > 1$ ) with distinct integers from $1$ to $n^2$ so that every two consecutive integers are placed in cells that share a side, while every two integers with the same remainder if divided by $n$ are placed in distinct rows and distinct columns. For which $n$ is this possible?

(Alexandr Gribalko)

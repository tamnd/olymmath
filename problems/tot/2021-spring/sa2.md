---
tag: BSPSGRMN76
kind: problem
appearances:
  - at: tot/2021-spring/sa2
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: ru
    source: problems-ru
    name: problems.ru, problem 66907
    url: https://problems.ru/view_problem_details_new.php?id=66907
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
    url: https://artofproblemsolving.com/community/c6h3017324p27113628
    origin: D
    zone: Z2
    kind: transcription
  - id: S4
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=8825
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Does there exist a positive integer $n{}$ such that for any real $x{}$ and $y{}$ there exist real numbers $a_1, \ldots , a_n$ satisfying $$x=a_1+\cdots+a_n\text{ and }y=\frac{1}{a_1}+\cdots+\frac{1}{a_n}?$$
*Artemiy Sokolov*

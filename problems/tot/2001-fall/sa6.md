---
tag: PNV8PJ92H9
kind: problem
appearances:
  - at: tot/2001-fall/sa6
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: ru
    source: problems-ru
    name: problems.ru, problem 98554
    url: https://problems.ru/view_problem_details_new.php?id=98554
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
    url: https://artofproblemsolving.com/community/c6h425075p2405501
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a row are 23 boxes such that for $1\le k \le 23$ , there is a box containing exactly $k$ balls. In one move, we can double the number of balls in any box by taking balls from another box which has more. Is it always possible to end up with exactly $k$ balls in the $k$ -th box for $1\le k\le 23$ ?

---
tag: V9A640GY3S
kind: problem
appearances:
  - at: tot/2020-fall/sa7
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: ru
    source: problems-ru
    name: problems.ru, problem 66888
    url: https://problems.ru/view_problem_details_new.php?id=66888
    origin: H2
    zone: Z3
    kind: transcription
  - id: S2
    lang: en
    source: hf-aops-wiki
    name: AoPS wiki problems
    url: https://artofproblemsolving.com/community/c6h2478177p20786769
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-ai-mo-aops
    name: 2021 Tournament of Towns
    url: https://artofproblemsolving.com/community/c6h2478177
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=29101
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A white bug sits in one corner square of a $1000$ × $n$ chessboard, where $n$ is an odd positive integer and $n > 2020$. In the two nearest corner squares there are two black chess bishops. On each move, the bug either steps into a square adjacent by side or moves as a chess knight. The bug wishes to reach the opposite corner square by never visiting a square occupied or attacked by a bishop, and visiting every other square exactly once. Show that the number of ways for the bug to attain its goal does not depend on $n$.

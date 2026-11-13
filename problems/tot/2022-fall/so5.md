---
tag: T1JEKFJEEJ
kind: problem
appearances:
  - at: tot/2022-fall/so5
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: ru
    source: problems-ru
    name: problems.ru, problem 67151
    url: https://problems.ru/view_problem_details_new.php?id=67151
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
    url: https://artofproblemsolving.com/community/c6h3016079p27099640
    origin: D
    zone: Z2
    kind: transcription
  - id: S4
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=229161
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A $2N\times2N$ board is covered by non-overlapping dominos of $1\times2$ size. A lame rook (which can only move one cell at a time, horizontally or vertically) has visited each cell once on its route across the board. Call a move by the rook longitudinal if it is a move from one cell of a domino to another cell of the same domino. What is:
[list=a]
[*]the maximum possible number of longitudinal moves?
[*]the minimum possible number of longitudinal moves?
[/list]

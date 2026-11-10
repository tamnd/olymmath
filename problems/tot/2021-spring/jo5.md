---
tag: X7RMED704T
kind: problem
appearances:
  - at: tot/2021-spring/jo5
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: ru
    source: problems-ru
    name: problems.ru, problem 66893
    url: https://problems.ru/view_problem_details_new.php?id=66893
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
    url: https://artofproblemsolving.com/community/c6h3017303p27113548
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are several dominoes on a board such that each domino occupies two adjacent cells and none of the dominoes are adjacent by side or vertex. The bottom left and top right cells of the board are free. A token starts at the bottom left cell and can move to a cell adjacent by side: one step to the right or upwards at each turn. Is it always possible to move from the bottom left to the top right cell without passing through dominoes if the size of the board is a) $100 \times 101$ cells and b) $100 \times 100$ cells?

*Nikolay Chernyatiev*

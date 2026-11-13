---
tag: 4P319SGD3W
kind: problem
appearances:
  - at: tot/2003-spring/jo2
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: ru
    source: problems-ru
    name: problems.ru, problem 98605
    url: https://problems.ru/view_problem_details_new.php?id=98605
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
    url: https://artofproblemsolving.com/community/c6h411663p2310130
    origin: D
    zone: Z2
    kind: transcription
  - id: S4
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228658
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Two players in turns color the sides of an $n$ -gon. The first player colors any side that has $0$ or $2$ common vertices with already colored sides. The second player colors any side that has exactly $1$ common vertex with already colored sides. The player who cannot move, loses. For which $n$ the second player has a winning strategy?

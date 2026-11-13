---
tag: KM331563QQ
kind: problem
appearances:
  - at: tot/2022-fall/ja4
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: ru
    source: problems-ru
    name: problems.ru, problem 67155
    url: https://problems.ru/view_problem_details_new.php?id=67155
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
    url: https://artofproblemsolving.com/community/c6h3016084p27099700
    origin: D
    zone: Z2
    kind: transcription
  - id: S4
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=229164
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n>1$ be an integer. A rook stands in one of the cells of an infinite chessboard that is initially all white. Each move of the rook is exactly $n{}$ cells in a single direction, either vertically or horizontally, and causes the $n{}$ cells passed over by the rook to be painted black. After several such moves, without visiting any cell twice, the rook returns to its starting cell, with the resulting black cells forming a closed path. Prove that the number of white cells inside the black path gives a remainder of $1{}$ when divided by $n{}$ .

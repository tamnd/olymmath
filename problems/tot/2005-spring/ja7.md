---
tag: AQP0AW99GW
kind: problem
appearances:
  - at: tot/2005-spring/ja7
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: ru
    source: problems-ru
    name: problems.ru, problem 65579
    url: https://problems.ru/view_problem_details_new.php?id=65579
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
    url: https://artofproblemsolving.com/community/c6h1065169p4624891
    origin: D
    zone: Z2
    kind: transcription
  - id: S4
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228749
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The squares of a chessboard are numbered in the following way. The upper left corner is numbered 1. The two squares on the next diagonal from top-right to bottom-left are numbered 2 and 3. The three squares on the next diagonal are numbered 4, 5 and 6, and so on. The two squares on the second-to-last diagonal are numbered 62 and 63, and the lower right corner is numbered 64. Peter puts eight pebbles on the squares of the chessboard in such a way that there is exactly one pebble in each column and each row. Then he moves each pebble to a square with a number greater than that of the original square. Can it happen that there is still exactly one pebble in each column and each row?

*(8 points)*

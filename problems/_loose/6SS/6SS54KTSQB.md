---
tag: 6SS54KTSQB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2025 South East Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h3620182
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=36697
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-smo/2025
    source: hf-ai-mo-aops
    label: 2025 South East Mathematical Olympiad
---
Let $ m $ be a positive integer. Initially, each cell of a $ 3 \times 3 $ grid is filled with a number from $ \{1, 2, \dots, 2m\} $ (repetitions allowed). The cell at row $ i $ and column $ j $ is denoted $ (i, j) $, and rows/columns are indexed modulo 3 (e.g., cell $ (4, 2) $ is $ (1, 2) $). An operation consists of choosing integers $ i, j $, and adding 1 to the cells $ (i, j) $, $ (i+1, j) $, $ (i, j+1) $, $ (i+1, j+1) $. An initial filling is "compatible" if finitely many operations can make all cells equal. Find the number of compatible fillings in terms of $ m $.

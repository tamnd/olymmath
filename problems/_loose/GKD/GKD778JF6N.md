---
tag: GKD778JF6N
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2000 Argentina National Olympiad
    url: https://artofproblemsolving.com/community/c6h3318508
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=29720
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ar-oma/2000
    source: hf-ai-mo-aops
    label: 2000 Argentina National Olympiad
---
There is a board with 32 rows and 10 columns. Pablo writes 1 or -1 in each box. Matías, with Pablo's board in view, chooses one or more columns, and in each of the chosen columns, changes all of Pablo's numbers to their opposites (where there is 1 he puts -1 and where there is -1 he puts 1) . In the other columns, leave Pablo's numbers. Matías wins if he manages to make his board have each of the rows different from all the rows on Pablo's board. Otherwise, that is, if any row on Matías's board is equal to any row on Pablo's board, Pablo wins. If both play perfectly, determine which of the two is assured of victory.

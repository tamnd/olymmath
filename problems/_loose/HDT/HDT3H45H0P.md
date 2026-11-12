---
tag: HDT3H45H0P
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2018 Argentina National Olympiad Level 2
    url: https://artofproblemsolving.com/community/c6h3467841
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=29921
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ar-oma/2018
    source: hf-ai-mo-aops
    label: 2018 Argentina National Olympiad Level 2
---
There are $n^2$ empty boxes, each with a square base. The height and width of each box are integers between $1$ and $n$ inclusive, and no two boxes are identical. One box *fits inside* another if its height and width are both smaller, and additionally, one of its dimensions is at least $2$ units smaller. In this way, we can form sequences of boxes (the first inside the second, the second inside the third, and so on). We place each of these sequences on a different shelf. How many shelves are needed to store all the boxes, with certainty?

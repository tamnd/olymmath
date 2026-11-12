---
tag: WWHA0AWAKA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 Argentina National Olympiad Level 2
    url: https://artofproblemsolving.com/community/c6h3467825
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=29911
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ar-oma/2016
    source: hf-ai-mo-aops
    label: 2016 Argentina National Olympiad Level 2
---
There is a board with $n$ rows and $12$ columns. Each cell of the board contains a $1$ or a $0$ . The board has the following properties:
[list=i]

- All rows are distinct.

- Each row contains exactly $4$ cells with $1$ .

- For every $3$ rows, there is a column that intersects them in $3$ cells with $0$ .

Find the largest $n$ for which a board with these properties exists.

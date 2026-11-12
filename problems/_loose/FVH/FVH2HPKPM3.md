---
tag: FVH2HPKPM3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2019 Canadian Mathematical Olympiad Qualification
    url: https://artofproblemsolving.com/community/c6h2019576
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=34067
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ca-cmoqr/2019
    source: hf-ai-mo-aops
    label: 2019 Canadian Mathematical Olympiad Qualification
---
Let $(m,n,N)$ be a triple of positive integers. Bruce and Duncan play a game on an m\times n array, where the entries are all initially zeroes. The game has the following rules. $\bullet$ The players alternate turns, with Bruce going first. $\bullet$ On Bruce's turn, he picks a row and either adds $1$ to all of the entries in the row or subtracts $1$ from all the entries in the row. $\bullet$ On Duncan's turn, he picks a column and either adds $1$ to all of the entries in the column or subtracts $1$ from all of the entries in the column. $\bullet$ Bruce wins if at some point there is an entry $x$ with $|x|\ge N$ .
Find all triples $(m, n,N)$ such that no matter how Duncan plays, Bruce has a winning strategy.

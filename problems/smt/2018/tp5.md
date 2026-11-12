---
tag: 9YTYFZTRVW
kind: problem
appearances:
  - at: smt/2018/tp5
    primary: true
canonical:
  statement: S1
  rule: official-original
statements:
  - id: S1
    lang: en
    source: stanford-smt
    name: Stanford Math Tournament 2018 official paper
    url: https://www.stanfordmathtournament.org/pdfs/smt2018/team-problems.pdf
    page: 3
    origin: H1
    zone: Z2
    kind: official
    extraction: vision/codex@0.167.0 (gpt-6-sol)
    confidence: 0.9
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2018 Stanford Mathematics Tournament
    url: https://artofproblemsolving.com/community/c6h2766620
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=74016
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $ABCD$ be a quadrilateral with sides $AB,BC,CD,DA$ and diagonals $AC,BD$. Suppose that all sides of the quadrilateral have length greater than $1$, and that the difference between any side and diagonal is less than $1$. Prove that the following inequality holds:

$$
(AB+BC+CD+DA+AC+BD)^2>2|AC^3-BC^3|+2|BD^3-AD^3|-(AB+CD)^3
$$

<!-- S2 -->
Let $ABCD$ be a quadrilateral with sides $AB$ , $BC$ , $CD$ , $DA$ and diagonals $AC$ , $BD$ . Suppose that all sides of the quadrilateral have length greater than $ 1$ , and that the difference between any side and diagonal is less than 1. Prove that the following inequality holds $$ (AB + BC + CD + DA + AC + BD)^2 > 2|AC^3 - BC^3| + 2|BD^3 - AD^3| - (AB + CD)^3 $$

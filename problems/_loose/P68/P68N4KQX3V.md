---
tag: P68N4KQX3V
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 All-Russian Olympiad
    url: https://artofproblemsolving.com/community/c6h3306028
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=1414
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian/2024
    source: hf-ai-mo-aops
    label: 2024 All-Russian Olympiad
---
Let $n$ be a positive integer. Ilya and Sasha both choose a pair of different polynomials of degree $n$ with real coefficients. Lenya knows $n$ , his goal is to find out whether Ilya and Sasha have the same pair of polynomials. Lenya selects a set of $k$ real numbers $x_1<x_2<\dots<x_k$ and reports these numbers. Then Ilya fills out a $2 \times k$ table: For each $i=1,2,\dots,k$ he writes a pair of numbers $P(x_i),Q(x_i)$ (in any of the two possible orders) intwo the two cells of the $i$ -th column, where $P$ and $Q$ are his polynomials. Sasha fills out a similar table. What is the minimal $k$ such that Lenya can surely achieve the goal by looking at the tables?
*Proposed by L. Shatunov*

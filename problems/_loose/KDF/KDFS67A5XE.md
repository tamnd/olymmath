---
tag: KDFS67A5XE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2025 India IMOTC
    url: https://artofproblemsolving.com/community/c6h3585215
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=2670
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: in-tst/2025
    source: hf-ai-mo-aops
    label: 2025 India IMOTC
---
Given a positive integer $k$ , let $r_2(k)$ denote the least power of $2$ not dividing $k$ . For example, $r_2(12) = 8$ and and $r_2(1) = 2$ .

Find the smallest positive integer $n$ such that the inequality
$$
n\sum_{i=1}^n x_i^2
+ \sum_{1 \leq i < j \leq n}
r_2(j-i)x_ix_j
\geq 2025
$$
holds for all real numbers $x_1$ , $x_2$ , $\dots$ , $x_n$ satisfying $x_1+x_2+\dots+x_n = 1$ .

*Proposed by MV Adhitya*

---
tag: WD5SECAHNZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 China High School Math League
    url: https://artofproblemsolving.com/community/c6h3395067
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35378
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-league/2024
    source: hf-ai-mo-aops
    label: 2024 China High School Math League
---
**3** Let a subset $S$ of squares in a grid be ***connected*** if and only if for any distinct squares $A$ , $B$ $\in S$ , there exists integer $l \le 2$ and $l$ squares $A=C_1, C_2, \cdots, C_l=B$ such that $C_i$ and $C_{i+1}$ shares a common side for each $1 \le i \le l-1$ .

Alice has a $3 \times n$ grid which is arbitrarily colored black and white. For each positive integer $n$ , find the largest $K$ such that no matter how the grid is colored, there exists a ***connected*** subset of squares with $B$ black squares and $W$ white squares, and $|B-W| \ge K$ .

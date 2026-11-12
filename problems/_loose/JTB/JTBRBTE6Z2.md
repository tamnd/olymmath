---
tag: JTBRBTE6Z2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2014 Taiwan TST Round 3
    url: https://artofproblemsolving.com/community/c6h598539
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=61179
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tw-tst/2014
    source: hf-ai-mo-aops
    label: 2014 Taiwan TST Round 3
---
Consider a $6 \times 6$ grid. Define a *diagonal* to be the six squares whose coordinates $(i,j)$ ( $1 \le i,j \le 6)$ satisfy $i-j \equiv k \pmod 6$ for some $k=0,1,\dots,5$ . Hence there are six diagonals.

Determine if it is possible to fill it with the numbers $1,2,\dots,36$ (each exactly once) such that each row, each column, and each of the six diagonals has the same sum.

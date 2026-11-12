---
tag: 5Z5GN2XWKJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2021 Taiwan TST Round 3
    url: https://artofproblemsolving.com/community/c6h2653123
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=20583
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tw-tst/2021
    source: hf-ai-mo-aops
    label: 2021 Taiwan TST Round 3
---
There are $2020$ points on the coordinate plane { $A_i = (x_i, y_i):i = 1, ..., 2020$ }, satisfying $$ 0=x_1<x_2<...<x_{2020} $$ $$ 0=y_{2020}<y_{2019}<...<y_1 $$ Let $O=(0, 0)$ be the origin, $OA_1A_2...A_{2020}$ forms a polygon $C$ .

Now, you want to blacken the polygon $C$ . Every time you can choose a point $(x,y)$ with $x, y > 0$ , and blacken the area { $(x', y'): 0\leq x' \leq x, 0\leq y' \leq y$ }. However, you have to pay $xy$ dollars for doing so.

Prove that you could blacken the whole polygon $C$ by using $4|C|$ dollars. Here, $|C|$ stands for the area of the polygon $C$ .

*Proposed by me*

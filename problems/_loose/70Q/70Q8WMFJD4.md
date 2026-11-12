---
tag: 70Q8WMFJD4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 BMT Spring
    url: https://artofproblemsolving.com/community/c6h2751485
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=69746
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: bmt/2013
    source: hf-ai-mo-aops
    label: 2013 BMT Spring
---
Let the class of functions $f_n$ be defined such that $f_1(x)=|x^3-x^2|$ and $f_{k+1}(x)=|f_k(x)-x^3|$ for all $k\ge1$ . Denote by $S_n$ the sum of all $y$ -values of $f_n(x)$ 's "sharp" points in the First Quadrant. (A "sharp" point is a point for which the derivative is not defined.) Find the ratio of odd to even terms, $$ \lim_{k\to\infty}\frac{S_{2k+1}}{S_{2k}} $$

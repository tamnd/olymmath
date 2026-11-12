---
tag: XFPVP8C3NK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2010 Czech-Polish-Slovak Match
    url: https://artofproblemsolving.com/community/c6h422991
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=4791
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: caps/2010
    source: hf-ai-mo-aops
    label: 2010 Czech-Polish-Slovak Match
---
Given any collection of $2010$ nondegenerate triangles, their sides are painted so that each triangle has one red side, one blue side, and one white side. For each color, arrange the side lengths in order:
- let $b_1\le b_2\le\cdots\le b_{2011}$ denote the lengths of the blue sides;
- let $r_1\le r_2\le\cdots\le r_{2011}$ denote the lengths of the red sides; and
- let $w_1\le w_2\le\cdots\le w_{2011}$ denote the lengths of the white sides.
Find the largest integer $k$ for which there necessarily exists at least $k$ indices $j$ such that $b_j$ , $r_j$ , $w_j$ are the side lengths of a nondegenerate triangle.

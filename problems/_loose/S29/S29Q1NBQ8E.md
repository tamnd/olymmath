---
tag: S29Q1NBQ8E
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1992 National High School Mathematics League
    url: https://artofproblemsolving.com/community/c6h2016989
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=36118
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=234666
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-league/1992
    source: hf-ai-mo-aops
    label: 1992 National High School Mathematics League
---
In coordinate system, there are six points $P_i(x_i,y_i)(i=1,2,\cdots,6)$ , satisfying:
(1) $x_i,y_i\in\{-2,-1,0,1,2\}$ .
(2) For any three points, they are not collinear.
Prove that there exists a triangle $\triangle P_iP_jP_k(1\leq i<j<k\leq6)$ , its area is not larger than $2$ .

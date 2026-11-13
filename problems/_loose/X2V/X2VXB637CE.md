---
tag: X2VXB637CE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 Iran MO  (2nd Round)
    url: https://artofproblemsolving.com/community/c6h1238253
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44118
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240391
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo-r2/2016
    source: hf-ai-mo-aops
    label: 2016 Iran MO  (2nd Round)
---
Let $l_1,l_2,l_3,...,L_n$ be lines in the plane such that no two of them are parallel and no three of them are concurrent. Let $A$ be the intersection point of lines $l_i,l_j$ . We call $A$ an "Interior Point" if there are points $C,D$ on $l_i$ and $E,F$ on $l_j$ such that $A$ is between $C,D$ and $E,F$ . Prove that there are at least $\frac{(n-2)(n-3)}{2}$ Interior points.( $n>2$ )
note: by point here we mean the points which are intersection point of two of $l_1,l_2,...,l_n$ .

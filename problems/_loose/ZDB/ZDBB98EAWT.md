---
tag: ZDBB98EAWT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1999 Iran MO (2nd round)
    url: https://artofproblemsolving.com/community/c6h369935
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44060
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240333
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo-r2/1999
    source: hf-ai-mo-aops
    label: 1999 Iran MO (2nd round)
---
Let $A_1,A_2,\cdots,A_n$ be $n$ distinct points on the plane ( $n>1$ ). We consider all the segments $A_iA_j$ where $i<j\leq{n}$ and color the midpoints of them. What's the minimum number of colored points? (In fact, if $k$ colored points coincide, we count them $1$ .)

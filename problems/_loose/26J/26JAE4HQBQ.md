---
tag: 26JAE4HQBQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 Iran MO (3rd Round)
    url: https://artofproblemsolving.com/community/c6h1301939
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=14186
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=215981
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo/2016
    source: hf-ai-mo-aops
    label: 2016 Iran MO (3rd Round)
---
A $30\times30$ table is given. We want to color some of it's unit squares such that any colored square has at most $k$ neighbors. ( Two squares $(i,j)$ and $(x,y)$ are called neighbors if $i-x,j-y\equiv0,-1,1 \pmod {30}$ and $(i,j)\neq(x,y)$ . Therefore, each square has exactly $8$ neighbors)
What is the maximum possible number of colored squares if $:$ $a) k=6$ $b)k=1$

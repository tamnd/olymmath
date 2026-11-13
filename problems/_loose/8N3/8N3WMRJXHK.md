---
tag: 8N3WMRJXHK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1996 Iran MO (2nd round)
    url: https://artofproblemsolving.com/community/c6h379340
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44041
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240314
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo-r2/1996
    source: hf-ai-mo-aops
    label: 1996 Iran MO (2nd round)
---
Let $n$ blue points $A_i$ and $n$ red points $B_i \ (i = 1, 2, \ldots , n)$ be situated on a line. Prove that
$$\sum_{i,j} A_i B_j \geq \sum_{i<j} A_iA_j + \sum_{i<j} B_iB_j.$$

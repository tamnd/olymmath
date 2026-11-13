---
tag: K8MSGRM7KZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2021 Peru Cono Sur TST
    url: https://artofproblemsolving.com/community/c6h3108745
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=50438
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=246072
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: pe-conosur-tst/2021
    source: hf-ai-mo-aops
    label: 2021 Peru Cono Sur TST
---
Let $n\ge 2$ be an integer. They are given $n + 1$ red points in the plane. Prove that there exist $2n$ circles $C_1 , C_2 , \ldots , C_n , D_1 , D_2 , \ldots , D_n$ such that: $\bullet$ $C_1 , C_2 ,\ldots , C_n$ are concentric. $\bullet$ $D_1 , D_2 ,\ldots , D_n$ are concentric. $\bullet$ For $k = 1, 2, 3,\ldots , n$ the circles $C_k$ and $D_k$ are disjoint. $\bullet$ For $k = 1, 2, 3,\ldots , n$ it is true that $C_k$ contains exactly $k$ red dots in its interior and $D_k$ contains exactly $n + 1 - k$ red dots in its interior.

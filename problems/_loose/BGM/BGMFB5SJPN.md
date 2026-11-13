---
tag: BGMFB5SJPN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2000 Croatia National Olympiad
    url: https://artofproblemsolving.com/community/c6h2375620
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=37251
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=235225
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hr-mo/2000
    source: hf-ai-mo-aops
    label: 2000 Croatia National Olympiad
---
Let $ABCD$ be a square with side $20$ and $T_1, T_2, ..., T_{2000}$ are points in $ABCD$ such that no $3$ points in the set $S = \{A, B, C, D, T_1, T_2, ..., T_{2000}\}$ are collinear. Prove that there exists a triangle with vertices in $S$ , such that the area is less than $1/10$ .

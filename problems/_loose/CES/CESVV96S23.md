---
tag: CESVV96S23
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1934 Eotvos Mathematical Competition
    url: https://artofproblemsolving.com/community/c6h3396660
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=41132
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=27927
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: kurschak/1934
    source: hf-ai-mo-aops
    label: 1934 Eotvos Mathematical Competition
---
We are given an infinite set of rectangles in the plane, each with vertices of the form $(0, 0)$ , $(0,m)$ , $(n, 0)$ and $ (n,m)$ , where $m$ and $n$ are positive integers. Prove that there exist two rectangles in the set such that one contains the other.

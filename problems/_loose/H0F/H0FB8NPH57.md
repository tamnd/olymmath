---
tag: H0FB8NPH57
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2019 China Second Round Olympiad
    url: https://artofproblemsolving.com/community/c6h1912124
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=17466
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=219076
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-league/2019
    source: hf-ai-mo-aops
    label: 2019 China Second Round Olympiad
---
Let $V$ be a set of $2019$ points in space where any of the four points are not on the same plane, and $E$ be the set of edges connected between them. Find the smallest positive integer $n$ satisfying the following condition: if $E$ has at least $n$ elements, then there exists $908$ two-element subsets of $E$ such that

- The two edges in each subset share a common vertice,
- Any of the two subsets do not intersect.

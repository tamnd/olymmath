---
tag: 6MZ0B2W2RX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1999 IberoAmerican
    url: https://artofproblemsolving.com/community/c6h83880
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=22983
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00002-of-00003.parquet#row=148678
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ibero/1999
    source: hf-ai-mo-aops
    label: 1999 IberoAmerican
---
Let $P_1,P_2,\dots,P_n$ be $n$ distinct points over a line in the plane ( $n\geq2$ ). Consider all the circumferences with diameters $P_iP_j$ ( $1\leq{i,j}\leq{n}$ ) and they are painted with $k$ given colors. Lets call this configuration a ( $n,k$ )-cloud.

For each positive integer $k$ , find all the positive integers $n$ such that every possible ( $n,k$ )-cloud has two mutually exterior tangent circumferences of the same color.

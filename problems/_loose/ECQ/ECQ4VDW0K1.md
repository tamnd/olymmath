---
tag: ECQ4VDW0K1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2007 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h249082
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35912
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=234379
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/2007
    source: hf-ai-mo-aops
    label: 2007 China Team Selection Test
---
Given $ n$ points arbitrarily in the plane $ P_{1},P_{2},\ldots,P_{n},$ among them no three points are collinear. Each of $ P_{i}$ ( $1\le i\le n$ ) is colored red or blue arbitrarily. Let $ S$ be the set of triangles having $ \{P_{1},P_{2},\ldots,P_{n}\}$ as vertices, and having the following property: for any two segments $ P_{i}P_{j}$ and $ P_{u}P_{v},$ the number of triangles having $ P_{i}P_{j}$ as side and the number of triangles having $ P_{u}P_{v}$ as side are the same in $ S.$ Find the least $ n$ such that in $ S$ there exist two triangles, the vertices of each triangle having the same color.

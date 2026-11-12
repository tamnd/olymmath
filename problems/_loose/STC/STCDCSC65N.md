---
tag: STCDCSC65N
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2025 Iran MO (3rd Round)
    url: https://artofproblemsolving.com/community/c6h3646193
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44498
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo/2025
    source: hf-ai-mo-aops
    label: 2025 Iran MO (3rd Round)
---
Find all functions $ f : \mathbb{N} \rightarrow \mathbb{N} $ such that for every three natural numbers $ x, y, k $, we have:
$$
f(x)^{k-1} + f(x)^{k-2} f(y) + \cdots + f(y)^{k-1} \mid x^{f(k)} - y^{f(k)}.
$$

---
tag: SY01ZT4DNN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1995 IMO Shortlist
    url: https://artofproblemsolving.com/community/c6h219906
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=25290
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: isl/1995
    source: hf-ai-mo-aops
    label: 1995 IMO Shortlist
---
Let $ \mathbb{N}$ denote the set of all positive integers. Prove that there exists a unique function $ f: \mathbb{N} \mapsto \mathbb{N}$ satisfying
$$ f(m + f(n)) = n + f(m + 95)
$$
for all $ m$ and $ n$ in $ \mathbb{N}.$ What is the value of $ \sum^{19}_{k = 1} f(k)?$

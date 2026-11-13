---
tag: DB9JTHPSYE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2000 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h38446
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35725
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00002-of-00003.parquet#row=149107
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/2000
    source: hf-ai-mo-aops
    label: 2000 China Team Selection Test
---
Given positive integers $k, m, n$ such that $1 \leq k \leq m \leq n$ . Evaluate

$$\sum^{n}_{i=0} \frac{(-1)^i}{n+k+i} \cdot \frac{(m+n+i)!}{i!(n-i)!(m+i)!}.$$

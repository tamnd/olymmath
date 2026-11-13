---
tag: FYRBX1416Q
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2005 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h41021
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35851
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00002-of-00003.parquet#row=149120
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/2005
    source: hf-ai-mo-aops
    label: 2005 China Team Selection Test
---
Let $\alpha$ be given positive real number, find all the functions $f: N^{+} \rightarrow R$ such that $f(k + m) = f(k) + f(m)$ holds for any positive integers $k$ , $m$ satisfying $\alpha m \leq k \leq (\alpha + 1)m$ .

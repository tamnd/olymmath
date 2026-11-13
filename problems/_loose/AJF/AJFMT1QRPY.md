---
tag: AJFMT1QRPY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2018 Danube Mathematical Competition
    url: https://artofproblemsolving.com/community/c6h1879726
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=22656
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=223804
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: danube/2018
    source: hf-ai-mo-aops
    label: 2018 Danube Mathematical Competition
---
Find all the positive integers $n$ with the property:
there exists an integer $k > 2$ and the positive rational numbers $a_1, a_2, ..., a_k$
such that $a_1 + a_2 + .. + a_k = a_1a_2 . . . a_k = n$ .

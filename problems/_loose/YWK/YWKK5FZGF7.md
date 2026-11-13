---
tag: YWKK5FZGF7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2019 Taiwan TST Round 2
    url: https://artofproblemsolving.com/community/c6h2048347
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=61159
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=253162
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tw-tst/2019
    source: hf-ai-mo-aops
    label: 2019 Taiwan TST Round 2
---
There are $ n \ge 3 $ puddings in a room. If a pudding $ A $ hates a pudding $ B $ , then $ B $ hates $ A $ as well. Suppose the following two conditions holds:

1. Given any four puddings, there are two puddings who like each other.

2. For any positive integer $ m $ , if there are $ m $ puddings who like each other, then there exists $ 3 $ puddings (from the other $ n-m $ puddings) that hate each other.

Find the smallest possible value of $ n $ .

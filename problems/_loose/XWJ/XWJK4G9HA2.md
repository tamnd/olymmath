---
tag: XWJK4G9HA2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 25th Philippine MO Area Stage
    url: https://artofproblemsolving.com/community/c6h3501208
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=50741
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=154599
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ph-pmo
    source: hf-ai-mo-aops
    label: 25th Philippine MO Area Stage
---
Let $ S $ be the sum of all positive integers less than $ 10^6 $ which can be expressed as $ m! + n! $ , where $ m $ and $ n $ are nonnegative integers. Determine the last three digits of $ S $ .

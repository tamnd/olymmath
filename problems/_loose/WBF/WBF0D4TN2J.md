---
tag: WBF0D4TN2J
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1999 IberoAmerican
    url: https://artofproblemsolving.com/community/c6h83882
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=22985
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=224111
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
Let $B$ be an integer greater than 10 such that everyone of its digits belongs to the set $\{1,3,7,9\}$ . Show that $B$ has a **prime divisor** greater than or equal to 11.

---
tag: G9D7BTW2ZB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 25th Philippine MO Area Stage
    url: https://artofproblemsolving.com/community/c6h3513483
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=50749
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=154593
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
For a set of real numbers $A$ , let $A-A$ be the set of distinct pairwise differences of $A$ ; that is, $$A-A:=\{a-b:a,b\in A\}$$ If $|A-A|=25$ , find the sum of all possible values of $|A|$ .

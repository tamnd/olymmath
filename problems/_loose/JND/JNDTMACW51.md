---
tag: JNDTMACW51
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1989 Romania Team Selection Test
    url: https://artofproblemsolving.com/community/c6h2009085
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=54312
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=247812
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-tst/1989
    source: hf-ai-mo-aops
    label: 1989 Romania Team Selection Test
---
Let $M$ denote the set of $m\times n$ matrices with entries in the set $\{0,1,2,3,4\}$ such that in each row and each column the sum of elements is divisible by $5$ . Find the cardinality of set $M$ .

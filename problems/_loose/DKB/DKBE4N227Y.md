---
tag: DKBE4N227Y
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 Iran MO (3rd Round)
    url: https://artofproblemsolving.com/community/c6h1289014
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=14169
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=215964
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo/2016
    source: hf-ai-mo-aops
    label: 2016 Iran MO (3rd Round)
---
Do there exists many infinitely points like $(x_1,y_1),(x_2,y_2),...$ such that for any sequences like { $b_1,b_2,...$ } of real numbers there exists a polynomial $P(x,y)\in R[x,y]$ such that we have for all $i$ : $P(x_{i},y_{i})=b_{i}$

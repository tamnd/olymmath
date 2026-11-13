---
tag: ZVD2A5WCN1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 CMIMC
    url: https://artofproblemsolving.com/community/c6h1221827
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=13785
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=215622
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cmimc/2016
    source: hf-ai-mo-aops
    label: 2016 CMIMC
---
Given the list $$A=[9,12,1,20,17,4,10,7,15,8,13,14],$$ we would like to sort it in increasing order. To accomplish this, we will perform the following operation repeatedly: remove an element, then insert it at any position in the list, shifting elements if necessary. What is the minimum number of applications of this operation necessary to sort $A$ ?

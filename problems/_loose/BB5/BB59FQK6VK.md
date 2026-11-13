---
tag: BB59FQK6VK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2010 Stanford Mathematics Tournament
    url: https://artofproblemsolving.com/community/c6h463425
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=5753
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=207897
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: smt/2010
    source: hf-ai-mo-aops
    label: 2010 Stanford Mathematics Tournament
---
Given triangle $ABC$ . $D$ lies on $BC$ such that $AD$ bisects $BAC$ . Given $AB=3$ , $AC=9$ , and $BC=8$ . Find $AD$ .

---
tag: JQKNWCSB6S
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 Iran MO (3rd Round)
    url: https://artofproblemsolving.com/community/c6h1301943
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=14187
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=215982
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
The sequence $(a_n)$ is defined as: $$ a_1=1007 $$ $$ a_{i+1}\geq a_i+1 $$ Prove the inequality: $$ \frac{1}{2016}>\sum_{i=1}^{2016}\frac{1}{a_{i+1}^{2}+a_{i+2}^2} $$

---
tag: ZVS9NNKCV0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2005 Iran MO (3rd Round)
    url: https://artofproblemsolving.com/community/c6h49895
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44269
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240542
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo/2005
    source: hf-ai-mo-aops
    label: 2005 Iran MO (3rd Round)
---
Find all $\alpha>0$ and $\beta>0$ that for each $(x_1,\dots,x_n)$ and $(y_1,\dots,y_n)\in\mathbb {R^+}^n$ that:$$(\sum x_i^\alpha)(\sum y_i^\beta)\geq\sum x_iy_i$$

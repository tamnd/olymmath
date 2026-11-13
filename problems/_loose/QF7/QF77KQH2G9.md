---
tag: QF77KQH2G9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2014 Iran MO (3rd Round)
    url: https://artofproblemsolving.com/community/c6h604617
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=11317
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=213261
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo/2014
    source: hf-ai-mo-aops
    label: 2014 Iran MO (3rd Round)
---
Find all continuous function $f:\mathbb{R}^{\geq 0}\rightarrow \mathbb{R}^{\geq 0}$ such that :
$$f(xf(y))+f(f(y)) = f(x)f(y)+2 \: \: \forall x,y\in \mathbb{R}^{\geq 0}$$

*Proposed by Mohammad Ahmadi*

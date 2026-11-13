---
tag: MXFKMDWBFH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 25th Philippine MO Area Stage
    url: https://artofproblemsolving.com/community/c6h3508591
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=50745
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=154588
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
For each positive integer $n$ , define the function $f_n(x)=|n-x|$ . How many real solutions are there to $$(f_1\circ f_2\circ \cdots\circ f_{24}\circ f_{25})(x)=0?$$

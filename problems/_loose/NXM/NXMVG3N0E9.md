---
tag: NXMVG3N0E9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2006 Iran MO (3rd Round)
    url: https://artofproblemsolving.com/community/c6h111403
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44315
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240588
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo/2006
    source: hf-ai-mo-aops
    label: 2006 Iran MO (3rd Round)
---
Find the biggest real number $ k$ such that for each right-angled triangle with sides $ a$ , $ b$ , $ c$ , we have
$$ a^{3}+b^{3}+c^{3}\geq k\left(a+b+c\right)^{3}.$$

---
tag: FADCGPD8C1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2006 Iran MO (3rd Round)
    url: https://artofproblemsolving.com/community/c6h111399
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44311
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240584
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
For positive numbers $x_{1},x_{2},\dots,x_{s}$ , we know that $\prod_{i=1}^{s}x_{k}=1$ . Prove that for each $m\geq n$ $$\sum_{k=1}^{s}x_{k}^{m}\geq\sum_{k=1}^{s}x_{k}^{n}$$

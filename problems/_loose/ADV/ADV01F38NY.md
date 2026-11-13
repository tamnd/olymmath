---
tag: ADV01F38NY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2009 Moldova National Olympiad
    url: https://artofproblemsolving.com/community/c6h1149024
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=48349
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=244242
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: md-mo/2009
    source: hf-ai-mo-aops
    label: 2009 Moldova National Olympiad
---
Find all pairs $(a,b)$ of real numbers, so that $\sin(2009x)+\sin(ax)+\sin(bx)=0$ holds for any $x\in \mathbf {R}$ .

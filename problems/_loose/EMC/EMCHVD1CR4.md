---
tag: EMCHVD1CR4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2008 Iran MO (3rd Round)
    url: https://artofproblemsolving.com/community/c6h223579
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44351
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240624
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo/2008
    source: hf-ai-mo-aops
    label: 2008 Iran MO (3rd Round)
---
Find the smallest real $ K$ such that for each $ x,y,z\in\mathbb R^{ + }$ :
$$ x\sqrt y + y\sqrt z + z\sqrt x\leq K\sqrt {(x + y)(y + z)(z + x)}
$$

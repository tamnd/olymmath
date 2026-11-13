---
tag: QQA5F1M89Z
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1989 Iran MO (2nd round)
    url: https://artofproblemsolving.com/community/c6h381093
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44001
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240274
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo-r2/1989
    source: hf-ai-mo-aops
    label: 1989 Iran MO (2nd round)
---
A sphere $S$ with center $O$ and radius $R$ is given. Let $P$ be a fixed point on this sphere. Points $A,B,C$ move on the sphere $S$ such that we have $\angle APB = \angle BPC = \angle CPA = 90^\circ.$ Prove that the plane of triangle $ABC$ passes through a fixed point.

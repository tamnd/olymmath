---
tag: 6TYFN9RNMB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2021 CMIMC
    url: https://artofproblemsolving.com/community/c6h2471755
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=70616
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261903
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cmimc/2021
    source: hf-ai-mo-aops
    label: 2021 CMIMC
---
Let $\triangle ABC$ be a triangle, and let $l$ be the line passing through its incenter and centroid. Assume that $B$ and $C$ lie on the same side of $l$ , and that the distance from $B$ to $l$ is twice the distance from $C$ to $l$ . Suppose also that the length $BA$ is twice that of $CA$ . If $\triangle ABC$ has integer side lengths and is as small as possible, what is $AB^2+BC^2+CA^2$ ?

*Proposed by Thomas Lam*

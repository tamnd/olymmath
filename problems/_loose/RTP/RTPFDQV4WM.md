---
tag: RTPFDQV4WM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2005 Morocco TST
    url: https://artofproblemsolving.com/community/c6h39316
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=48654
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=244567
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ma-tst/2005
    source: hf-ai-mo-aops
    label: 2005 Morocco TST
---
Let $ABCD$ be a cyclic qudrilaterlal such that $AB.BC=2.CD.DA$
Prove that $8.BD^2 \leq 9.AC^2$

---
tag: EH7XV7Z9AE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2005 Germany Team Selection Test
    url: https://artofproblemsolving.com/community/c6h39368
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=40010
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=237013
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: de-tst/2005
    source: hf-ai-mo-aops
    label: 2005 Germany Team Selection Test
---
Let $ABC$ be a triangle with orthocenter $H$ , incenter $I$ and centroid $S$ , and let $d$ be the diameter of the circumcircle of triangle $ABC$ . Prove the inequality
$$9\cdot HS^2+4\left(AH\cdot AI+BH\cdot BI+CH\cdot CI\right)\geq 3d^2,$$
and determine when equality holds.

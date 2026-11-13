---
tag: B0ZMDSV6J2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2017 NIMO Problems
    url: https://artofproblemsolving.com/community/c6h1384841
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=15822
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=217518
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: nimo/2017
    source: hf-ai-mo-aops
    label: 2017 NIMO Problems
---
Compute the number of ordered quadruples of complex numbers $(a,b,c,d)$ such that
$$ (ax+by)^3 + (cx+dy)^3 = x^3 + y^3 $$
holds for all complex numbers $x, y$ .

*Proposed by Evan Chen*
